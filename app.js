// Gestion du stockage local
class Storage {
    static getClients() {
        return JSON.parse(localStorage.getItem('clients')) || [];
    }

    static setClients(clients) {
        localStorage.setItem('clients', JSON.stringify(clients));
    }

    static getInvoices() {
        return JSON.parse(localStorage.getItem('invoices')) || [];
    }

    static setInvoices(invoices) {
        localStorage.setItem('invoices', JSON.stringify(invoices));
    }

    static getProducts() {
        return JSON.parse(localStorage.getItem('products')) || [];
    }

    static setProducts(products) {
        localStorage.setItem('products', JSON.stringify(products));
    }

    static getSettings() {
        return JSON.parse(localStorage.getItem('company-settings')) || {
            currency: 'DZD' // Devise par défaut
        };
    }

    static setSettings(settings) {
        localStorage.setItem('company-settings', JSON.stringify(settings));
    }
}

// Gestion des clients
class Client {
    constructor(name, email, address, phone) {
        this.id = Date.now().toString();
        this.name = name;
        this.email = email;
        this.address = address;
        this.phone = phone;
    }

    static add(client) {
        const clients = Storage.getClients();
        clients.push(client);
        Storage.setClients(clients);
    }

    static getAll() {
        return Storage.getClients();
    }
}

// Gestion des produits
class Product {
    constructor(name, price, description) {
        this.id = Date.now().toString();
        this.name = name;
        this.price = price;
        this.description = description;
    }

    static add(product) {
        const products = Storage.getProducts();
        products.push(product);
        Storage.setProducts(products);
    }

    static getAll() {
        return Storage.getProducts();
    }
}

// Gestion des factures
class Invoice {
    constructor(clientId, items, date = new Date()) {
        this.id = Invoice.generateInvoiceNumber();
        this.clientId = clientId;
        this.items = items;
        this.date = date;
        this.status = 'pending';
        this.tvaRate = 0.19; // Taux de TVA à 19%
        this.totalHT = this.calculateTotalHT();
        this.tva = this.calculateTVA();
        this.totalTTC = this.calculateTotalTTC();
        this.currency = Storage.getSettings().currency;
    }

    static generateInvoiceNumber() {
        const currentYear = new Date().getFullYear();
        const invoices = Storage.getInvoices();
        
        // Filtrer les factures de l'année en cours
        const currentYearInvoices = invoices.filter(inv => {
            const invoiceYear = inv.id.split('/')[1];
            return invoiceYear === currentYear.toString();
        });

        // Trouver le dernier numéro utilisé pour l'année en cours
        let lastNumber = 0;
        if (currentYearInvoices.length > 0) {
            lastNumber = Math.max(...currentYearInvoices.map(inv => {
                const num = parseInt(inv.id.split('/')[0]);
                return isNaN(num) ? 0 : num;
            }));
        }

        // Générer le nouveau numéro
        const nextNumber = (lastNumber + 1).toString().padStart(4, '0');
        return `${nextNumber}/${currentYear}`;
    }

    calculateTotalHT() {
        return this.items.reduce((total, item) => total + (item.quantity * item.price), 0);
    }

    calculateTVA() {
        return this.calculateTotalHT() * this.tvaRate;
    }

    calculateTotalTTC() {
        return this.calculateTotalHT() + this.calculateTVA();
    }

    static formatAmount(amount, currency = Storage.getSettings().currency) {
        // S'assurer que amount est un nombre valide
        const validAmount = Number(amount) || 0;
        return `${validAmount.toFixed(2)} ${currency}`;
    }

    static add(invoice) {
        const invoices = Storage.getInvoices();
        invoices.push(invoice);
        Storage.setInvoices(invoices);
        
        // Mettre à jour l'interface uniquement si nous sommes sur la page appropriée
        const invoicesList = document.getElementById('invoices-list');
        if (invoicesList) {
            UI.updateInvoicesList();
        }
        
        // Mettre à jour les statistiques uniquement si nous sommes sur le tableau de bord
        const statsContainer = document.querySelector('.stats-container');
        if (statsContainer) {
            this.updateDashboardStats();
        }
    }

    static getAll() {
        return Storage.getInvoices();
    }

    static updateDashboardStats() {
        const invoices = this.getAll();
        const currency = Storage.getSettings().currency;
        const totalRevenue = invoices
            .filter(inv => inv.status === 'paid')
            .reduce((total, inv) => total + inv.totalTTC, 0);
        const pendingInvoices = invoices.filter(inv => inv.status === 'pending').length;
        const activeClients = new Set(invoices.map(inv => inv.clientId)).size;

        // Vérifier si les éléments existent avant de les mettre à jour
        const amountElements = document.querySelectorAll('.stats-container .amount');
        if (amountElements.length >= 3) {
            amountElements[0].textContent = this.formatAmount(totalRevenue);
            amountElements[1].textContent = pendingInvoices;
            amountElements[2].textContent = activeClients;
        }
    }

    static delete(invoiceId) {
        const invoices = this.getAll();
        const index = invoices.findIndex(inv => inv.id === invoiceId);
        if (index !== -1) {
            invoices.splice(index, 1);
            Storage.setInvoices(invoices);
            return true;
        }
        return false;
    }

    static getById(invoiceId) {
        return this.getAll().find(inv => inv.id === invoiceId);
    }

    generateHTML() {
        const client = Client.getAll().find(c => c.id === this.clientId);
        const settings = Storage.getSettings();
        
        return `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <title>Facture ${this.id}</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
                <style>
                    body { 
                        font-family: Arial, sans-serif; 
                        margin: 0; 
                        color: #333;
                        padding: 0;
                        box-sizing: border-box;
                    }
                    @page {
                        margin: 15mm; /* 1.5 cm de marge pour l'impression */
                    }
                    #printable-invoice {
                        max-width: 210mm; /* Largeur A4 */
                        margin: 0 auto;
                        background: white;
                        padding: 15mm; /* 1.5 cm de padding */
                        box-sizing: border-box;
                    }
                    .header { 
                        margin-bottom: 20px; 
                        border-bottom: 2px solid #eee; 
                        padding-bottom: 15px;
                        display: flex;
                        justify-content: space-between;
                        align-items: flex-start;
                        flex-wrap: wrap;
                        gap: 20px;
                    }
                    .company-info { 
                        flex: 1;
                        min-width: 250px;
                        padding-right: 15px;
                    }
                    .company-info h3 {
                        color: #2563eb;
                        font-size: 24px;
                        margin: 0 0 10px 0;
                        word-break: break-word;
                    }
                    .company-info p {
                        margin: 5px 0;
                        color: #666;
                        word-break: break-word;
                    }
                    .invoice-details {
                        text-align: right;
                        flex: 0 0 auto;
                        min-width: 200px;
                    }
                    .invoice-details h2 {
                        color: #2563eb;
                        margin: 0 0 15px 0;
                    }
                    .invoice-info { 
                        margin-bottom: 20px; 
                    }
                    table { 
                        width: 100%; 
                        border-collapse: collapse; 
                        margin: 20px 0;
                        table-layout: fixed;
                    }
                    th { 
                        background-color: #f8f9fa;
                        padding: 12px;
                        text-align: left;
                        border-bottom: 1px solid #ddd;
                    }
                    td { 
                        padding: 12px;
                        text-align: left; 
                        border-bottom: 1px solid #ddd;
                        word-break: break-word;
                    }
                    .total { 
                        text-align: right; 
                        margin-top: 20px; 
                        font-size: 1.2em;
                        padding: 15px 0;
                    }
                    .client-info { 
                        background: #f8f9fa;
                        padding: 15px;
                        border-radius: 8px;
                        margin-bottom: 20px;
                        word-break: break-word;
                    }
                    .status { 
                        padding: 5px 10px; 
                        border-radius: 4px; 
                        display: inline-block;
                        font-weight: 500;
                    }
                    .status.pending { 
                        background-color: #fff3cd; 
                        color: #856404; 
                    }
                    .status.paid { 
                        background-color: #d4edda; 
                        color: #155724; 
                    }
                    .footer { 
                        margin-top: 30px; 
                        text-align: center; 
                        color: #6c757d; 
                        font-size: 0.9em;
                        padding-top: 20px;
                        border-top: 1px solid #eee;
                    }
                    @media print {
                        body { 
                            margin: 0;
                            padding: 0;
                        }
                        #printable-invoice {
                            width: 100%;
                            max-width: none;
                            padding: 15mm;
                            margin: 0;
                        }
                        .header { 
                            margin-top: 0; 
                        }
                        table {
                            page-break-inside: auto;
                        }
                        tr {
                            page-break-inside: avoid;
                            page-break-after: auto;
                        }
                    }
                </style>
            </head>
            <body>
                <div id="printable-invoice">
                    <div class="header">
                        <div class="company-info">
                            <h3>${settings.name || 'Nom de l\'entreprise'}</h3>
                            ${settings.address ? `<p>${settings.address}</p>` : ''}
                            ${settings.phone ? `<p>Tél: ${settings.phone}</p>` : ''}
                            ${settings.email ? `<p>Email: ${settings.email}</p>` : ''}
                            ${settings.rc ? `<p>RC N°: ${settings.rc}</p>` : ''}
                            ${settings.nif ? `<p>NIF: ${settings.nif}</p>` : ''}
                        </div>
                        <div class="invoice-details">
                            <h2>FACTURE</h2>
                            <p><strong>N°:</strong> ${this.id}</p>
                            <p><strong>Date:</strong> ${new Date(this.date).toLocaleDateString()}</p>
                            <p><strong>Statut:</strong> <span class="status ${this.status}">${this.status === 'paid' ? 'Payée' : 'En attente'}</span></p>
                        </div>
                    </div>

                    <div class="client-info">
                        <h3>Facturé à:</h3>
                        <p><strong>${client?.name || 'Client inconnu'}</strong></p>
                        ${client?.address ? `<p>${client.address}</p>` : ''}
                        ${client?.phone ? `<p>Tél: ${client.phone}</p>` : ''}
                        ${client?.email ? `<p>Email: ${client.email}</p>` : ''}
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Quantité</th>
                                <th>Prix unitaire</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${this.items.map(item => `
                                <tr>
                                    <td>${item.name}</td>
                                    <td>${item.quantity}</td>
                                    <td>${Invoice.formatAmount(item.price, this.currency)}</td>
                                    <td>${Invoice.formatAmount(item.quantity * item.price, this.currency)}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>

                    <div class="totals-section">
                        <div class="total-row">
                            <div class="total-label">Total HT:</div>
                            <div class="total-amount">${Invoice.formatAmount(this.totalHT, this.currency)}</div>
                        </div>
                        <div class="total-row">
                            <div class="total-label">TVA (${(this.tvaRate * 100).toFixed(0)}%):</div>
                            <div class="total-amount">${Invoice.formatAmount(this.tva, this.currency)}</div>
                        </div>
                        <div class="total-row total-ttc">
                            <div class="total-label">Total TTC:</div>
                            <div class="total-amount">${Invoice.formatAmount(this.totalTTC, this.currency)}</div>
                        </div>
                    </div>

                    <div class="footer">
                        <p>Merci de votre confiance !</p>
                        <p>Pour toute question concernant cette facture, veuillez nous contacter.</p>
                    </div>
                </div>
            </body>
            </html>
        `;
    }
}

// Gestion de l'interface utilisateur
class UI {
    static init() {
        Router.init(); // Initialisation du routeur
        this.initModals();
        this.initInvoiceForm();
        
        // Mettre à jour uniquement si nous sommes sur la bonne page
        const invoicesList = document.getElementById('invoices-list');
        if (invoicesList) {
            this.updateInvoicesList();
        }
        
        // Mettre à jour les statistiques uniquement si nous sommes sur le tableau de bord
        const statsContainer = document.querySelector('.stats-container');
        if (statsContainer) {
            Invoice.updateDashboardStats();
        }
        
        // Réinitialiser les gestionnaires d'événements globaux
        this.initGlobalEventListeners();
    }

    static initModals() {
        // Supprimer les anciens event listeners en clonant et remplaçant les boutons
        const newInvoiceBtn = document.querySelector('.new-invoice-btn');
        if (newInvoiceBtn) {
            const newBtn = newInvoiceBtn.cloneNode(true);
            newInvoiceBtn.parentNode.replaceChild(newBtn, newInvoiceBtn);
            
            const invoiceModal = document.getElementById('invoice-modal');
            if (invoiceModal) {
                newBtn.addEventListener('click', () => {
                    invoiceModal.classList.add('active');
                    this.populateClientSelect();
                    this.populateProductSelect();
                    this.initInvoiceForm(); // Réinitialiser le formulaire
                });

                const closeBtn = invoiceModal.querySelector('.close-modal');
                if (closeBtn) {
                    closeBtn.addEventListener('click', () => {
                        invoiceModal.classList.remove('active');
                    });
                }
            }
        }

        // Modal Client
        const newClientBtn = document.querySelector('.new-client-btn');
        if (newClientBtn) {
            const newBtn = newClientBtn.cloneNode(true);
            newClientBtn.parentNode.replaceChild(newBtn, newClientBtn);
            
            const clientModal = document.getElementById('client-modal');
            if (clientModal) {
                newBtn.addEventListener('click', () => {
                    clientModal.classList.add('active');
                    if (clientModal.querySelector('form')) {
                        clientModal.querySelector('form').reset();
                    }
                });

                const closeBtn = clientModal.querySelector('.close-modal');
                if (closeBtn) {
                    closeBtn.addEventListener('click', () => {
                        clientModal.classList.remove('active');
                    });
                }
            }
        }

        // Modal Produit
        const newProductBtn = document.querySelector('.new-product-btn');
        if (newProductBtn) {
            const newBtn = newProductBtn.cloneNode(true);
            newProductBtn.parentNode.replaceChild(newBtn, newProductBtn);
            
            const productModal = document.getElementById('product-modal');
            if (productModal) {
                newBtn.addEventListener('click', () => {
                    productModal.classList.add('active');
                    if (productModal.querySelector('form')) {
                        productModal.querySelector('form').reset();
                    }
                });

                const closeBtn = productModal.querySelector('.close-modal');
                if (closeBtn) {
                    closeBtn.addEventListener('click', () => {
                        productModal.classList.remove('active');
                    });
                }
            }
        }

        // Fermeture des modals en cliquant en dehors
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('active');
                }
            });
        });
    }

    static initInvoiceForm() {
        const form = document.getElementById('invoice-form');
        if (!form) return;

        // Réinitialiser les gestionnaires d'événements existants
        const newForm = form.cloneNode(true);
        form.parentNode.replaceChild(newForm, form);

        // Gestionnaire pour l'ajout d'articles
        const addItemBtn = document.getElementById('add-item');
        if (addItemBtn) {
            addItemBtn.addEventListener('click', () => {
                const itemsList = document.getElementById('items-list');
                const itemRow = document.createElement('div');
                itemRow.classList.add('item-row');
                itemRow.innerHTML = `
                    <select class="product-select" required>
                        <option value="">Sélectionner un produit</option>
                        ${Product.getAll().map(product => 
                            `<option value="${product.id}" data-price="${product.price}">${product.name}</option>`
                        ).join('')}
                    </select>
                    <input type="number" class="quantity" min="1" value="1" required>
                    <button type="button" class="remove-item">&times;</button>
                `;
                itemsList.appendChild(itemRow);

                // Mise à jour du total lors des changements
                const quantityInput = itemRow.querySelector('.quantity');
                const productSelect = itemRow.querySelector('.product-select');
                
                quantityInput.addEventListener('input', () => this.updateTotal());
                productSelect.addEventListener('change', () => this.updateTotal());
                
                // Mettre à jour le total immédiatement
                this.updateTotal();
            });
        }

        // Gestionnaire pour la suppression d'articles
        const itemsList = document.getElementById('items-list');
        if (itemsList) {
            itemsList.addEventListener('click', (e) => {
                if (e.target.classList.contains('remove-item')) {
                    e.target.closest('.item-row').remove();
                    this.updateTotal();
                }
            });

            // Ajouter des écouteurs d'événements pour les éléments existants
            itemsList.querySelectorAll('.item-row').forEach(row => {
                const quantityInput = row.querySelector('.quantity');
                const productSelect = row.querySelector('.product-select');
                
                if (quantityInput && productSelect) {
                    quantityInput.addEventListener('input', () => this.updateTotal());
                    productSelect.addEventListener('change', () => this.updateTotal());
                }
            });
        }

        // Gestionnaire pour la soumission du formulaire
        newForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleInvoiceSubmit(newForm);
        });

        // Initialiser le total
        this.updateTotal();
    }

    static populateClientSelect() {
        const select = document.getElementById('client-select');
        select.innerHTML = '<option value="">Sélectionner un client</option>';
        Client.getAll().forEach(client => {
            select.innerHTML += `<option value="${client.id}">${client.name}</option>`;
        });
    }

    static populateProductSelect() {
        const productSelects = document.querySelectorAll('.product-select');
        if (!productSelects.length) return;

        const products = Product.getAll();
        const options = `
            <option value="">Sélectionner un produit</option>
            ${products.map(product => 
                `<option value="${product.id}" data-price="${product.price}">${product.name}</option>`
            ).join('')}
        `;

        productSelects.forEach(select => {
            select.innerHTML = options;
        });
    }

    static updateTotal() {
        const totalElement = document.getElementById('invoice-total');
        if (!totalElement) return;

        let total = 0;
        const itemRows = document.querySelectorAll('.item-row');
        
        itemRows.forEach(row => {
            const select = row.querySelector('.product-select');
            const quantity = parseInt(row.querySelector('.quantity')?.value) || 0;
            const selectedOption = select?.options[select.selectedIndex];
            const price = selectedOption ? parseFloat(selectedOption.dataset.price) || 0 : 0;
            total += quantity * price;
        });

        totalElement.textContent = Invoice.formatAmount(total);
    }

    static updateInvoicesList() {
        const tbody = document.getElementById('invoices-list');
        if (!tbody) return;
        
        const invoices = Invoice.getAll();
        tbody.innerHTML = '';
        
        invoices.forEach(invoice => {
            const client = Client.getAll().find(c => c.id === invoice.clientId);
            const row = document.createElement('tr');
            
            row.innerHTML = `
                <td>${invoice.id}</td>
                <td>${client ? client.name : 'Client inconnu'}</td>
                <td>${new Date(invoice.date).toLocaleDateString()}</td>
                <td>${Invoice.formatAmount(invoice.totalTTC, invoice.currency)}</td>
                <td>
                    <span class="status-badge ${invoice.status} clickable" data-invoice-id="${invoice.id}">
                        ${invoice.status === 'paid' ? 'Payée' : 'En attente'}
                    </span>
                </td>
                <td>
                    <button class="action-btn view-btn" data-id="${invoice.id}" title="Voir la facture">
                        <i class="fas fa-file-alt"></i>
                    </button>
                    <button class="action-btn download-btn" data-id="${invoice.id}" title="Télécharger la facture">
                        <i class="fas fa-cloud-download-alt"></i>
                    </button>
                    <button class="action-btn delete-btn" data-id="${invoice.id}" title="Supprimer la facture">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </td>
            `;

            tbody.appendChild(row);
        });

        // Ajout des gestionnaires d'événements pour les actions
        this.initInvoiceActions();
        this.initStatusClickHandler();
    }

    static initInvoiceActions() {
        // Marquer comme payée
        document.querySelectorAll('.mark-paid-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const invoiceId = btn.dataset.id;
                const invoices = Invoice.getAll();
                const index = invoices.findIndex(inv => inv.id === invoiceId);
                
                if (index !== -1) {
                    invoices[index].status = 'paid';
                    Storage.setInvoices(invoices);
                    this.updateInvoicesList();
                    Invoice.updateDashboardStats();
                }
            });
        });

        // Supprimer
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const invoiceId = btn.dataset.id;
                if (confirm('Êtes-vous sûr de vouloir supprimer cette facture ?')) {
                    if (Invoice.delete(invoiceId)) {
                        this.updateInvoicesList();
                        Invoice.updateDashboardStats();
                    }
                }
            });
        });

        // Voir
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const invoiceId = btn.dataset.id;
                const invoice = Invoice.getById(invoiceId);
                if (invoice) {
                    const html = invoice.generateHTML();
                    const win = window.open('', '_blank');
                    win.document.write(html);
                    win.document.close();
                    win.document.addEventListener('DOMContentLoaded', () => {
                        win.print();
                    });
                }
            });
        });

        // Télécharger
        document.querySelectorAll('.download-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const invoiceId = btn.dataset.id;
                const invoice = Invoice.getById(invoiceId);
                if (invoice) {
                    const html = invoice.generateHTML();
                    // Créer un élément temporaire pour le PDF
                    const element = document.createElement('div');
                    element.innerHTML = html;
                    document.body.appendChild(element);
                    
                    // Utiliser html2pdf pour la conversion
                    const opt = {
                        margin: [10, 10, 10, 10], // Marges réduites [haut, droite, bas, gauche] en mm
                        filename: `facture-${invoice.id}.pdf`,
                        image: { type: 'jpeg', quality: 0.98 },
                        html2canvas: { 
                            scale: 2,
                            letterRendering: true
                        },
                        jsPDF: { 
                            unit: 'mm', 
                            format: 'a4', 
                            orientation: 'portrait',
                            compress: true
                        }
                    };
                    
                    // Charger dynamiquement html2pdf si nécessaire
                    if (typeof html2pdf === 'undefined') {
                        const script = document.createElement('script');
                        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
                        script.onload = () => {
                            html2pdf().set(opt).from(element).save().then(() => {
                                document.body.removeChild(element);
                            });
                        };
                        document.head.appendChild(script);
                    } else {
                        html2pdf().set(opt).from(element).save().then(() => {
                            document.body.removeChild(element);
                        });
                    }
                }
            });
        });
    }

    static initStatusClickHandler() {
        document.querySelectorAll('.status-badge.clickable').forEach(badge => {
            badge.addEventListener('click', () => {
                const invoiceId = badge.dataset.invoiceId;
                const invoices = Invoice.getAll();
                const index = invoices.findIndex(inv => inv.id === invoiceId);
                
                if (index !== -1) {
                    // Basculer le statut
                    invoices[index].status = invoices[index].status === 'paid' ? 'pending' : 'paid';
                    Storage.setInvoices(invoices);
                    this.updateInvoicesList();
                    Invoice.updateDashboardStats();
                }
            });
        });
    }

    static updateClientsList() {
        const tbody = document.getElementById('clients-list');
        if (!tbody) return;
        
        const clients = Client.getAll();
        tbody.innerHTML = '';
        
        clients.forEach(client => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${client.name}</td>
                <td>${client.email}</td>
                <td>${client.phone}</td>
                <td>${client.address}</td>
                <td>
                    <button class="action-btn edit-btn" data-id="${client.id}" title="Modifier le client">
                        <i class="fas fa-pen"></i>
                    </button>
                    <button class="action-btn delete-btn" data-id="${client.id}" title="Supprimer le client">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </td>
            `;
            tbody.appendChild(row);
        });

        // Initialisation des boutons d'action
        this.initClientActions();
    }

    static updateProductsList() {
        const tbody = document.getElementById('products-list');
        if (!tbody) return;
        
        const products = Product.getAll();
        const currency = Storage.getSettings().currency;
        tbody.innerHTML = '';
        
        products.forEach(product => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${product.name}</td>
                <td>${Invoice.formatAmount(product.price)}</td>
                <td>${product.description}</td>
                <td>
                    <button class="action-btn edit-btn" data-id="${product.id}" title="Modifier le produit">
                        <i class="fas fa-pen"></i>
                    </button>
                    <button class="action-btn delete-btn" data-id="${product.id}" title="Supprimer le produit">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </td>
            `;
            tbody.appendChild(row);
        });

        // Initialisation des boutons d'action
        this.initProductActions();
    }

    static initClientActions() {
        // Nouveau client
        const newClientBtn = document.querySelector('.new-client-btn');
        const clientModal = document.getElementById('client-modal');
        const clientForm = document.getElementById('client-form');

        if (newClientBtn && clientModal) {
            newClientBtn.addEventListener('click', () => {
                clientModal.classList.add('active');
                // Réinitialiser le formulaire et supprimer l'ID d'édition
                clientForm.reset();
                delete clientForm.dataset.editId;
                // Mettre à jour le titre du modal et le bouton
                clientModal.querySelector('.modal-header h2').textContent = 'Nouveau Client';
                clientModal.querySelector('.save-btn').textContent = 'Enregistrer';
            });

            // Fermeture du modal
            clientModal.querySelector('.close-modal').addEventListener('click', () => {
                clientModal.classList.remove('active');
            });
        }

        // Gestion des boutons d'action (modifier et supprimer)
        document.querySelectorAll('#clients-list .action-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const clientId = btn.dataset.id;
                const clients = Client.getAll();
                const client = clients.find(c => c.id === clientId);
                
                if (!client) return;

                if (btn.classList.contains('edit-btn')) {
                    // Ouvrir le modal avec les données du client
                    const modal = document.getElementById('client-modal');
                    if (modal) {
                        document.getElementById('client-name').value = client.name;
                        document.getElementById('client-email').value = client.email;
                        document.getElementById('client-address').value = client.address;
                        document.getElementById('client-phone').value = client.phone;
                        
                        // Ajouter l'ID du client en cours d'édition
                        clientForm.dataset.editId = clientId;
                        
                        // Mettre à jour le titre du modal et le bouton
                        modal.querySelector('.modal-header h2').textContent = 'Modifier Client';
                        modal.querySelector('.save-btn').textContent = 'Mettre à jour';
                        
                        modal.classList.add('active');
                    }
                } else if (btn.classList.contains('delete-btn')) {
                    if (confirm('Êtes-vous sûr de vouloir supprimer ce client ?')) {
                        const index = clients.findIndex(c => c.id === clientId);
                        if (index !== -1) {
                            clients.splice(index, 1);
                            Storage.setClients(clients);
                            UI.updateClientsList();
                        }
                    }
                }
            });
        });

        // Soumission du formulaire (création ou modification)
        if (clientForm) {
            // Supprimer les anciens event listeners
            const newClientForm = clientForm.cloneNode(true);
            clientForm.parentNode.replaceChild(newClientForm, clientForm);
            
            newClientForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const editId = newClientForm.dataset.editId;
                const clientData = {
                    name: document.getElementById('client-name').value,
                    email: document.getElementById('client-email').value,
                    address: document.getElementById('client-address').value,
                    phone: document.getElementById('client-phone').value
                };

                const clients = Client.getAll();
                if (editId) {
                    // Mode édition
                    const index = clients.findIndex(c => c.id === editId);
                    if (index !== -1) {
                        // Conserver l'ID existant et mettre à jour les autres données
                        clients[index] = {
                            id: editId,
                            ...clientData
                        };
                        Storage.setClients(clients);
                    }
                } else {
                    // Mode création
                    const client = new Client(
                        clientData.name,
                        clientData.email,
                        clientData.address,
                        clientData.phone
                    );
                    Client.add(client);
                }

                this.updateClientsList();
                document.getElementById('client-modal').classList.remove('active');
                newClientForm.reset();
                delete newClientForm.dataset.editId;
            });
        }
    }

    static initProductActions() {
        // Nouveau produit
        const newProductBtn = document.querySelector('.new-product-btn');
        const productModal = document.getElementById('product-modal');
        const productForm = document.getElementById('product-form');

        if (newProductBtn && productModal) {
            newProductBtn.addEventListener('click', () => {
                productModal.classList.add('active');
                // Réinitialiser le formulaire et supprimer l'ID d'édition
                productForm.reset();
                delete productForm.dataset.editId;
                // Mettre à jour le titre du modal et le bouton
                productModal.querySelector('.modal-header h2').textContent = 'Nouveau Produit';
                productModal.querySelector('.save-btn').textContent = 'Enregistrer';
            });

            // Fermeture du modal
            productModal.querySelector('.close-modal').addEventListener('click', () => {
                productModal.classList.remove('active');
            });
        }

        // Gestion des boutons d'action (modifier et supprimer)
        document.querySelectorAll('#products-list .action-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productId = btn.dataset.id;
                const products = Product.getAll();
                const product = products.find(p => p.id === productId);
                
                if (!product) return;

                if (btn.classList.contains('edit-btn')) {
                    // Ouvrir le modal avec les données du produit
                    const modal = document.getElementById('product-modal');
                    if (modal) {
                        document.getElementById('product-name').value = product.name;
                        document.getElementById('product-price').value = product.price;
                        document.getElementById('product-description').value = product.description;
                        
                        // Ajouter l'ID du produit en cours d'édition
                        productForm.dataset.editId = productId;
                        
                        // Mettre à jour le titre du modal et le bouton
                        modal.querySelector('.modal-header h2').textContent = 'Modifier Produit';
                        modal.querySelector('.save-btn').textContent = 'Mettre à jour';
                        
                        modal.classList.add('active');
                    }
                } else if (btn.classList.contains('delete-btn')) {
                    if (confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
                        const index = products.findIndex(p => p.id === productId);
                        if (index !== -1) {
                            products.splice(index, 1);
                            Storage.setProducts(products);
                            UI.updateProductsList();
                        }
                    }
                }
            });
        });

        // Soumission du formulaire (création ou modification)
        if (productForm) {
            // Supprimer les anciens event listeners
            const newProductForm = productForm.cloneNode(true);
            productForm.parentNode.replaceChild(newProductForm, productForm);
            
            newProductForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const editId = newProductForm.dataset.editId;
                const productData = {
                    name: document.getElementById('product-name').value,
                    price: parseFloat(document.getElementById('product-price').value),
                    description: document.getElementById('product-description').value
                };

                const products = Product.getAll();
                if (editId) {
                    // Mode édition
                    const index = products.findIndex(p => p.id === editId);
                    if (index !== -1) {
                        // Conserver l'ID existant et mettre à jour les autres données
                        products[index] = {
                            id: editId,
                            ...productData
                        };
                        Storage.setProducts(products);
                    }
                } else {
                    // Mode création
                    const product = new Product(
                        productData.name,
                        productData.price,
                        productData.description
                    );
                    Product.add(product);
                }

                this.updateProductsList();
                document.getElementById('product-modal').classList.remove('active');
                newProductForm.reset();
                delete newProductForm.dataset.editId;
            });
        }
    }

    static initSettingsForm() {
        const form = document.getElementById('settings-form');
        if (!form) return;

        // Charger les paramètres existants
        const settings = Storage.getSettings();
        Object.keys(settings).forEach(key => {
            const input = document.getElementById(`company-${key}`);
            if (input) input.value = settings[key];
        });

        // Sauvegarder les paramètres
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const settings = {
                ...Storage.getSettings(),
                name: document.getElementById('company-name').value,
                address: document.getElementById('company-address').value,
                phone: document.getElementById('company-phone').value,
                email: document.getElementById('company-email').value,
                currency: document.getElementById('company-currency').value,
                rc: document.getElementById('company-rc').value,
                nif: document.getElementById('company-nif').value
            };
            Storage.setSettings(settings);
            alert('Paramètres sauvegardés avec succès !');
            // Mettre à jour l'affichage des montants
            Invoice.updateDashboardStats();
            this.updateInvoicesList();
            this.updateProductsList();
        });
    }

    static initGlobalEventListeners() {
        // Gestionnaire pour les boutons d'action globaux
        document.addEventListener('click', (e) => {
            const actionBtn = e.target.closest('.action-btn');
            if (!actionBtn) return;

            const invoiceId = actionBtn.dataset.id;
            if (!invoiceId) return;

            // Récupérer toutes les factures
            const invoices = Invoice.getAll();
            // Trouver la facture spécifique
            const invoiceData = invoices.find(inv => inv.id === invoiceId);
            if (!invoiceData) return;

            // Créer une nouvelle instance de Invoice avec les données
            const invoice = new Invoice(invoiceData.clientId, invoiceData.items, new Date(invoiceData.date));
            invoice.id = invoiceData.id;
            invoice.status = invoiceData.status;
            invoice.totalTTC = invoiceData.totalTTC;
            invoice.currency = invoiceData.currency;
            
            if (actionBtn.classList.contains('view-btn')) {
                const html = invoice.generateHTML();
                const win = window.open('', '_blank');
                win.document.write(html);
                win.document.close();
                win.document.addEventListener('DOMContentLoaded', () => {
                    win.print();
                });
            } else if (actionBtn.classList.contains('download-btn')) {
                const html = invoice.generateHTML();
                const element = document.createElement('div');
                element.innerHTML = html;
                document.body.appendChild(element);
                
                const opt = {
                    margin: [10, 10, 10, 10], // Marges réduites [haut, droite, bas, gauche] en mm
                    filename: `facture-${invoice.id}.pdf`,
                    image: { type: 'jpeg', quality: 0.98 },
                    html2canvas: { 
                        scale: 2,
                        letterRendering: true
                    },
                    jsPDF: { 
                        unit: 'mm', 
                        format: 'a4', 
                        orientation: 'portrait',
                        compress: true
                    }
                };
                
                if (typeof html2pdf === 'undefined') {
                    const script = document.createElement('script');
                    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
                    script.onload = () => {
                        html2pdf().set(opt).from(element).save().then(() => {
                            document.body.removeChild(element);
                        });
                    };
                    document.head.appendChild(script);
                } else {
                    html2pdf().set(opt).from(element).save().then(() => {
                        document.body.removeChild(element);
                    });
                }
            } else if (actionBtn.classList.contains('mark-paid-btn')) {
                const invoices = Invoice.getAll();
                const index = invoices.findIndex(inv => inv.id === invoiceId);
                if (index !== -1) {
                    invoices[index].status = 'paid';
                    Storage.setInvoices(invoices);
                    UI.updateInvoicesList();
                    Invoice.updateDashboardStats();
                }
            } else if (actionBtn.classList.contains('delete-btn')) {
                if (confirm('Êtes-vous sûr de vouloir supprimer cet élément ?')) {
                    if (Invoice.delete(invoiceId)) {
                        UI.updateInvoicesList();
                        Invoice.updateDashboardStats();
                    }
                }
            }
        });

        // Gestionnaire pour la fermeture des modals
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal') || e.target.classList.contains('close-modal')) {
                const modal = e.target.closest('.modal') || e.target.closest('.modal-content').parentElement;
                if (modal) {
                    modal.classList.remove('active');
                }
            }
        });

        // Gestionnaire de recherche
        document.addEventListener('input', (e) => {
            if (e.target.closest('.search-bar input')) {
                const searchTerm = e.target.value.toLowerCase().trim();
                const currentRoute = window.location.hash.substring(1) || 'dashboard';
                UI.handleSearch(searchTerm, currentRoute);
            }
        });
    }

    static handleSearch(searchTerm, currentRoute) {
        switch (currentRoute) {
            case 'dashboard':
            case 'invoices':
                // Recherche dans les factures
                const invoices = Invoice.getAll();
                const filteredInvoices = invoices.filter(invoice => {
                    const client = Client.getAll().find(c => c.id === invoice.clientId);
                    return (
                        invoice.id.toLowerCase().includes(searchTerm) ||
                        (client && client.name.toLowerCase().includes(searchTerm)) ||
                        Invoice.formatAmount(invoice.totalTTC).toLowerCase().includes(searchTerm)
                    );
                });
                
                const tbody = document.getElementById('invoices-list');
                if (tbody) {
                    tbody.innerHTML = '';
                    filteredInvoices.forEach(invoice => {
                        const client = Client.getAll().find(c => c.id === invoice.clientId);
                        const row = document.createElement('tr');
                        row.innerHTML = `
                            <td>${invoice.id}</td>
                            <td>${client ? client.name : 'Client inconnu'}</td>
                            <td>${new Date(invoice.date).toLocaleDateString()}</td>
                            <td>${Invoice.formatAmount(invoice.totalTTC, invoice.currency)}</td>
                            <td>
                                <span class="status-badge ${invoice.status} clickable" data-invoice-id="${invoice.id}">
                                    ${invoice.status === 'paid' ? 'Payée' : 'En attente'}
                                </span>
                            </td>
                            <td>
                                <button class="action-btn view-btn" data-id="${invoice.id}" title="Voir la facture">
                                    <i class="fas fa-file-alt"></i>
                                </button>
                                <button class="action-btn download-btn" data-id="${invoice.id}" title="Télécharger la facture">
                                    <i class="fas fa-cloud-download-alt"></i>
                                </button>
                                <button class="action-btn delete-btn" data-id="${invoice.id}" title="Supprimer la facture">
                                    <i class="fas fa-trash-alt"></i>
                                </button>
                            </td>
                        `;
                        tbody.appendChild(row);
                    });
                    this.initInvoiceActions();
                    this.initStatusClickHandler();
                }
                break;

            case 'clients':
                // Recherche dans les clients
                const clients = Client.getAll();
                const filteredClients = clients.filter(client => 
                    client.name.toLowerCase().includes(searchTerm) ||
                    client.email.toLowerCase().includes(searchTerm) ||
                    client.phone.toLowerCase().includes(searchTerm) ||
                    client.address.toLowerCase().includes(searchTerm)
                );
                
                const clientsTbody = document.getElementById('clients-list');
                if (clientsTbody) {
                    clientsTbody.innerHTML = '';
                    filteredClients.forEach(client => {
                        const row = document.createElement('tr');
                        row.innerHTML = `
                            <td>${client.name}</td>
                            <td>${client.email}</td>
                            <td>${client.phone}</td>
                            <td>${client.address}</td>
                            <td>
                                <button class="action-btn edit-btn" data-id="${client.id}" title="Modifier le client">
                                    <i class="fas fa-pen"></i>
                                </button>
                                <button class="action-btn delete-btn" data-id="${client.id}" title="Supprimer le client">
                                    <i class="fas fa-trash-alt"></i>
                                </button>
                            </td>
                        `;
                        clientsTbody.appendChild(row);
                    });
                    this.initClientActions();
                }
                break;

            case 'products':
                // Recherche dans les produits
                const products = Product.getAll();
                const filteredProducts = products.filter(product =>
                    product.name.toLowerCase().includes(searchTerm) ||
                    product.description.toLowerCase().includes(searchTerm) ||
                    Invoice.formatAmount(product.price).toLowerCase().includes(searchTerm)
                );
                
                const productsTbody = document.getElementById('products-list');
                if (productsTbody) {
                    productsTbody.innerHTML = '';
                    filteredProducts.forEach(product => {
                        const row = document.createElement('tr');
                        row.innerHTML = `
                            <td>${product.name}</td>
                            <td>${Invoice.formatAmount(product.price)}</td>
                            <td>${product.description}</td>
                            <td>
                                <button class="action-btn edit-btn" data-id="${product.id}" title="Modifier le produit">
                                    <i class="fas fa-pen"></i>
                                </button>
                                <button class="action-btn delete-btn" data-id="${product.id}" title="Supprimer le produit">
                                    <i class="fas fa-trash-alt"></i>
                                </button>
                            </td>
                        `;
                        productsTbody.appendChild(row);
                    });
                    this.initProductActions();
                }
                break;
        }
    }

    static handleInvoiceSubmit(form) {
        const clientId = form.querySelector('#client-select').value;
        const items = [];

        form.querySelectorAll('.item-row').forEach(row => {
            const productSelect = row.querySelector('.product-select');
            const product = Product.getAll().find(p => p.id === productSelect.value);
            const quantity = parseInt(row.querySelector('.quantity').value);

            if (product && quantity) {
                items.push({
                    productId: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: quantity
                });
            }
        });

        if (clientId && items.length > 0) {
            try {
                const invoice = new Invoice(clientId, items);
                Invoice.add(invoice);
                document.getElementById('invoice-modal').classList.remove('active');
                form.reset();
                document.getElementById('items-list').innerHTML = `
                    <div class="item-row">
                        <select class="product-select" required>
                            <option value="">Sélectionner un produit</option>
                            ${Product.getAll().map(product => 
                                `<option value="${product.id}" data-price="${product.price}">${product.name}</option>`
                            ).join('')}
                        </select>
                        <input type="number" class="quantity" min="1" value="1" required>
                        <button type="button" class="remove-item">&times;</button>
                    </div>
                `;
                this.updateTotal();
                
                // Afficher un message de succès
                alert('Facture créée avec succès !');
                
                // Rediriger vers la liste des factures si nous ne sommes pas déjà dessus
                if (!document.querySelector('.invoices-list')) {
                    Router.navigateTo('invoices');
                }
            } catch (error) {
                console.error('Erreur lors de la création de la facture:', error);
                alert('Une erreur est survenue lors de la création de la facture.');
            }
        } else {
            alert('Veuillez sélectionner un client et ajouter au moins un article.');
        }
    }
}

// Gestion du routage
class Router {
    static init() {
        this.handleRoute();
        // Gestion des liens de navigation
        document.querySelectorAll('.menu a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const route = link.getAttribute('href').substring(1); // Enlève le #
                this.navigateTo(route);
            });
        });

        // Gestion du bouton retour du navigateur
        window.addEventListener('popstate', () => {
            this.handleRoute();
        });
    }

    static navigateTo(route) {
        window.history.pushState({}, '', `#${route}`);
        this.handleRoute();
    }

    static handleRoute() {
        const hash = window.location.hash || '#dashboard';
        const route = hash.substring(1); // Enlève le #

        // Mise à jour du menu actif
        document.querySelectorAll('.menu li').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelector(`.menu a[href="#${route}"]`).parentElement.classList.add('active');

        // Affichage de la vue correspondante
        this.showView(route);
    }

    static showView(route) {
        const mainContent = document.querySelector('.main-content');
        switch (route) {
            case 'dashboard':
                mainContent.innerHTML = this.getDashboardView();
                Invoice.updateDashboardStats();
                UI.updateInvoicesList();
                UI.initModals(); // Réinitialiser les modals
                break;
            case 'invoices':
                mainContent.innerHTML = this.getInvoicesView();
                UI.updateInvoicesList();
                UI.initModals(); // Réinitialiser les modals
                break;
            case 'clients':
                mainContent.innerHTML = this.getClientsView();
                UI.updateClientsList();
                UI.initModals(); // Réinitialiser les modals
                break;
            case 'products':
                mainContent.innerHTML = this.getProductsView();
                UI.updateProductsList();
                UI.initModals(); // Réinitialiser les modals
                break;
            case 'settings':
                mainContent.innerHTML = this.getSettingsView();
                UI.initSettingsForm();
                break;
        }
    }

    static getDashboardView() {
        return `
            <header class="top-bar">
                <div class="search-bar">
                    <i class="fas fa-search"></i>
                    <input type="text" placeholder="Rechercher...">
                </div>
                <div class="user-menu">
                    <button class="new-invoice-btn"><i class="fas fa-plus"></i> Nouvelle Facture</button>
                    <div class="profile">
                        <img src="https://via.placeholder.com/40" alt="Profile" class="profile-img">
                        <span>John Doe</span>
                    </div>
                </div>
            </header>

            <div class="dashboard">
                <div class="stats-container">
                    <div class="stat-card">
                        <div class="stat-icon"><i class="fas fa-euro-sign"></i></div>
                        <div class="stat-info">
                            <h3>Chiffre d'affaires</h3>
                            <p class="amount">0 €</p>
                        </div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon"><i class="fas fa-file-invoice"></i></div>
                        <div class="stat-info">
                            <h3>Factures en attente</h3>
                            <p class="amount">0</p>
                        </div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon"><i class="fas fa-users"></i></div>
                        <div class="stat-info">
                            <h3>Clients actifs</h3>
                            <p class="amount">0</p>
                        </div>
                    </div>
                </div>

                <div class="recent-invoices">
                    <h2>Factures récentes</h2>
                    <div class="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>N° Facture</th>
                                    <th>Client</th>
                                    <th>Date</th>
                                    <th>Montant</th>
                                    <th>Statut</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody id="invoices-list">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>`;
    }

    static getInvoicesView() {
        return `
            <header class="top-bar">
                <h1>Factures</h1>
                <div class="user-menu">
                    <button class="new-invoice-btn"><i class="fas fa-plus"></i> Nouvelle Facture</button>
                </div>
            </header>
            <div class="invoices-list">
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>N° Facture</th>
                                <th>Client</th>
                                <th>Date</th>
                                <th>Montant</th>
                                <th>Statut</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody id="invoices-list">
                        </tbody>
                    </table>
                </div>
            </div>`;
    }

    static getClientsView() {
        return `
            <header class="top-bar">
                <h1>Clients</h1>
                <div class="user-menu">
                    <div class="search-bar">
                        <i class="fas fa-search"></i>
                        <input type="text" placeholder="Rechercher un client...">
                    </div>
                    <button class="new-client-btn"><i class="fas fa-plus"></i> Nouveau Client</button>
                </div>
            </header>
            <div class="clients-list">
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Email</th>
                                <th>Téléphone</th>
                                <th>Adresse</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody id="clients-list">
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Modal pour nouveau client -->
            <div class="modal" id="client-modal">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2>Nouveau Client</h2>
                        <button class="close-modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <form id="client-form">
                            <div class="form-group">
                                <label>Nom</label>
                                <input type="text" id="client-name" required>
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input type="email" id="client-email" required>
                            </div>
                            <div class="form-group">
                                <label>Téléphone</label>
                                <input type="tel" id="client-phone" required>
                            </div>
                            <div class="form-group">
                                <label>Adresse</label>
                                <textarea id="client-address" required></textarea>
                            </div>
                            <button type="submit" class="save-btn">Enregistrer</button>
                        </form>
                    </div>
                </div>
            </div>`;
    }

    static getProductsView() {
        return `
            <header class="top-bar">
                <h1>Produits</h1>
                <div class="user-menu">
                    <div class="search-bar">
                        <i class="fas fa-search"></i>
                        <input type="text" placeholder="Rechercher un produit...">
                    </div>
                    <button class="new-product-btn"><i class="fas fa-plus"></i> Nouveau Produit</button>
                </div>
            </header>
            <div class="products-list">
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Prix</th>
                                <th>Description</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody id="products-list">
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Modal pour nouveau produit -->
            <div class="modal" id="product-modal">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2>Nouveau Produit</h2>
                        <button class="close-modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <form id="product-form">
                            <div class="form-group">
                                <label>Nom</label>
                                <input type="text" id="product-name" required>
                            </div>
                            <div class="form-group">
                                <label>Prix</label>
                                <input type="number" id="product-price" step="0.01" required>
                            </div>
                            <div class="form-group">
                                <label>Description</label>
                                <textarea id="product-description" required></textarea>
                            </div>
                            <button type="submit" class="save-btn">Enregistrer</button>
                        </form>
                    </div>
                </div>
            </div>`;
    }

    static getSettingsView() {
        return `
            <header class="top-bar">
                <h1>Paramètres de l'entreprise</h1>
            </header>
            <div class="settings-container">
                <form id="settings-form" class="settings-form">
                    <div class="settings-section">
                        <h2><i class="fas fa-building"></i> Informations principales</h2>
                        <div class="form-group">
                            <label for="company-name">Nom de l'entreprise *</label>
                            <input type="text" id="company-name" required placeholder="Entrez le nom de votre entreprise">
                            <small class="form-help">Ce nom apparaîtra sur vos factures</small>
                        </div>
                        <div class="form-group">
                            <label for="company-phone">Téléphone *</label>
                            <input type="tel" id="company-phone" required placeholder="Ex: 0123456789">
                            <small class="form-help">Numéro de contact principal</small>
                        </div>
                    </div>

                    <div class="settings-section">
                        <h2><i class="fas fa-info-circle"></i> Informations complémentaires</h2>
                        <div class="form-group">
                            <label for="company-rc">RC N°</label>
                            <input type="text" id="company-rc" placeholder="Numéro du Registre du Commerce">
                            <small class="form-help">Numéro du Registre du Commerce</small>
                        </div>
                        <div class="form-group">
                            <label for="company-nif">NIF</label>
                            <input type="text" id="company-nif" placeholder="Numéro d'Identification Fiscale">
                            <small class="form-help">Numéro d'Identification Fiscale</small>
                        </div>
                        <div class="form-group">
                            <label for="company-email">Email</label>
                            <input type="email" id="company-email" placeholder="contact@entreprise.com">
                            <small class="form-help">Email de contact (optionnel)</small>
                        </div>
                        <div class="form-group">
                            <label for="company-address">Adresse</label>
                            <textarea id="company-address" placeholder="Adresse complète de l'entreprise" rows="3"></textarea>
                            <small class="form-help">Adresse qui apparaîtra sur vos factures (optionnel)</small>
                        </div>
                    </div>

                    <div class="settings-section">
                        <h2><i class="fas fa-money-bill"></i> Paramètres de facturation</h2>
                        <div class="form-group">
                            <label for="company-currency">Devise *</label>
                            <select id="company-currency" required>
                                <option value="DZD">Dinar Algérien (DZD)</option>
                                <option value="EUR">Euro (EUR)</option>
                                <option value="USD">Dollar US (USD)</option>
                                <option value="GBP">Livre Sterling (GBP)</option>
                                <option value="MAD">Dirham Marocain (MAD)</option>
                                <option value="TND">Dinar Tunisien (TND)</option>
                            </select>
                            <small class="form-help">Devise utilisée pour toutes vos factures</small>
                        </div>
                    </div>

                    <div class="form-actions">
                        <button type="submit" class="save-btn">
                            <i class="fas fa-save"></i> Enregistrer les modifications
                        </button>
                    </div>
                </form>
            </div>`;
    }
}

// Initialisation de l'application
document.addEventListener('DOMContentLoaded', () => {
    // Ajout de données de test si nécessaire
    if (Client.getAll().length === 0) {
        Client.add(new Client('Client Test', 'test@example.com', '123 Rue Test', '0123456789'));
    }
    if (Product.getAll().length === 0) {
        Product.add(new Product('Produit Test', 99.99, 'Description du produit test'));
    }

    // Initialisation de l'interface
    UI.init();
}); 