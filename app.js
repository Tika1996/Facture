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
            currency: 'DZD', // Devise par défaut
            language: 'fr' // Langue par défaut: français
        };
    }

    static setSettings(settings) {
        localStorage.setItem('company-settings', JSON.stringify(settings));
    }
}

// Système de traduction
class Translator {
    static get translations() {
        return {
            // Termes généraux
            'dashboard': {
                'fr': 'Tableau de bord',
                'ar': 'لوحة التحكم'
            },
            'invoices': {
                'fr': 'Factures',
                'ar': 'الفواتير'
            },
            'clients': {
                'fr': 'Clients',
                'ar': 'العملاء'
            },
            'products': {
                'fr': 'Produits',
                'ar': 'المنتجات'
            },
            'settings': {
                'fr': 'Paramètres',
                'ar': 'الإعدادات'
            },
            'search': {
                'fr': 'Rechercher...',
                'ar': 'بحث...'
            },
            'new_invoice': {
                'fr': 'Nouvelle Facture',
                'ar': 'فاتورة جديدة'
            },
            'new_client': {
                'fr': 'Nouveau Client',
                'ar': 'عميل جديد'
            },
            'new_product': {
                'fr': 'Nouveau Produit',
                'ar': 'منتج جديد'
            },
            'save': {
                'fr': 'Enregistrer',
                'ar': 'حفظ'
            },
            'update': {
                'fr': 'Mettre à jour',
                'ar': 'تحديث'
            },
            'cancel': {
                'fr': 'Annuler',
                'ar': 'إلغاء'
            },
            'delete': {
                'fr': 'Supprimer',
                'ar': 'حذف'
            },
            'edit': {
                'fr': 'Modifier',
                'ar': 'تعديل'
            },
            'edit_invoice': {
                'fr': 'Modifier la facture',
                'ar': 'تعديل الفاتورة'
            },
            'update': {
                'fr': 'Mettre à jour',
                'ar': 'تحديث'
            },
            'invoice_updated': {
                'fr': 'Facture mise à jour avec succès !',
                'ar': 'تم تحديث الفاتورة بنجاح!'
            },
            'invoice_created': {
                'fr': 'Facture créée avec succès !',
                'ar': 'تم إنشاء الفاتورة بنجاح!'
            },
            'invoice_error': {
                'fr': 'Une erreur est survenue lors de la gestion de la facture.',
                'ar': 'حدث خطأ أثناء إدارة الفاتورة.'
            },
            'invoice_validation_error': {
                'fr': 'Veuillez sélectionner un client et ajouter au moins un article.',
                'ar': 'يرجى تحديد عميل وإضافة عنصر واحد على الأقل.'
            },
            'cannot_remove_last_item': {
                'fr': 'Impossible de supprimer le dernier article.',
                'ar': 'لا يمكن إزالة العنصر الأخير.'
            },
            'actions': {
                'fr': 'Actions',
                'ar': 'إجراءات'
            },
            'status': {
                'fr': 'Statut',
                'ar': 'الحالة'
            },
            'paid': {
                'fr': 'Payée',
                'ar': 'مدفوعة'
            },
            'pending': {
                'fr': 'En attente',
                'ar': 'في الانتظار'
            },
            'total': {
                'fr': 'Total',
                'ar': 'المجموع'
            },
            'total_ht': {
                'fr': 'Total HT',
                'ar': 'المجموع بدون ضريبة'
            },
            'vat': {
                'fr': 'TVA',
                'ar': 'الضريبة'
            },
            'total_ttc': {
                'fr': 'Total TTC',
                'ar': 'المجموع مع الضريبة'
            },
            
            // Tableau de bord
            'revenue': {
                'fr': 'Chiffre d\'affaires',
                'ar': 'الإيرادات'
            },
            'pending_invoices': {
                'fr': 'Factures en attente',
                'ar': 'الفواتير في الانتظار'
            },
            'active_clients': {
                'fr': 'Clients actifs',
                'ar': 'العملاء النشطون'
            },
            'recent_invoices': {
                'fr': 'Factures récentes',
                'ar': 'الفواتير الأخيرة'
            },
            
            // Factures
            'invoice_number': {
                'fr': 'N° Facture',
                'ar': 'رقم الفاتورة'
            },
            'client': {
                'fr': 'Client',
                'ar': 'العميل'
            },
            'date': {
                'fr': 'Date',
                'ar': 'التاريخ'
            },
            'amount': {
                'fr': 'Montant',
                'ar': 'المبلغ'
            },
            'view_invoice': {
                'fr': 'Voir la facture',
                'ar': 'عرض الفاتورة'
            },
            'download_invoice': {
                'fr': 'Télécharger la facture',
                'ar': 'تحميل الفاتورة'
            },
            'delete_invoice': {
                'fr': 'Supprimer la facture',
                'ar': 'حذف الفاتورة'
            },
            'select_client': {
                'fr': 'Sélectionner un client',
                'ar': 'اختر عميلاً'
            },
            'select_product': {
                'fr': 'Sélectionner un produit',
                'ar': 'اختر منتجاً'
            },
            'add_item': {
                'fr': 'Ajouter un article',
                'ar': 'إضافة عنصر'
            },
            'quantity': {
                'fr': 'Quantité',
                'ar': 'الكمية'
            },
            'description': {
                'fr': 'Description',
                'ar': 'الوصف'
            },
            'unit_price': {
                'fr': 'Prix unitaire',
                'ar': 'سعر الوحدة'
            },
            
            // Clients
            'name': {
                'fr': 'Nom',
                'ar': 'الاسم'
            },
            'email': {
                'fr': 'Email',
                'ar': 'البريد الإلكتروني'
            },
            'phone': {
                'fr': 'Téléphone',
                'ar': 'الهاتف'
            },
            'address': {
                'fr': 'Adresse',
                'ar': 'العنوان'
            },
            'delete_client_confirm': {
                'fr': 'Êtes-vous sûr de vouloir supprimer ce client ?',
                'ar': 'هل أنت متأكد من أنك تريد حذف هذا العميل؟'
            },
            
            // Produits
            'price': {
                'fr': 'Prix',
                'ar': 'السعر'
            },
            'delete_product_confirm': {
                'fr': 'Êtes-vous sûr de vouloir supprimer ce produit ?',
                'ar': 'هل أنت متأكد من أنك تريد حذف هذا المنتج؟'
            },
            'stock': {
                'fr': 'Stock',
                'ar': 'المخزون'
            },
            'manage_stock': {
                'fr': 'Gérer le stock',
                'ar': 'إدارة المخزون'
            },
            'product_name': {
                'fr': 'Nom du produit',
                'ar': 'اسم المنتج'
            },
            'current_stock': {
                'fr': 'Stock actuel',
                'ar': 'المخزون الحالي'
            },
            'quantity': {
                'fr': 'Quantité',
                'ar': 'الكمية'
            },
            'stock_quantity_help': {
                'fr': 'Entrez une valeur positive pour augmenter le stock ou négative pour le diminuer.',
                'ar': 'أدخل قيمة إيجابية لزيادة المخزون أو سالبة لتقليله.'
            },
            'update_stock': {
                'fr': 'Mettre à jour le stock',
                'ar': 'تحديث المخزون'
            },
            
            // Paramètres
            'company_settings': {
                'fr': 'Paramètres de l\'entreprise',
                'ar': 'إعدادات الشركة'
            },
            'main_info': {
                'fr': 'Informations principales',
                'ar': 'المعلومات الأساسية'
            },
            'company_name': {
                'fr': 'Nom de l\'entreprise',
                'ar': 'اسم الشركة'
            },
            'additional_info': {
                'fr': 'Informations complémentaires',
                'ar': 'معلومات إضافية'
            },
            'rc_number': {
                'fr': 'RC N°',
                'ar': 'رقم السجل التجاري'
            },
            'nif': {
                'fr': 'NIF',
                'ar': 'رقم التعريف الضريبي'
            },
            'billing_settings': {
                'fr': 'Paramètres de facturation',
                'ar': 'إعدادات الفوترة'
            },
            'currency': {
                'fr': 'Devise',
                'ar': 'العملة'
            },
            'language': {
                'fr': 'Langue',
                'ar': 'اللغة'
            },
            'save_settings': {
                'fr': 'Enregistrer les modifications',
                'ar': 'حفظ التغييرات'
            },
            'settings_saved': {
                'fr': 'Paramètres sauvegardés avec succès !',
                'ar': 'تم حفظ الإعدادات بنجاح!'
            },
            'language_changed': {
                'fr': 'La langue a été modifiée. La page va être rechargée pour appliquer les changements.',
                'ar': 'تم تغيير اللغة. سيتم إعادة تحميل الصفحة لتطبيق التغييرات.'
            },
            
            // Facture PDF
            'invoice': {
                'fr': 'FACTURE',
                'ar': 'فاتورة'
            },
            'billed_to': {
                'fr': 'Facturé à:',
                'ar': 'فاتورة إلى:'
            },
            'unknown_client': {
                'fr': 'Client inconnu',
                'ar': 'عميل غير معروف'
            },
            'thank_you': {
                'fr': 'Merci de votre confiance !',
                'ar': 'شكرا لثقتكم!'
            },
            'contact_us': {
                'fr': 'Pour toute question concernant cette facture, veuillez nous contacter.',
                'ar': 'لأي استفسار بخصوص هذه الفاتورة، يرجى الاتصال بنا.'
            },
            'invoice_items': {
                'fr': 'Articles de la facture',
                'ar': 'منتجات الفاتورة'
            },
            'delete_invoice': {
                'fr': 'Supprimer la facture',
                'ar': 'حذف الفاتورة'
            },
            'edit_invoice': {
                'fr': 'Modifier la facture',
                'ar': 'تعديل الفاتورة'
            },
            'new_invoice': {
                'fr': 'Nouvelle Facture',
                'ar': 'فاتورة جديدة'
            },
        };
    }
    
    static translate(key) {
        const settings = Storage.getSettings();
        const lang = settings.language || 'fr';
        
        // Si la clé existe dans les traductions
        if (this.translations[key]) {
            // Si la traduction existe pour cette langue
            if (this.translations[key][lang]) {
                return this.translations[key][lang];
            }
            // Sinon, retourne la traduction française (langue par défaut)
            return this.translations[key]['fr'];
        }
        
        // Si la clé n'existe pas, retourne la clé elle-même
        return key;
    }
    
    // Abréviation de la méthode translate pour un code plus concis
    static t(key) {
        return this.translate(key);
    }
    
    // Obtenir la direction du texte en fonction de la langue
    static getTextDirection() {
        const settings = Storage.getSettings();
        return settings.language === 'ar' ? 'rtl' : 'ltr';
    }
}

// Gestion des clients
class Client {
    constructor(name, email = "", address = "", phone = "") {
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

    static getById(clientId) {
        return this.getAll().find(c => c.id === clientId);
    }

    save() {
        const clients = Client.getAll();
        const index = clients.findIndex(c => c.id === this.id);
        if (index !== -1) {
            clients[index] = this;
        } else {
            Client.add(this);
        }
        Storage.setClients(clients);
    }
}

// Gestion des produits
class Product {
    constructor(name, price, description = "", stock = 0) {
        this.id = Date.now().toString();
        this.name = name;
        this.price = price;
        this.description = description;
        this.stock = stock;
    }

    static add(product) {
        const products = Storage.getProducts();
        products.push(product);
        Storage.setProducts(products);
    }

    static getAll() {
        return Storage.getProducts();
    }

    static getById(productId) {
        return this.getAll().find(p => p.id === productId);
    }

    save() {
        const products = Product.getAll();
        const index = products.findIndex(p => p.id === this.id);
        if (index !== -1) {
            products[index] = this;
        } else {
            Product.add(this);
        }
        Storage.setProducts(products);
    }
    
    // Méthodes pour gérer le stock
    static updateStock(productId, quantity) {
        const products = this.getAll();
        const index = products.findIndex(p => p.id === productId);
        if (index !== -1) {
            products[index].stock = Math.max(0, products[index].stock + quantity);
            Storage.setProducts(products);
            return true;
        }
        return false;
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
        const settings = Storage.getSettings();
        const isArabic = settings.language === 'ar';
        
        // Adapter la devise pour l'arabe
        let displayCurrency = currency;
        if (isArabic) {
            if (currency === 'DZD') displayCurrency = 'دج';
            else if (currency === 'EUR') displayCurrency = '€';
            // Autres devises si nécessaire
        }
        
        // En arabe, la devise est placée après le montant, en français avant
        if (isArabic) {
            return `${validAmount.toFixed(2)} ${displayCurrency}`;
        } else {
            return `${validAmount.toFixed(2)} ${displayCurrency}`;
        }
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
        const invoiceData = this.getAll().find(inv => inv.id === invoiceId);
        if (!invoiceData) return null;
        
        // Créer une instance complète de Invoice avec les données récupérées
        const invoice = new Invoice(invoiceData.clientId, invoiceData.items, invoiceData.date);
        // Copier toutes les propriétés
        Object.assign(invoice, invoiceData);
        
        return invoice;
    }

    generateHTML() {
        const client = Client.getAll().find(c => c.id === this.clientId);
        const settings = Storage.getSettings();
        const rtl = settings.language === 'ar';
        
        // Définir les symboles en fonction de la langue
        const symbolsSet = {
            colon: rtl ? ' :' : ': ',       // Deux points
            slash: rtl ? '/' : '/',         // Slash pour les dates
            comma: rtl ? '،' : ',',         // Virgule
            semicolon: rtl ? '؛' : ';',     // Point-virgule
            question: rtl ? '؟' : '?',      // Point d'interrogation
            exclamation: rtl ? '!' : '!'    // Point d'exclamation
        };
        
        // Format de la date adapté
        const invoiceDate = new Date(this.date);
        let dateFormat;
        if (rtl) {
            // Format de date arabe: jour/mois/année
            dateFormat = `${invoiceDate.getDate()}${symbolsSet.slash}${invoiceDate.getMonth() + 1}${symbolsSet.slash}${invoiceDate.getFullYear()}`;
        } else {
            // Format de date français
            dateFormat = invoiceDate.toLocaleDateString();
        }
        
        return `
            <!DOCTYPE html>
            <html lang="${settings.language}" dir="${rtl ? 'rtl' : 'ltr'}">
            <head>
                <meta charset="UTF-8">
                <title>${Translator.t('invoice')} ${this.id}</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
                <style>
                    body { 
                        font-family: ${rtl ? '"Amiri", "Scheherazade New", Arial, sans-serif' : 'Arial, sans-serif'}; 
                        margin: 0; 
                        color: #333;
                        padding: 0;
                        box-sizing: border-box;
                        direction: ${rtl ? 'rtl' : 'ltr'};
                        text-align: ${rtl ? 'right' : 'left'};
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
                        text-align: ${rtl ? 'left' : 'right'};
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
                        text-align: ${rtl ? 'right' : 'left'};
                        border-bottom: 1px solid #ddd;
                    }
                    td { 
                        padding: 12px;
                        text-align: ${rtl ? 'right' : 'left'}; 
                        border-bottom: 1px solid #ddd;
                        word-break: break-word;
                    }
                    .amount-cell {
                        white-space: nowrap; /* Empêcher le retour à la ligne */
                    }
                    .total { 
                        text-align: ${rtl ? 'left' : 'right'}; 
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
                    .client-header {
                        display: flex;
                        align-items: center;
                        margin-bottom: 8px;
                    }
                    .client-label {
                        font-weight: bold;
                        font-size: 1.1em;
                        margin-${rtl ? 'left' : 'right'}: 5px;
                    }
                    .client-name {
                        font-weight: bold;
                        font-size: 1.1em;
                    }
                    .client-address {
                        margin: 5px 0;
                    }
                    .client-details {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 15px;
                        margin-top: 8px;
                    }
                    .client-detail {
                        display: inline-block;
                    }
                    .detail-label {
                        font-weight: 500;
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
                    .totals-section {
                        margin-top: 20px;
                        border-top: 1px solid #eee;
                        padding-top: 15px;
                    }
                    .totals-table {
                        width: 100%;
                        border-collapse: collapse;
                    }
                    .totals-table tr {
                        border-bottom: 1px solid #eee;
                    }
                    .totals-table tr:last-child {
                        border-bottom: none;
                        font-weight: bold;
                    }
                    .totals-table td {
                        padding: 8px 0;
                        text-align: ${rtl ? 'left' : 'right'};
                        white-space: nowrap;
                    }
                    .totals-table td:first-child {
                        text-align: ${rtl ? 'right' : 'left'};
                        padding-${rtl ? 'left' : 'right'}: 20px;
                    }
                    .total-row {
                        display: flex;
                        justify-content: ${rtl ? 'flex-start' : 'flex-end'};
                        margin-bottom: 5px;
                    }
                    .total-label {
                        margin-${rtl ? 'left' : 'right'}: 20px;
                        font-weight: bold;
                    }
                    .total-amount {
                        min-width: 120px;
                        text-align: ${rtl ? 'right' : 'left'};
                        white-space: nowrap; /* Empêcher le retour à la ligne */
                    }
                    .total-ttc {
                        font-size: 1.2em;
                        margin-top: 10px;
                        border-top: 1px solid #ddd;
                        padding-top: 10px;
                    }
                    .info-row {
                        display: flex;
                        margin: 5px 0;
                        align-items: center;
                    }
                    .info-label {
                        font-weight: 500;
                        margin-${rtl ? 'left' : 'right'}: 5px;
                    }
                    .info-value {
                        margin: 0;
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
                            <h3>${settings.name || Translator.t('company_name')}</h3>
                            ${settings.address ? `<p>${settings.address}</p>` : ''}
                            ${settings.phone ? `
                                <div class="info-row">
                                    <div class="info-label">${Translator.t('phone')}${symbolsSet.colon}</div>
                                    <div class="info-value">${settings.phone}</div>
                                </div>` : ''}
                            ${settings.email ? `
                                <div class="info-row">
                                    <div class="info-label">${Translator.t('email')}${symbolsSet.colon}</div>
                                    <div class="info-value">${settings.email}</div>
                                </div>` : ''}
                            ${settings.rc ? `
                                <div class="info-row">
                                    <div class="info-label">${Translator.t('rc_number')}${symbolsSet.colon}</div>
                                    <div class="info-value">${settings.rc}</div>
                                </div>` : ''}
                            ${settings.nif ? `
                                <div class="info-row">
                                    <div class="info-label">${Translator.t('nif')}${symbolsSet.colon}</div>
                                    <div class="info-value">${settings.nif}</div>
                                </div>` : ''}
                        </div>
                        <div class="invoice-details">
                            <h2>${Translator.t('invoice')}</h2>
                            <div class="info-row">
                                <div class="info-label">${Translator.t('invoice_number')}${symbolsSet.colon}</div>
                                <div class="info-value">${this.id}</div>
                            </div>
                            <div class="info-row">
                                <div class="info-label">${Translator.t('date')}${symbolsSet.colon}</div>
                                <div class="info-value">${dateFormat}</div>
                            </div>
                            <div class="info-row">
                                <div class="info-label">${Translator.t('status')}${symbolsSet.colon}</div>
                                <div class="info-value">
                                    <span class="status ${this.status}">
                                        ${this.status === 'paid' ? Translator.t('paid') : Translator.t('pending')}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="client-info">
                        <div class="client-header">
                            <span class="client-label">${Translator.t('billed_to').replace(/\s*:\s*$/, '')}${symbolsSet.colon}</span>
                            <span class="client-name">${client?.name || Translator.t('unknown_client')}</span>
                        </div>
                        ${client?.address ? `<p class="client-address">${client.address}</p>` : ''}
                        <div class="client-details">
                            ${client?.phone ? `<span class="client-detail"><span class="detail-label">${Translator.t('phone')}${symbolsSet.colon}</span> ${client.phone}</span>` : ''}
                            ${client?.email ? `<span class="client-detail"><span class="detail-label">${Translator.t('email')}${symbolsSet.colon}</span> ${client.email}</span>` : ''}
                        </div>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th>${Translator.t('description')}</th>
                                <th>${Translator.t('quantity')}</th>
                                <th>${Translator.t('unit_price')}</th>
                                <th>${Translator.t('total')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${this.items.map(item => `
                                <tr>
                                    <td>${item.name}</td>
                                    <td>${item.quantity}</td>
                                    <td class="amount-cell">${Invoice.formatAmount(item.price, this.currency)}</td>
                                    <td class="amount-cell">${Invoice.formatAmount(item.quantity * item.price, this.currency)}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>

                    <div class="totals-section">
                        <table class="totals-table">
                            <tr>
                                <td>${Translator.t('total_ht')}${symbolsSet.colon}</td>
                                <td>${Invoice.formatAmount(this.totalHT, this.currency)}</td>
                            </tr>
                            <tr>
                                <td>${Translator.t('vat')} (${(this.tvaRate * 100).toFixed(0)}%)${symbolsSet.colon}</td>
                                <td>${Invoice.formatAmount(this.tva, this.currency)}</td>
                            </tr>
                            <tr>
                                <td>${Translator.t('total_ttc')}${symbolsSet.colon}</td>
                                <td>${Invoice.formatAmount(this.totalTTC, this.currency)}</td>
                            </tr>
                        </table>
                    </div>

                    <div class="footer">
                        <p>${Translator.t('thank_you')}</p>
                        <p>${Translator.t('contact_us')}</p>
                    </div>
                </div>
            </body>
            </html>
        `;
    }
    
    // Nouvelle méthode save pour mettre à jour une facture existante
    save() {
        const invoices = Invoice.getAll();
        const index = invoices.findIndex(inv => inv.id === this.id);
        
        if (index !== -1) {
            // Mettre à jour les calculs avant la sauvegarde
            this.totalHT = this.calculateTotalHT();
            this.tva = this.calculateTVA();
            this.totalTTC = this.calculateTotalTTC();
            
            // Mettre à jour la facture existante
            invoices[index] = this;
        } else {
            // Ajouter la nouvelle facture
            Invoice.add(this);
            return;
        }
        
        Storage.setInvoices(invoices);
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

    static handleInvoiceFormOpen(invoiceId = null) {
        const modal = document.getElementById('invoice-modal');
        if (!modal) return;

        // Mise à jour du titre de la fenêtre modale
        const modalTitle = modal.querySelector('.modal-header h2');
        if (modalTitle) {
            if (invoiceId) {
                modalTitle.textContent = Translator.t('edit_invoice');
            } else {
                modalTitle.textContent = Translator.t('new_invoice');
            }
        }

        modal.classList.add('active');
        
        // Réinitialiser le formulaire et les composants
        this.initInvoiceForm();
        
        // Peupler les listes déroulantes
        this.populateClientSelect();
        this.populateProductSelect();

        if (invoiceId) {
            // Mode édition : charger les données de la facture
            const invoice = Invoice.getById(invoiceId);
            if (invoice) {
                // Définir la date
                const dateInput = document.getElementById('invoice-date');
                if (dateInput) {
                    dateInput.value = invoice.date;
                }

                // Définir le client
                const clientHiddenInput = document.getElementById('client-select-value');
                const clientSearchInput = document.getElementById('client-search');
                if (clientHiddenInput && clientSearchInput) {
                    clientHiddenInput.value = invoice.clientId;
                    const client = Client.getById(invoice.clientId);
                    if (client) {
                        clientSearchInput.value = client.name;
                    }
                }

                // Supprimer les articles existants
                const itemsList = document.getElementById('items-list');
                if (itemsList) {
                    itemsList.innerHTML = '';
                }

                // Ajouter chaque article de la facture
                if (invoice.items && invoice.items.length) {
                    invoice.items.forEach(item => {
                        const itemRow = document.createElement('div');
                        itemRow.classList.add('item-row');
                        itemRow.innerHTML = `
                            <div class="searchable-select-container">
                                <div class="select-search-wrapper">
                                    <input type="text" class="select-search product-search" placeholder="Rechercher un produit...">
                                    <i class="fas fa-search search-icon"></i>
                                </div>
                                <div class="select-dropdown product-dropdown">
                                    <ul class="product-options"></ul>
                                </div>
                                <input type="hidden" class="product-select-value" required>
                            </div>
                            <input type="number" class="quantity" min="1" value="${item.quantity}" required>
                            <button type="button" class="remove-item">&times;</button>
                        `;
                        itemsList.appendChild(itemRow);
                        
                        // Initialiser le select avec recherche
                        const searchInput = itemRow.querySelector('.product-search');
                        const dropdown = itemRow.querySelector('.product-dropdown');
                        const optionsList = itemRow.querySelector('.product-options');
                        const hiddenInput = itemRow.querySelector('.product-select-value');
                        
                        this.setupProductSearchableSelect(searchInput, dropdown, optionsList, hiddenInput);
                        
                        // Sélectionner le produit
                        const product = Product.getById(item.productId);
                        if (product) {
                            hiddenInput.value = product.id;
                            hiddenInput.dataset.price = product.price;
                            searchInput.value = product.name;
                        }
                        
                        // Ajouter les écouteurs d'événements pour les nouveaux éléments
                        const quantityInput = itemRow.querySelector('.quantity');
                        
                        if (quantityInput) {
                            quantityInput.addEventListener('input', () => this.updateTotal());
                        }
                        
                        if (hiddenInput) {
                            hiddenInput.addEventListener('change', () => this.updateTotal());
                        }
                    });
                }

                // Définir l'ID de la facture en cours d'édition
                const form = document.getElementById('invoice-form');
                if (form) {
                    form.dataset.editId = invoiceId;
                }

                // Mettre à jour le total
                this.updateTotal();
            }
        }
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
                    this.handleInvoiceFormOpen();
                });

                const closeBtn = invoiceModal.querySelector('.close-modal');
                if (closeBtn) {
                    closeBtn.addEventListener('click', () => {
                        invoiceModal.classList.remove('active');
                        // Réinitialiser complètement le formulaire lors de la fermeture
                        const form = document.getElementById('invoice-form');
                        if (form) {
                            form.reset();
                            // Supprimer l'ID de facture en cours d'édition
                            delete form.dataset.editId;
                            // Vider la liste des articles
                            const itemsList = document.getElementById('items-list');
                            if (itemsList) {
                                itemsList.innerHTML = '';
                                this.addItemRow(); // Ajouter une ligne vide
                            }
                        }
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

        // MAJ des libellés des champs
        const labels = newForm.querySelectorAll('label');
        labels.forEach(label => {
            const inputId = label.getAttribute('for');
            if (inputId === 'invoice-client') label.textContent = Translator.t('client');
            if (inputId === 'invoice-date') label.textContent = Translator.t('date');
        });

        // MAJ des boutons
        const submitButton = newForm.querySelector('button[type="submit"]');
        if (submitButton) {
            submitButton.textContent = Translator.t('save');
        }
        
        const cancelButton = newForm.querySelector('button.cancel-button');
        if (cancelButton) {
            cancelButton.textContent = Translator.t('cancel');
        }
        
        // MAJ du titre de la section articles
        const itemsTitle = newForm.querySelector('.items-title');
        if (itemsTitle) {
            itemsTitle.textContent = Translator.t('invoice_items');
        }

        // Initialiser les selects avec recherche
        this.initSearchableSelects();
        
        // Gestionnaire pour l'ajout d'articles
        const addItemBtn = document.getElementById('add-item');
        if (addItemBtn) {
            addItemBtn.textContent = Translator.t('add_item');
            addItemBtn.addEventListener('click', () => this.addItemRow());
        }
        
        // Supprimer les éléments existants du formulaire
        const itemsList = document.getElementById('items-list');
        if (itemsList) {
            itemsList.innerHTML = '';
            // Ajouter une ligne initiale vide
            this.addItemRow();
            
            // Gestionnaire pour la suppression d'articles
            itemsList.addEventListener('click', (e) => {
                if (e.target.classList.contains('remove-item')) {
                    // Vérifier s'il reste plus d'un article
                    const itemRows = document.querySelectorAll('.item-row');
                    if (itemRows.length > 1) {
                        e.target.closest('.item-row').remove();
                        this.updateTotal();
                    } else {
                        alert(Translator.t('cannot_remove_last_item'));
                    }
                }
            });
        }
        
        // Event listener pour la soumission du formulaire
        newForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleInvoiceSubmit(newForm);
        });
        
        // Retirer l'ID de la facture en cours d'édition
        delete newForm.dataset.editId;
        
        // Vider les selects
        document.getElementById('client-search').value = '';
        document.getElementById('client-select-value').value = '';
        
        // Mise à jour de la date au jour actuel
        const dateInput = document.getElementById('invoice-date');
        if (dateInput) {
            const today = new Date();
            dateInput.value = today.toISOString().slice(0, 10);
        }
    }
    
    static addItemRow() {
        const itemsList = document.getElementById('items-list');
        if (!itemsList) return;
        
        const itemRow = document.createElement('div');
        itemRow.classList.add('item-row');
        itemRow.innerHTML = `
            <div class="searchable-select-container">
                <div class="select-search-wrapper">
                    <input type="text" class="select-search product-search" placeholder="Rechercher un produit...">
                    <i class="fas fa-search search-icon"></i>
                </div>
                <div class="select-dropdown product-dropdown">
                    <ul class="product-options"></ul>
                </div>
                <input type="hidden" class="product-select-value" required>
            </div>
            <input type="number" class="quantity" min="1" value="1" required>
            <button type="button" class="remove-item">&times;</button>
        `;
        itemsList.appendChild(itemRow);
        
        // Initialiser le nouveau select avec recherche
        const searchInput = itemRow.querySelector('.product-search');
        const dropdown = itemRow.querySelector('.product-dropdown');
        const optionsList = itemRow.querySelector('.product-options');
        const hiddenInput = itemRow.querySelector('.product-select-value');
        const quantityInput = itemRow.querySelector('.quantity');
        
        this.setupProductSearchableSelect(searchInput, dropdown, optionsList, hiddenInput);
        
        // Mise à jour du total lors des changements
        quantityInput.addEventListener('input', () => this.updateTotal());
        hiddenInput.addEventListener('change', () => this.updateTotal());
        
        // Mettre à jour le total immédiatement
        this.updateTotal();
        
        return itemRow;
    }

    static initSearchableSelects() {
        // Initialiser les selects pour clients
        const clientSearchInput = document.getElementById('client-search');
        const clientDropdown = document.getElementById('client-dropdown');
        const clientOptionsList = document.getElementById('client-options');
        const clientHiddenInput = document.getElementById('client-select-value');
        
        if (clientSearchInput && clientDropdown && clientOptionsList && clientHiddenInput) {
            this.setupClientSearchableSelect(clientSearchInput, clientDropdown, clientOptionsList, clientHiddenInput);
        }
        
        // Initialiser les selects pour produits
        const productSearchInputs = document.querySelectorAll('.product-search');
        productSearchInputs.forEach(searchInput => {
            const dropdown = searchInput.closest('.searchable-select-container').querySelector('.product-dropdown');
            const optionsList = searchInput.closest('.searchable-select-container').querySelector('.product-options');
            const hiddenInput = searchInput.closest('.searchable-select-container').querySelector('.product-select-value');
            
            if (dropdown && optionsList && hiddenInput) {
                this.setupProductSearchableSelect(searchInput, dropdown, optionsList, hiddenInput);
            }
        });
    }
    
    static setupClientSearchableSelect(searchInput, dropdown, optionsList, hiddenInput) {
        // Charger toutes les options
        const clients = Client.getAll();
        this.populateClientOptions(optionsList, clients);
        
        // Gestionnaire d'événements pour la recherche
        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.toLowerCase();
            const filteredClients = clients.filter(client => 
                client.name.toLowerCase().includes(searchTerm) || 
                (client.email && client.email.toLowerCase().includes(searchTerm))
            );
            this.populateClientOptions(optionsList, filteredClients);
            dropdown.classList.add('active');
        });
        
        // Ouvrir le dropdown au focus
        searchInput.addEventListener('focus', () => {
            dropdown.classList.add('active');
        });
        
        // Gérer la sélection d'une option
        optionsList.addEventListener('click', (e) => {
            const selectedLi = e.target.closest('li');
            if (selectedLi) {
                const selectedId = selectedLi.dataset.id;
                const selectedName = selectedLi.textContent.trim();
                hiddenInput.value = selectedId;
                searchInput.value = selectedName;
                dropdown.classList.remove('active');
                
                // Déclencher l'événement change pour le tracking
                const event = new Event('change');
                hiddenInput.dispatchEvent(event);
            }
        });
        
        // Fermer le dropdown lorsqu'on clique ailleurs
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });
    }
    
    static setupProductSearchableSelect(searchInput, dropdown, optionsList, hiddenInput) {
        // Charger toutes les options
        const products = Product.getAll();
        this.populateProductOptions(optionsList, products);
        
        // Gestionnaire d'événements pour la recherche
        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.toLowerCase();
            const filteredProducts = products.filter(product => 
                product.name.toLowerCase().includes(searchTerm) || 
                (product.description && product.description.toLowerCase().includes(searchTerm))
            );
            this.populateProductOptions(optionsList, filteredProducts);
            dropdown.classList.add('active');
        });
        
        // Ouvrir le dropdown au focus
        searchInput.addEventListener('focus', () => {
            dropdown.classList.add('active');
        });
        
        // Gérer la sélection d'une option
        optionsList.addEventListener('click', (e) => {
            const selectedLi = e.target.closest('li');
            if (selectedLi) {
                const selectedId = selectedLi.dataset.id;
                const selectedName = selectedLi.textContent.trim();
                const selectedPrice = selectedLi.dataset.price;
                hiddenInput.value = selectedId;
                hiddenInput.dataset.price = selectedPrice;
                searchInput.value = selectedName;
                dropdown.classList.remove('active');
                
                // Déclencher l'événement change pour le tracking
                const event = new Event('change');
                hiddenInput.dispatchEvent(event);
                
                // Mettre à jour le total
                this.updateTotal();
            }
        });
        
        // Fermer le dropdown lorsqu'on clique ailleurs
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });
    }
    
    static populateClientOptions(optionsList, clients) {
        optionsList.innerHTML = '';
        
        if (clients.length === 0) {
            optionsList.innerHTML = '<li class="no-results">Aucun client trouvé</li>';
            return;
        }
        
        clients.forEach(client => {
            const li = document.createElement('li');
            li.textContent = client.name;
            li.dataset.id = client.id;
            optionsList.appendChild(li);
        });
    }
    
    static populateProductOptions(optionsList, products) {
        optionsList.innerHTML = '';
        
        if (products.length === 0) {
            optionsList.innerHTML = '<li class="no-results">Aucun produit trouvé</li>';
            return;
        }
        
        products.forEach(product => {
            const li = document.createElement('li');
            li.textContent = product.name;
            li.dataset.id = product.id;
            li.dataset.price = product.price;
            optionsList.appendChild(li);
        });
    }

    static populateClientSelect() {
        const clientOptionsList = document.getElementById('client-options');
        if (!clientOptionsList) return;
        
        const clients = Client.getAll();
        this.populateClientOptions(clientOptionsList, clients);
    }

    static populateProductSelect() {
        const productOptionsLists = document.querySelectorAll('.product-options');
        if (!productOptionsLists.length) return;
        
        const products = Product.getAll();
        productOptionsLists.forEach(optionsList => {
            this.populateProductOptions(optionsList, products);
        });
    }

    static updateTotal() {
        const totalElement = document.getElementById('invoice-total');
        if (!totalElement) return;

        let total = 0;
        const itemRows = document.querySelectorAll('.item-row');
        
        itemRows.forEach(row => {
            const hiddenInput = row.querySelector('.product-select-value');
            const quantity = parseInt(row.querySelector('.quantity')?.value) || 0;
            const price = hiddenInput && hiddenInput.dataset.price ? parseFloat(hiddenInput.dataset.price) || 0 : 0;
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
                <td>${Invoice.formatAmount(invoice.totalTTC)}</td>
                <td>
                    <span class="status-badge ${invoice.status} clickable" data-invoice-id="${invoice.id}">
                        ${invoice.status === 'paid' ? 'Payée' : 'En attente'}
                    </span>
                </td>
                <td>
                    <button class="action-btn edit-btn" data-id="${invoice.id}" title="${Translator.t('edit')}">
                        <i class="fas fa-edit"></i>
                    </button>
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

        // Éditer
        document.querySelectorAll('.edit-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const invoiceId = btn.dataset.id;
                this.openInvoiceForEdit(invoiceId);
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
                <td>${product.stock || 0}</td>
                <td>
                    <button class="action-btn edit-btn" data-id="${product.id}" title="Modifier le produit">
                        <i class="fas fa-pen"></i>
                    </button>
                    <button class="action-btn stock-btn" data-id="${product.id}" title="Gérer le stock">
                        <i class="fas fa-boxes"></i>
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
                clientForm.removeAttribute('data-edit-id');
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
                        clientForm.setAttribute('data-edit-id', clientId);
                        
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
                const editId = clientForm.getAttribute('data-edit-id');
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
                clientForm.removeAttribute('data-edit-id');
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
                productForm.removeAttribute('data-edit-id');
                // Mettre à jour le titre du modal et le bouton
                productModal.querySelector('.modal-header h2').textContent = 'Nouveau Produit';
                productModal.querySelector('.save-btn').textContent = 'Enregistrer';
            });

            // Fermeture du modal
            productModal.querySelector('.close-modal').addEventListener('click', () => {
                productModal.classList.remove('active');
            });
        }

        // Gestion des boutons d'action (modifier, gérer stock et supprimer)
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
                        document.getElementById('product-stock').value = product.stock || 0;
                        
                        // Ajouter l'ID du produit en cours d'édition
                        productForm.setAttribute('data-edit-id', productId);
                        
                        // Mettre à jour le titre du modal et le bouton
                        modal.querySelector('.modal-header h2').textContent = 'Modifier Produit';
                        modal.querySelector('.save-btn').textContent = 'Mettre à jour';
                        
                        modal.classList.add('active');
                    }
                } else if (btn.classList.contains('stock-btn')) {
                    // Ouvrir le modal de gestion de stock
                    const modal = document.getElementById('stock-modal');
                    if (modal) {
                        document.getElementById('stock-product-id').value = product.id;
                        document.getElementById('stock-product-name').value = product.name;
                        document.getElementById('stock-product-current').value = product.stock || 0;
                        document.getElementById('stock-product-quantity').value = 0;
                        
                        modal.classList.add('active');
                    }
                } else if (btn.classList.contains('delete-btn')) {
                    if (confirm(Translator.t('delete_product_confirm'))) {
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
                const editId = newProductForm.getAttribute('data-edit-id');
                const productData = {
                    name: document.getElementById('product-name').value,
                    price: parseFloat(document.getElementById('product-price').value) || 0,
                    description: document.getElementById('product-description').value,
                    stock: parseInt(document.getElementById('product-stock').value) || 0
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
                        productData.description,
                        productData.stock
                    );
                    Product.add(product);
                }

                this.updateProductsList();
                document.getElementById('product-modal').classList.remove('active');
                newProductForm.reset();
                productForm.removeAttribute('data-edit-id');
            });
        }
        
        // Soumission du formulaire de gestion de stock
        const stockForm = document.getElementById('stock-form');
        if (stockForm) {
            // Supprimer les anciens event listeners
            const newStockForm = stockForm.cloneNode(true);
            stockForm.parentNode.replaceChild(newStockForm, stockForm);
            
            newStockForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const productId = document.getElementById('stock-product-id').value;
                const quantity = parseInt(document.getElementById('stock-product-quantity').value) || 0;
                
                if (productId && quantity !== 0) {
                    Product.updateStock(productId, quantity);
                    this.updateProductsList();
                    document.getElementById('stock-modal').classList.remove('active');
                }
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
                nif: document.getElementById('company-nif').value,
                language: document.getElementById('company-language').value
            };
            
            // Vérifier si la langue a changé
            const previousLanguage = Storage.getSettings().language || 'fr';
            const languageChanged = previousLanguage !== settings.language;
            
            Storage.setSettings(settings);
            alert(Translator.t('settings_saved'));
            
            // Si la langue a changé, recharger la page pour appliquer les changements
            if (languageChanged) {
                alert(Translator.t('language_changed'));
                window.location.reload();
            } else {
                // Mettre à jour l'affichage des montants
                Invoice.updateDashboardStats();
                this.updateInvoicesList();
                this.updateProductsList();
            }
        });
    }

    static initGlobalEventListeners() {
        // Gestionnaire pour les boutons d'action globaux
        document.addEventListener('click', (e) => {
            const actionBtn = e.target.closest('.action-btn');
            if (!actionBtn) return;

            // Vérifier si nous sommes sur la page des factures
            // Si oui, les gestionnaires spécifiques dans initInvoiceActions s'en occupent déjà
            const invoicesList = document.getElementById('invoices-list');
            if (invoicesList && invoicesList.contains(actionBtn)) {
                return; // Éviter la duplication du traitement
            }

            const invoiceId = actionBtn.dataset.id;
            if (!invoiceId) return;

            // Utiliser la méthode getById améliorée pour récupérer une instance complète
            const invoice = Invoice.getById(invoiceId);
            if (!invoice) return;
            
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
            } else if (actionBtn.classList.contains('mark-paid-btn')) {
                const invoices = Invoice.getAll();
                const index = invoices.findIndex(inv => inv.id === invoiceId);
                
                if (index !== -1) {
                    invoices[index].status = 'paid';
                    Storage.setInvoices(invoices);
                    this.updateInvoicesList();
                    Invoice.updateDashboardStats();
                }
            } else if (actionBtn.classList.contains('delete-btn')) {
                if (confirm('Êtes-vous sûr de vouloir supprimer cet élément ?')) {
                    if (Invoice.delete(invoiceId)) {
                        this.updateInvoicesList();
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
                            <td>${Invoice.formatAmount(invoice.totalTTC)}</td>
                            <td>
                                <span class="status-badge ${invoice.status} clickable" data-invoice-id="${invoice.id}">
                                    ${invoice.status === 'paid' ? 'Payée' : 'En attente'}
                                </span>
                            </td>
                            <td>
                                <button class="action-btn edit-btn" data-id="${invoice.id}" title="${Translator.t('edit')}">
                                    <i class="fas fa-edit"></i>
                                </button>
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
                            <td>${product.stock || 0}</td>
                            <td>
                                <button class="action-btn edit-btn" data-id="${product.id}" title="Modifier le produit">
                                    <i class="fas fa-pen"></i>
                                </button>
                                <button class="action-btn stock-btn" data-id="${product.id}" title="Gérer le stock">
                                    <i class="fas fa-boxes"></i>
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

    static openInvoiceForEdit(invoiceId) {
        // Récupérer la facture à modifier
        const invoice = Invoice.getById(invoiceId);
        if (!invoice) return;
        
        // Ouvrir le modal
        const modal = document.getElementById('invoice-modal');
        if (!modal) return;
        
        // Mettre à jour le titre du modal
        const modalTitle = modal.querySelector('.modal-header h2');
        if (modalTitle) {
            modalTitle.textContent = Translator.t('edit_invoice');
        }

        // Réinitialiser le formulaire et les composants de sélection avec recherche
        this.initInvoiceForm();
        
        // Récupérer le formulaire
        const form = document.getElementById('invoice-form');
        if (!form) return;
        
        // Stocker l'ID de la facture en cours de modification
        form.dataset.editId = invoiceId;
        
        // Sélectionner le client dans la liste déroulante avec recherche
        const clientHiddenInput = document.getElementById('client-select-value');
        const clientSearchInput = document.getElementById('client-search');
        if (clientHiddenInput && clientSearchInput) {
            clientHiddenInput.value = invoice.clientId;
            const client = Client.getById(invoice.clientId);
            if (client) {
                clientSearchInput.value = client.name;
            }
        }
        
        // Vider la liste des articles
        const itemsList = document.getElementById('items-list');
        if (itemsList) {
            itemsList.innerHTML = '';
            
            // Ajouter les articles de la facture
            invoice.items.forEach(item => {
                const itemRow = document.createElement('div');
                itemRow.classList.add('item-row');
                itemRow.innerHTML = `
                    <div class="searchable-select-container">
                        <div class="select-search-wrapper">
                            <input type="text" class="select-search product-search" placeholder="Rechercher un produit...">
                            <i class="fas fa-search search-icon"></i>
                        </div>
                        <div class="select-dropdown product-dropdown">
                            <ul class="product-options"></ul>
                        </div>
                        <input type="hidden" class="product-select-value" required>
                    </div>
                    <input type="number" class="quantity" min="1" value="${item.quantity}" required>
                    <button type="button" class="remove-item">&times;</button>
                `;
                itemsList.appendChild(itemRow);
                
                // Initialiser le select avec recherche
                const searchInput = itemRow.querySelector('.product-search');
                const dropdown = itemRow.querySelector('.product-dropdown');
                const optionsList = itemRow.querySelector('.product-options');
                const hiddenInput = itemRow.querySelector('.product-select-value');
                
                this.setupProductSearchableSelect(searchInput, dropdown, optionsList, hiddenInput);
                
                // Sélectionner le produit
                const product = Product.getById(item.productId);
                if (product) {
                    hiddenInput.value = product.id;
                    hiddenInput.dataset.price = product.price;
                    searchInput.value = product.name;
                }
                
                // Ajouter les écouteurs d'événements pour les nouveaux éléments
                const quantityInput = itemRow.querySelector('.quantity');
                
                if (quantityInput) {
                    quantityInput.addEventListener('input', () => this.updateTotal());
                }
                
                if (hiddenInput) {
                    hiddenInput.addEventListener('change', () => this.updateTotal());
                }
            });
        }

        // Mettre à jour le total
        this.updateTotal();
        
        // Mettre à jour le bouton de soumission
        const submitButton = form.querySelector('button[type="submit"]');
        if (submitButton) {
            submitButton.textContent = Translator.t('update');
        }
        
        // Afficher le modal
        modal.classList.add('active');
    }

    static handleInvoiceSubmit(form) {
        const editId = form.dataset.editId;
        const clientId = document.getElementById('client-select-value').value;
        const items = [];

        form.querySelectorAll('.item-row').forEach(row => {
            const hiddenInput = row.querySelector('.product-select-value');
            const product = Product.getById(hiddenInput.value);
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
                if (editId) {
                    // Mode édition - modifier une facture existante
                    const existingInvoice = Invoice.getById(editId);
                    
                    if (existingInvoice) {
                        // Mettre à jour les propriétés de la facture
                        existingInvoice.clientId = clientId;
                        existingInvoice.items = items;
                        existingInvoice.totalHT = existingInvoice.calculateTotalHT();
                        existingInvoice.tva = existingInvoice.calculateTVA();
                        existingInvoice.totalTTC = existingInvoice.calculateTotalTTC();
                        
                        // Sauvegarder les modifications
                        existingInvoice.save();
                        
                        // Mettre à jour l'interface utilisateur
                        this.updateInvoicesList();
                        Invoice.updateDashboardStats();
                        
                        // Afficher un message de succès
                        alert(Translator.t('invoice_updated') || 'Facture mise à jour avec succès !');
                        location.reload(); // Recharger la page pour actualiser l'interface
                    }
                } else {
                    // Mode création - créer une nouvelle facture
                    const invoice = new Invoice(clientId, items);
                    Invoice.add(invoice);
                    
                    // Afficher un message de succès
                    alert(Translator.t('invoice_created') || 'Facture créée avec succès !');
                }
                
                // Fermer le modal
                document.getElementById('invoice-modal').classList.remove('active');
                
                // Réinitialiser le formulaire
                form.reset();
                form.removeAttribute('data-edit-id');
                
                // Réinitialiser les articles
                document.getElementById('items-list').innerHTML = `
                    <div class="item-row">
                        <div class="searchable-select-container">
                            <div class="select-search-wrapper">
                                <input type="text" class="select-search product-search" placeholder="Rechercher un produit...">
                                <i class="fas fa-search search-icon"></i>
                            </div>
                            <div class="select-dropdown product-dropdown">
                                <ul class="product-options"></ul>
                            </div>
                            <input type="hidden" class="product-select-value" required>
                        </div>
                        <input type="number" class="quantity" min="1" value="1" required>
                        <button type="button" class="remove-item">&times;</button>
                    </div>
                `;
                this.updateTotal();
                
                // Rediriger vers la liste des factures si nous ne sommes pas déjà dessus
                if (!document.querySelector('.invoices-list')) {
                    Router.navigateTo('invoices');
                } else {
                    // Mettre à jour la liste des factures si nous sommes déjà sur la page
                    this.updateInvoicesList();
                }
            } catch (error) {
                console.error('Erreur lors de la gestion de la facture:', error);
                alert(Translator.t('invoice_error') || 'Une erreur est survenue lors de la gestion de la facture.');
            }
        } else {
            alert(Translator.t('invoice_validation_error') || 'Veuillez sélectionner un client et ajouter au moins un article.');
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
        const rtl = Translator.getTextDirection() === 'rtl';
        return `
            <header class="top-bar ${rtl ? 'rtl' : ''}">
                <div class="search-bar">
                    <i class="fas fa-search"></i>
                    <input type="text" placeholder="${Translator.t('search')}">
                </div>
                <div class="user-menu">
                    <button class="new-invoice-btn"><i class="fas fa-plus"></i> ${Translator.t('new_invoice')}</button>
                    <div class="profile">
                        <img src="https://via.placeholder.com/40" alt="Profile" class="profile-img">
                        <span>John Doe</span>
                    </div>
                </div>
            </header>

            <div class="dashboard ${rtl ? 'rtl' : ''}">
                <div class="stats-container">
                    <div class="stat-card">
                        <div class="stat-icon"><i class="fas fa-euro-sign"></i></div>
                        <div class="stat-info">
                            <h3>${Translator.t('revenue')}</h3>
                            <p class="amount">0 €</p>
                        </div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon"><i class="fas fa-file-invoice"></i></div>
                        <div class="stat-info">
                            <h3>${Translator.t('pending_invoices')}</h3>
                            <p class="amount">0</p>
                        </div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon"><i class="fas fa-users"></i></div>
                        <div class="stat-info">
                            <h3>${Translator.t('active_clients')}</h3>
                            <p class="amount">0</p>
                        </div>
                    </div>
                </div>

                <div class="recent-invoices">
                    <h2>${Translator.t('recent_invoices')}</h2>
                    <div class="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>${Translator.t('invoice_number')}</th>
                                    <th>${Translator.t('client')}</th>
                                    <th>${Translator.t('date')}</th>
                                    <th>${Translator.t('amount')}</th>
                                    <th>${Translator.t('status')}</th>
                                    <th>${Translator.t('actions')}</th>
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
        const rtl = Translator.getTextDirection() === 'rtl';
        return `
            <header class="top-bar ${rtl ? 'rtl' : ''}">
                <h1>${Translator.t('invoices')}</h1>
                <div class="user-menu">
                    <button class="new-invoice-btn"><i class="fas fa-plus"></i> ${Translator.t('new_invoice')}</button>
                </div>
            </header>
            <div class="invoices-list ${rtl ? 'rtl' : ''}">
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>${Translator.t('invoice_number')}</th>
                                <th>${Translator.t('client')}</th>
                                <th>${Translator.t('date')}</th>
                                <th>${Translator.t('amount')}</th>
                                <th>${Translator.t('status')}</th>
                                <th>${Translator.t('actions')}</th>
                            </tr>
                        </thead>
                        <tbody id="invoices-list">
                        </tbody>
                    </table>
                </div>
            </div>`;
    }

    static getClientsView() {
        const rtl = Translator.getTextDirection() === 'rtl';
        return `
            <header class="top-bar ${rtl ? 'rtl' : ''}">
                <h1>${Translator.t('clients')}</h1>
                <div class="user-menu">
                    <div class="search-bar">
                        <i class="fas fa-search"></i>
                        <input type="text" placeholder="${Translator.t('search')}">
                    </div>
                    <button class="new-client-btn"><i class="fas fa-plus"></i> ${Translator.t('new_client')}</button>
                </div>
            </header>
            <div class="clients-list ${rtl ? 'rtl' : ''}">
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>${Translator.t('name')}</th>
                                <th>${Translator.t('email')}</th>
                                <th>${Translator.t('phone')}</th>
                                <th>${Translator.t('address')}</th>
                                <th>${Translator.t('actions')}</th>
                            </tr>
                        </thead>
                        <tbody id="clients-list">
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Modal pour nouveau client -->
            <div class="modal" id="client-modal">
                <div class="modal-content ${rtl ? 'rtl' : ''}">
                    <div class="modal-header">
                        <h2>${Translator.t('new_client')}</h2>
                        <button class="close-modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <form id="client-form">
                            <div class="form-group">
                                <label>${Translator.t('name')}</label>
                                <input type="text" id="client-name" required>
                            </div>
                            <div class="form-group">
                                <label>${Translator.t('email')}</label>
                                <input type="email" id="client-email">
                            </div>
                            <div class="form-group">
                                <label>${Translator.t('phone')}</label>
                                <input type="tel" id="client-phone">
                            </div>
                            <div class="form-group">
                                <label>${Translator.t('address')}</label>
                                <textarea id="client-address"></textarea>
                            </div>
                            <button type="submit" class="save-btn">${Translator.t('save')}</button>
                        </form>
                    </div>
                </div>
            </div>`;
    }

    static getProductsView() {
        const rtl = Translator.getTextDirection() === 'rtl';
        return `
            <header class="top-bar ${rtl ? 'rtl' : ''}">
                <h1>${Translator.t('products')}</h1>
                <div class="user-menu">
                    <div class="search-bar">
                        <i class="fas fa-search"></i>
                        <input type="text" placeholder="${Translator.t('search')}">
                    </div>
                    <button class="new-product-btn"><i class="fas fa-plus"></i> ${Translator.t('new_product')}</button>
                </div>
            </header>
            <div class="products-list ${rtl ? 'rtl' : ''}">
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>${Translator.t('name')}</th>
                                <th>${Translator.t('price')}</th>
                                <th>${Translator.t('description')}</th>
                                <th>${Translator.t('stock')}</th>
                                <th>${Translator.t('actions')}</th>
                            </tr>
                        </thead>
                        <tbody id="products-list">
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Modal pour nouveau produit -->
            <div class="modal" id="product-modal">
                <div class="modal-content ${rtl ? 'rtl' : ''}">
                    <div class="modal-header">
                        <h2>${Translator.t('new_product')}</h2>
                        <button class="close-modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <form id="product-form">
                            <div class="form-group">
                                <label>${Translator.t('name')}</label>
                                <input type="text" id="product-name" required>
                            </div>
                            <div class="form-group">
                                <label>${Translator.t('price')}</label>
                                <input type="number" id="product-price" step="0.01" required>
                            </div>
                            <div class="form-group">
                                <label>${Translator.t('description')}</label>
                                <textarea id="product-description"></textarea>
                            </div>
                            <div class="form-group">
                                <label>${Translator.t('stock')}</label>
                                <input type="number" id="product-stock" min="0" value="0" required>
                            </div>
                            <button type="submit" class="save-btn">${Translator.t('save')}</button>
                        </form>
                    </div>
                </div>
            </div>
            
            <!-- Modal pour la gestion du stock -->
            <div class="modal" id="stock-modal">
                <div class="modal-content ${rtl ? 'rtl' : ''}">
                    <div class="modal-header">
                        <h2>${Translator.t('manage_stock')}</h2>
                        <button class="close-modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <form id="stock-form">
                            <input type="hidden" id="stock-product-id">
                            <div class="form-group">
                                <label>${Translator.t('product_name')}</label>
                                <input type="text" id="stock-product-name" readonly>
                            </div>
                            <div class="form-group">
                                <label>${Translator.t('current_stock')}</label>
                                <input type="text" id="stock-product-current" readonly>
                            </div>
                            <div class="form-group">
                                <label>${Translator.t('quantity')}</label>
                                <input type="number" id="stock-product-quantity" required>
                                <small class="form-help">${Translator.t('stock_quantity_help')}</small>
                            </div>
                            <button type="submit" class="save-btn">${Translator.t('update_stock')}</button>
                        </form>
                    </div>
                </div>
            </div>`;
    }

    static getSettingsView() {
        const rtl = Translator.getTextDirection() === 'rtl';
        return `
            <header class="top-bar ${rtl ? 'rtl' : ''}">
                <h1>${Translator.t('company_settings')}</h1>
            </header>
            <div class="settings-container ${rtl ? 'rtl' : ''}">
                <form id="settings-form" class="settings-form">
                    <div class="settings-section">
                        <h2><i class="fas fa-building"></i> ${Translator.t('main_info')}</h2>
                        <div class="form-group">
                            <label for="company-name">${Translator.t('company_name')} *</label>
                            <input type="text" id="company-name" required placeholder="${Translator.t('company_name')}">
                            <small class="form-help">${Translator.t('company_name')}</small>
                        </div>
                        <div class="form-group">
                            <label for="company-phone">${Translator.t('phone')} *</label>
                            <input type="tel" id="company-phone" required placeholder="Ex: 0123456789">
                            <small class="form-help">${Translator.t('phone')}</small>
                        </div>
                    </div>

                    <div class="settings-section">
                        <h2><i class="fas fa-info-circle"></i> ${Translator.t('additional_info')}</h2>
                        <div class="form-group">
                            <label for="company-rc">${Translator.t('rc_number')}</label>
                            <input type="text" id="company-rc" placeholder="${Translator.t('rc_number')}">
                            <small class="form-help">${Translator.t('rc_number')}</small>
                        </div>
                        <div class="form-group">
                            <label for="company-nif">${Translator.t('nif')}</label>
                            <input type="text" id="company-nif" placeholder="${Translator.t('nif')}">
                            <small class="form-help">${Translator.t('nif')}</small>
                        </div>
                        <div class="form-group">
                            <label for="company-email">${Translator.t('email')}</label>
                            <input type="email" id="company-email" placeholder="contact@entreprise.com">
                            <small class="form-help">${Translator.t('email')}</small>
                        </div>
                        <div class="form-group">
                            <label for="company-address">${Translator.t('address')}</label>
                            <textarea id="company-address" placeholder="${Translator.t('address')}" rows="3"></textarea>
                            <small class="form-help">${Translator.t('address')}</small>
                        </div>
                    </div>

                    <div class="settings-section">
                        <h2><i class="fas fa-money-bill"></i> ${Translator.t('billing_settings')}</h2>
                        <div class="form-group">
                            <label for="company-currency">${Translator.t('currency')} *</label>
                            <select id="company-currency" required>
                                <option value="DZD">Dinar Algérien (DZD)</option>
                                <option value="EUR">Euro (EUR)</option>
                                <option value="USD">Dollar US (USD)</option>
                                <option value="GBP">Livre Sterling (GBP)</option>
                                <option value="MAD">Dirham Marocain (MAD)</option>
                                <option value="TND">Dinar Tunisien (TND)</option>
                            </select>
                            <small class="form-help">${Translator.t('currency')}</small>
                        </div>
                        <div class="form-group">
                            <label for="company-language">${Translator.t('language')} *</label>
                            <select id="company-language" required>
                                <option value="fr">Français</option>
                                <option value="ar">العربية (Arabe)</option>
                            </select>
                            <small class="form-help">${Translator.t('language')}</small>
                        </div>
                    </div>

                    <div class="form-actions">
                        <button type="submit" class="save-btn">
                            <i class="fas fa-save"></i> ${Translator.t('save_settings')}
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