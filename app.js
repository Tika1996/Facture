
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
    
    static getEmployees() {
        return JSON.parse(localStorage.getItem('employees')) || [];
    }

    static setEmployees(employees) {
        localStorage.setItem('employees', JSON.stringify(employees));
    }

    static getSettings() {
        return JSON.parse(localStorage.getItem('company-settings')) || {
            currency: 'DZD', // Devise par défaut
            language: 'fr', // Langue par défaut: français
            adherent: '', // Champ pour le N° Adhérent
            managerName: '', // Champ pour le Nom du Gérant
            businessType: '', // Champ pour le Type de Commerce
            art: '', // Champ pour le N° Article d'imposition
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
            'dashboard': { 'fr': 'Tableau de bord', 'ar': 'لوحة التحكم' },
            'invoices': { 'fr': 'Factures', 'ar': 'الفواتير' },
            'clients': { 'fr': 'Clients', 'ar': 'العملاء' },
            'products': { 'fr': 'Produits', 'ar': 'المنتجات' },
            'employees': { 'fr': 'Employés', 'ar': 'الموظفون' },
            'settings': { 'fr': 'Paramètres', 'ar': 'الإعدادات' },
            'search': { 'fr': 'Rechercher...', 'ar': 'بحث...' },
            'new_invoice': { 'fr': 'Nouvelle Facture', 'ar': 'فاتورة جديدة' },
            'new_client': { 'fr': 'Nouveau Client', 'ar': 'عميل جديد' },
            'new_product': { 'fr': 'Nouveau Produit', 'ar': 'منتج جديد' },
            'new_employee': { 'fr': 'Nouvel Employé', 'ar': 'موظف جديد' },
            'save': { 'fr': 'Enregistrer', 'ar': 'حفظ' },
            'update': { 'fr': 'Mettre à jour', 'ar': 'تحديث' },
            'cancel': { 'fr': 'Annuler', 'ar': 'إلغاء' },
            'delete': { 'fr': 'Supprimer', 'ar': 'حذف' },
            'confirm': { 'fr': 'Confirmer', 'ar': 'تأكيد' },
            'edit': { 'fr': 'Modifier', 'ar': 'تعديل' },
            'generate': { 'fr': 'Générer', 'ar': 'إنشاء' },
            'edit_invoice': { 'fr': 'Modifier la facture', 'ar': 'تعديل الفاتورة' },
            'edit_client': { 'fr': 'Modifier le client', 'ar': 'تعديل العميل' },
            'edit_product': { 'fr': 'Modifier le produit', 'ar': 'تعديل المنتج' },
            'edit_employee': { 'fr': 'Modifier l\'employé', 'ar': 'تعديل الموظف' },
            'invoice_updated': { 'fr': 'Facture mise à jour avec succès !', 'ar': 'تم تحديث الفاتورة بنجاح!' },
            'invoice_created': { 'fr': 'Facture créée avec succès !', 'ar': 'تم إنشاء الفاتورة بنجاح!' },
            'invoice_deleted': { 'fr': 'Facture supprimée avec succès.', 'ar': 'تم حذف الفاتورة بنجاح.'},
            'invoice_error': { 'fr': 'Erreur lors de la gestion de la facture.', 'ar': 'حدث خطأ أثناء إدارة الفاتورة.' },
            'invoice_validation_error': { 'fr': 'Veuillez sélectionner un client et ajouter au moins un article.', 'ar': 'يرجى تحديد عميل وإضافة عنصر واحد على الأقل.' },
            'cannot_remove_last_item': { 'fr': 'Impossible de supprimer le dernier article.', 'ar': 'لا يمكن إزالة العنصر الأخير.' },
            'actions': { 'fr': 'Actions', 'ar': 'إجراءات' },
            'status': { 'fr': 'Statut', 'ar': 'الحالة' },
            'paid': { 'fr': 'Payée', 'ar': 'مدفوعة' },
            'pending': { 'fr': 'En attente', 'ar': 'في الانتظار' },
            'total': { 'fr': 'Total', 'ar': 'المجموع' },
            'total_ht': { 'fr': 'Total HT', 'ar': 'المجموع بدون ضريبة' },
            'vat': { 'fr': 'TVA', 'ar': 'الضريبة' },
            'total_ttc': { 'fr': 'Total TTC', 'ar': 'المجموع مع الضريبة' },
            
            // Tableau de bord
            'revenue': { 'fr': 'Chiffre d\'affaires', 'ar': 'الإيرادات' },
            'pending_invoices': { 'fr': 'Factures en attente', 'ar': 'الفواتير في الانتظار' },
            'active_clients': { 'fr': 'Clients actifs', 'ar': 'العملاء النشطون' },
            'recent_invoices': { 'fr': 'Factures récentes', 'ar': 'الفواتير الأخيرة' },
            
            // Factures
            'invoice_number': { 'fr': 'N° Facture', 'ar': 'رقم الفاتورة' },
            'client': { 'fr': 'Client', 'ar': 'العميل' },
            'date': { 'fr': 'Date', 'ar': 'التاريخ' },
            'amount': { 'fr': 'Montant', 'ar': 'المبلغ' },
            'view_invoice': { 'fr': 'Voir la facture', 'ar': 'عرض الفاتورة' },
            'download_invoice': { 'fr': 'Télécharger la facture', 'ar': 'تحميل الفاتورة' },
            'delete_invoice': { 'fr': 'Supprimer la facture', 'ar': 'حذف الفاتورة' },
            'delete_invoice_confirm': { 'fr': 'Êtes-vous sûr de vouloir supprimer cette facture ?', 'ar': 'هل أنت متأكد أنك تريد حذف هذه الفاتورة؟' },
            'select_client': { 'fr': 'Sélectionner un client', 'ar': 'اختر عميلاً' },
            'select_product': { 'fr': 'Sélectionner un produit', 'ar': 'اختر منتجاً' },
            'add_item': { 'fr': 'Ajouter un article', 'ar': 'إضافة عنصر' },
            'quantity': { 'fr': 'Quantité', 'ar': 'الكمية' },
            'description': { 'fr': 'Description', 'ar': 'الوصف' },
            'unit_price': { 'fr': 'Prix unitaire', 'ar': 'سعر الوحدة' },
            
            // Clients
            'name': { 'fr': 'Nom', 'ar': 'الاسم' },
            'email': { 'fr': 'Email', 'ar': 'البريد الإلكتروني' },
            'phone': { 'fr': 'Téléphone', 'ar': 'الهاتف' },
            'address': { 'fr': 'Adresse', 'ar': 'العنوان' },
            'delete_client_confirm': { 'fr': 'Êtes-vous sûr de vouloir supprimer ce client ?', 'ar': 'هل أنت متأكد من أنك تريد حذف هذا العميل؟' },
            'client_deleted': { 'fr': 'Client supprimé avec succès.', 'ar': 'تم حذف العميل بنجاح.'},
            'client_added': { 'fr': 'Client ajouté avec succès.', 'ar': 'تمت إضافة العميل بنجاح.' },
            'client_updated': { 'fr': 'Client mis à jour avec succès.', 'ar': 'تم تحديث العميل بنجاح.' },
            'client_name_required': { 'fr': 'Le nom du client est obligatoire.', 'ar': 'اسم العميل مطلوب.' },


            // Produits
            'price': { 'fr': 'Prix', 'ar': 'السعر' },
            'delete_product_confirm': { 'fr': 'Êtes-vous sûr de vouloir supprimer ce produit ?', 'ar': 'هل أنت متأكد من أنك تريد حذف هذا المنتج؟' },
            'product_deleted': { 'fr': 'Produit supprimé avec succès.', 'ar': 'تم حذف المنتج بنجاح.'},
            'product_added': { 'fr': 'Produit ajouté avec succès.', 'ar': 'تمت إضافة المنتج بنجاح.' },
            'product_updated': { 'fr': 'Produit mis à jour avec succès.', 'ar': 'تم تحديث المنتج بنجاح.' },
            'product_name_required': { 'fr': 'Le nom du produit est obligatoire.', 'ar': 'اسم المنتج مطلوب.' },
            'stock': { 'fr': 'Stock', 'ar': 'المخزون' },
            'manage_stock': { 'fr': 'Gérer le stock', 'ar': 'إدارة المخزون' },
            'product_name': { 'fr': 'Nom du produit', 'ar': 'اسم المنتج' },
            'current_stock': { 'fr': 'Stock actuel', 'ar': 'المخزون الحالي' },
            'stock_quantity_help': { 'fr': 'Entrez une valeur positive pour augmenter le stock ou négative pour le diminuer.', 'ar': 'أدخل قيمة إيجابية لزيادة المخزون أو سالبة لتقليله.' },
            'update_stock': { 'fr': 'Mettre à jour le stock', 'ar': 'تحديث المخزون' },
            'stock_updated': { 'fr': 'Stock mis à jour avec succès.', 'ar': 'تم تحديث المخزون بنجاح.' },
            'insufficient_stock': { 'fr': 'Stock insuffisant pour le produit :', 'ar': 'المخزون غير كافٍ للمنتج:' },

            // Employés
            'position': { 'fr': 'Poste', 'ar': 'المنصب' },
            'hire_date': { 'fr': 'Date d\'embauche', 'ar': 'تاريخ التوظيف' },
            'salary': { 'fr': 'Salaire', 'ar': 'الراتب' },
            'employee_deleted': { 'fr': 'Employé supprimé avec succès.', 'ar': 'تم حذف الموظف بنجاح.'},
            'employee_added': { 'fr': 'Employé ajouté avec succès.', 'ar': 'تمت إضافة الموظف بنجاح.' },
            'employee_updated': { 'fr': 'Employé mis à jour avec succès.', 'ar': 'تم تحديث الموظف بنجاح.' },
            'employee_name_required': { 'fr': 'Le nom de l\'employé est obligatoire.', 'ar': 'اسم الموظف مطلوب.' },
            'delete_employee_confirm': { 'fr': 'Êtes-vous sûr de vouloir supprimer cet employé ?', 'ar': 'هل أنت متأكد أنك تريد حذف هذا الموظف؟' },
            'generate_payslip': { 'fr': 'Générer fiche de paie', 'ar': 'إنشاء قسيمة راتب' },
            'generate_work_certificate': { 'fr': 'Attestation de travail', 'ar': 'شهادة عمل' },
            'generate_leave_certificate': { 'fr': 'Titre de congé', 'ar': 'شهادة إجازة' },
            'generate_discharge': { 'fr': 'Décharge de paiement', 'ar': 'إخلاء طرف مالي' },
            'discharge': { 'fr': 'DECHARGE', 'ar': 'إخلاء طرف' },
            'we_the_undersigned': { 'fr': 'Nous Soussignés', 'ar': 'نحن الموقعون أدناه' },
            'acting_as_employer': { 'fr': 'agissant en ma qualité employeur', 'ar': 'بصفتي صاحب العمل' },
            'declare_to_have_given': { 'fr': 'Déclare par la présente avoir remis à', 'ar': 'نصرح بموجب هذا أننا قمنا بتسليم' },
            'net_amount_of': { 'fr': 'La somme net de', 'ar': 'المبلغ الصافي لـ' },
            'representing_salary_for': { 'fr': 'Représentant son salaire pour la période de', 'ar': 'يمثل راتبه عن فترة' },
            'signature_of_both_parties': { 'fr': 'Signature des deux parties', 'ar': 'توقيع الطرفين' },
            'the_employer_signature': { 'fr': 'L\'employeur', 'ar': 'صاحب العمل' },
            'the_employee_signature': { 'fr': 'L\'employé(e)', 'ar': 'العامل(ة)' },
            'nss': { 'fr': 'N° SS', 'ar': 'رقم الضمان الاجتماعي' },
            'employee_birthdate': { 'fr': 'Date de naissance', 'ar': 'تاريخ الميلاد' },
            'employee_birthplace': { 'fr': 'Lieu de naissance', 'ar': 'مكان الميلاد' },
            'employee_address': { 'fr': 'Adresse de l\'employé', 'ar': 'عنوان الموظف' },

            // Paramètres
            'company_settings': { 'fr': 'Paramètres de l\'entreprise', 'ar': 'إعدادات الشركة' },
            'main_info': { 'fr': 'Informations principales', 'ar': 'المعلومات الأساسية' },
            'company_name': { 'fr': 'Nom de l\'entreprise', 'ar': 'اسم الشركة' },
            'manager_name': { 'fr': 'Nom du gérant', 'ar': 'اسم المدير' },
            'business_type': { 'fr': 'Type de commerce', 'ar': 'نوع التجارة' },
            'additional_info': { 'fr': 'Informations complémentaires', 'ar': 'معلومات إضافية' },
            'rc_number': { 'fr': 'RC N°', 'ar': 'رقم السجل التجاري' },
            'nif': { 'fr': 'NIF', 'ar': 'رقم التعريف الضريبي' },
            'art_number': { 'fr': 'ART N°', 'ar': 'رقم المادة' },
            'adherent_number': { 'fr': 'N° Adhérent', 'ar': 'رقم العضوية' },
            'billing_settings': { 'fr': 'Paramètres de facturation', 'ar': 'إعدادات الفوترة' },
            'currency': { 'fr': 'Devise', 'ar': 'العملة' },
            'language': { 'fr': 'Langue', 'ar': 'اللغة' },
            'save_settings': { 'fr': 'Enregistrer les modifications', 'ar': 'حفظ التغييرات' },
            'settings_saved': { 'fr': 'Paramètres sauvegardés avec succès !', 'ar': 'تم حفظ الإعدادات بنجاح!' },
            'language_changed': { 'fr': 'La langue a été modifiée. La page va être rechargée pour appliquer les changements.', 'ar': 'تم تغيير اللغة. سيتم إعادة تحميل الصفحة لتطبيق التغييرات.' },
            'data_management': { 'fr': 'Gestion des données', 'ar': 'إدارة البيانات' },
            'export_data': { 'fr': 'Exporter les données', 'ar': 'تصدير البيانات' },
            'import_data': { 'fr': 'Importer les données', 'ar': 'استيراد البيانات' },
            'import_data_help': { 'fr': 'Importez un fichier .xlsx. Attention, cela remplacera toutes les données existantes.', 'ar': 'استورد ملف .xlsx. تحذير: هذا سيستبدل جميع البيانات الحالية.' },
            'import_confirm_title': { 'fr': 'Confirmer l\'importation', 'ar': 'تأكيد الاستيراد' },
            'import_confirm_text': { 'fr': 'Êtes-vous sûr ? Toutes les données actuelles seront écrasées.', 'ar': 'هل أنت متأكد؟ سيتم الكتابة فوق جميع البيانات الحالية.' },
            'import_success': { 'fr': 'Données importées ! Rechargement...', 'ar': 'تم استيراد البيانات! إعادة التحميل...' },
            'import_error': { 'fr': 'Erreur d\'import. Vérifiez le format du fichier.', 'ar': 'خطأ في الاستيراد. تحقق من تنسيق الملف.' },
            'export_success': { 'fr': 'Données exportées avec succès !', 'ar': 'تم تصدير البيانات بنجاح!' },
            
            // Facture PDF
            'invoice': { 'fr': 'FACTURE', 'ar': 'فاتورة' },
            'billed_to': { 'fr': 'Facturé à:', 'ar': 'فاتورة إلى:' },
            'unknown_client': { 'fr': 'Client inconnu', 'ar': 'عميل غير معروف' },
            'thank_you': { 'fr': 'Merci de votre confiance !', 'ar': 'شكرا لثقتكم!' },
            'contact_us': { 'fr': 'Pour toute question concernant cette facture, veuillez nous contacter.', 'ar': 'لأي استفسار بخصوص هذه الفاتورة، يرجى الاتصال بنا.' },
            'invoice_items': { 'fr': 'Articles de la facture', 'ar': 'منتجات الفاتورة' },
            
            // Fiche de Paie
            'payslip': { 'fr': 'BULLETIN DE PAIE', 'ar': 'قسيمة الراتب' },
            'payslip_for_month': { 'fr': 'Fiche de paie pour', 'ar': 'قسيمة راتب لشهر' },
            'choose_period': { 'fr': 'Choisir la période', 'ar': 'اختر الفترة' },
            'month': { 'fr': 'Mois', 'ar': 'الشهر' },
            'year': { 'fr': 'Année', 'ar': 'السنة' },
            'matricule': { 'fr': 'Matricule', 'ar': 'الرقم التعريفي' },
            'family_situation': { 'fr': 'Sit. Familiale', 'ar': 'الحالة العائلية' },
            'affectation': { 'fr': 'Affectation', 'ar': 'التعيين' },
            'code': { 'fr': 'Code', 'ar': 'الرمز' },
            'label': { 'fr': 'Libellé', 'ar': 'البيان' },
            'base': { 'fr': 'Base', 'ar': 'الأساس' },
            'rate': { 'fr': 'Taux', 'ar': 'النسبة' },
            'gain': { 'fr': 'Gain', 'ar': 'الكسب' },
            'deduction': { 'fr': 'Retenue', 'ar': 'الخصم' },
            'net_to_pay': { 'fr': 'NET A PAYER', 'ar': 'صافي الدفع' },

            // Attestation de travail
            'work_certificate': { 'fr': 'ATTESTATION DE TRAVAIL', 'ar': 'شهادة عمل' },
            'the_manager': { 'fr': 'Le Gérant', 'ar': 'المدير' },

            // Titre de congé
            'leave_certificate': { 'fr': 'TITRE DE CONGÉ', 'ar': 'شهادة إجازة' },
            'leave_details': { 'fr': 'Détails du congé', 'ar': 'تفاصيل الإجازة' },
            'start_date': { 'fr': 'Date de début', 'ar': 'تاريخ البدء' },
            'duration_days': { 'fr': 'Durée (jours)', 'ar': 'المدة (أيام)' },
            'end_date': { 'fr': 'Date de fin', 'ar': 'تاريخ الانتهاء' },
            'return_date': { 'fr': 'Date de reprise', 'ar': 'تاريخ العودة' },
        };
    }
    
    static translate(key) {
        const settings = Storage.getSettings();
        const lang = settings.language || 'fr';
        if (this.translations[key] && this.translations[key][lang]) {
            return this.translations[key][lang];
        }
        return (this.translations[key] && this.translations[key]['fr']) || key;
    }
    
    static t(key) { return this.translate(key); }
    static getTextDirection() { return Storage.getSettings().language === 'ar' ? 'rtl' : 'ltr'; }
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

    static getAll() { return Storage.getClients(); }
    static getById(clientId) { return this.getAll().find(c => c.id === clientId); }
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

    static getAll() { return Storage.getProducts(); }
    static getById(productId) { return this.getAll().find(p => p.id === productId); }
    
    static updateStock(productId, quantity) {
        const products = this.getAll();
        const index = products.findIndex(p => p.id === productId);
        if (index !== -1) {
            products[index].stock = (products[index].stock || 0) + quantity;
            Storage.setProducts(products);
            return true;
        }
        return false;
    }
}

// Convertisseur de nombres en lettres
class NumberToLetter {
    constructor() {
        this.units = ["", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf"];
        this.teens = ["dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf"];
        this.tens = ["", "", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante-dix", "quatre-vingt", "quatre-vingt-dix"];
    }

    convertThreeDigits(n) {
        let str = "";
        let rem = n;

        if (rem >= 100) {
            const hundreds = Math.floor(rem / 100);
            str += (hundreds > 1 ? this.units[hundreds] + " " : "") + "cent";
            rem %= 100;
            if (rem > 0) str += (hundreds > 1 ? " " : " ");
        }

        if (rem > 0) {
            if (rem < 10) {
                str += this.units[rem];
            } else if (rem < 20) {
                str += this.teens[rem - 10];
            } else {
                const ten = Math.floor(rem / 10);
                const unit = rem % 10;
                str += this.tens[ten];
                if (unit > 0) {
                    if (unit === 1 && ten !== 8) str += " et " + this.units[unit];
                    else str += "-" + this.units[unit];
                }
            }
        }
        return str.trim();
    }

    convert(number) {
        if (number === 0) return "zéro";

        let words = "";
        let num = number;

        const billions = Math.floor(num / 1000000000);
        if (billions > 0) {
            words += this.convertThreeDigits(billions) + " milliard" + (billions > 1 ? "s" : "") + " ";
            num %= 1000000000;
        }

        const millions = Math.floor(num / 1000000);
        if (millions > 0) {
            words += this.convertThreeDigits(millions) + " million" + (millions > 1 ? "s" : "") + " ";
            num %= 1000000;
        }

        const thousands = Math.floor(num / 1000);
        if (thousands > 0) {
            words += (thousands === 1 ? "" : this.convertThreeDigits(thousands) + " ") + "mille ";
            num %= 1000;
        }

        if (num > 0) {
            words += this.convertThreeDigits(num);
        }

        return words.trim().replace(/\s+/g, ' ');
    }

    toCurrencyWords(number, currency = "dinars", cents = "cts") {
        if (typeof number !== 'number') return "";
        
        let integerPart = Math.floor(number);
        let decimalPart = Math.round((number - integerPart) * 100);
        
        let integerWords = this.convert(integerPart);
        integerWords = integerWords.charAt(0).toUpperCase() + integerWords.slice(1);
        
        let result = `${integerWords} ${currency}`;
        
        if (decimalPart > 0) {
            result += ` et ${decimalPart.toString().padStart(2, '0')} ${cents}`;
        }
        
        return result;
    }
}


// Gestion des employés
class Employee {
    constructor(id, name, position, hireDate, salary, nss = '', familySit = 'C', birthDate = '', birthPlace = '', address = '') {
        this.id = id;
        this.name = name;
        this.position = position;
        this.hireDate = hireDate;
        this.salary = salary;
        this.nss = nss;
        this.familySit = familySit;
        this.birthDate = birthDate;
        this.birthPlace = birthPlace;
        this.address = address;
    }

    static generateEmployeeId() {
        const employees = Storage.getEmployees();
        if (employees.length === 0) {
            return '001';
        }
        const maxId = Math.max(...employees.map(e => parseInt(e.id, 10) || 0));
        return (maxId + 1).toString().padStart(3, '0');
    }

    static getAll() { return Storage.getEmployees(); }
    
    static getById(employeeId) {
        const employeeData = this.getAll().find(e => e.id === employeeId);
        if (!employeeData) return null;

        // Reconstitute the object to have access to instance methods
        const employee = new Employee(
            employeeData.id,
            employeeData.name,
            employeeData.position,
            employeeData.hireDate,
            employeeData.salary,
            employeeData.nss,
            employeeData.familySit,
            employeeData.birthDate,
            employeeData.birthPlace,
            employeeData.address
        );
        return employee;
    }

    generatePayslipHTML(period) {
        const payslip = new Payslip(this, period);
        const settings = Storage.getSettings();

        // Format de nombre sans devise, avec séparateur de milliers
        const format = (amount) => (Number(amount) || 0).toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        const formatDate = (date) => date ? new Date(date).toLocaleDateString('fr-FR') : '';

        return `
            <!DOCTYPE html>
            <html lang="${settings.language}">
            <head>
                <meta charset="UTF-8">
                <title>${Translator.t('payslip')} - ${this.name} - ${period}</title>
                <style>
                    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background-color: #f9f9f9; color: #333; font-size: 10pt; }
                    .payslip-container { background-color: #fff; max-width: 210mm; min-height: 297mm; margin: auto; padding: 15mm; box-sizing: border-box; display: flex; flex-direction: column; }
                    .header { text-align: center; margin-bottom: 15px; }
                    .header h1 { font-size: 18pt; color: #1a237e; margin: 0; }
                    .header p { margin: 4px 0; font-size: 10pt; }
                    .payslip-title { background-color: #3949ab; color: white; padding: 8px 15px; margin: 15px -15mm; display: flex; justify-content: space-between; align-items: center; }
                    .payslip-title h2 { margin: 0; font-size: 14pt; text-transform: uppercase; }
                    .info-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px 15px; margin-bottom: 20px; font-size: 10pt; }
                    .info-item { display: flex; }
                    .info-label { font-weight: 600; color: #555; width: 110px; }
                    .info-value { border-bottom: 1px solid #eee; padding-bottom: 2px; flex-grow: 1; }
                    .payslip-table { width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 10pt; }
                    .payslip-table th, .payslip-table td { padding: 8px 10px; border-bottom: 1px solid #e0e0e0; }
                    .payslip-table thead { background-color: #f5f5f5; }
                    .payslip-table th { font-weight: 600; text-align: left; }
                    .payslip-table .align-right { text-align: right; }
                    .payslip-table .code-col { width: 8%; }
                    .payslip-table .label-col { width: 42%; }
                    .totals-section { margin-top: 20px; padding-top: 15px; margin-left: auto; width: 45%; }
                    .total-line { display: flex; justify-content: space-between; padding: 5px 10px; font-weight: 600; }
                    .total-line.grand-total { background-color: #3949ab; color: white; border-radius: 4px; margin-top: 8px; padding: 10px 12px; font-size: 12pt; }
                    @page { size: A4; margin: 0; }
                    @media print {
                        body { background-color: #fff; padding: 0; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
                        .payslip-container { box-shadow: none; border: none; margin: 0; max-width: 100%; border-radius: 0; padding: 15mm; min-height: 0; height: auto; }
                    }
                </style>
            </head>
            <body>
                <div class="payslip-container">
                    <div class="header">
                        <h1>${settings.name || 'Nom de l\'entreprise'}</h1>
                        <p>${settings.address || 'Adresse de l\'entreprise'}</p>
                        <p>${Translator.t('adherent_number')}: ${settings.adherent || 'N/A'}</p>
                    </div>

                    <div class="payslip-title">
                        <h2>${Translator.t('payslip')}</h2>
                        <span>${period}</span>
                    </div>

                    <div class="info-grid">
                        <div class="info-item"><span class="info-label">${Translator.t('matricule')}:</span><span class="info-value">${this.id}</span></div>
                        <div class="info-item"><span class="info-label">${Translator.t('name')}:</span><span class="info-value">${this.name}</span></div>
                        <div class="info-item"><span class="info-label">${Translator.t('position')}:</span><span class="info-value">${this.position}</span></div>
                        <div class="info-item"><span class="info-label">${Translator.t('family_situation')}:</span><span class="info-value">${this.familySit}</span></div>
                        <div class="info-item"><span class="info-label">${Translator.t('affectation')}:</span><span class="info-value">SIEGE SOCIAL</span></div>
                        <div class="info-item"><span class="info-label">${Translator.t('hire_date')}:</span><span class="info-value">${formatDate(this.hireDate)}</span></div>
                        <div class="info-item"><span class="info-label">${Translator.t('nss')}:</span><span class="info-value">${this.nss}</span></div>
                    </div>

                    <table class="payslip-table">
                        <thead>
                            <tr>
                                <th class="code-col">${Translator.t('code')}</th>
                                <th class="label-col">${Translator.t('label')}</th>
                                <th class="align-right">${Translator.t('base')}</th>
                                <th class="align-right">${Translator.t('rate')} (%)</th>
                                <th class="align-right">${Translator.t('gain')}</th>
                                <th class="align-right">${Translator.t('deduction')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${payslip.lines.map(line => `
                                <tr>
                                    <td>${line.code}</td>
                                    <td>${line.label}</td>
                                    <td class="align-right">${line.base ? format(line.base) : ''}</td>
                                    <td class="align-right">${line.rate ? line.rate.toFixed(2) : ''}</td>
                                    <td class="align-right">${line.gain ? format(line.gain) : ''}</td>
                                    <td class="align-right">${line.deduction ? format(line.deduction) : ''}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>

                    <div class="totals-section">
                        <div class="total-line">
                            <span>Total ${Translator.t('gain')}:</span>
                            <span>${format(payslip.total_gain)}</span>
                        </div>
                        <div class="total-line">
                            <span>Total ${Translator.t('deduction')}:</span>
                            <span>${format(payslip.total_deductions)}</span>
                        </div>
                        <div class="total-line grand-total">
                            <span>${Translator.t('net_to_pay')}:</span>
                            <span>${format(payslip.net_to_pay)}</span>
                        </div>
                    </div>

                </div>
            </body>
            </html>
        `;
    }

    generateWorkCertificateHTML() {
        const settings = Storage.getSettings();
        const formatDate = (date) => date ? new Date(date).toLocaleDateString('fr-FR') : '';
        const today = new Date().toLocaleDateString('fr-FR');
    
        return `
            <!DOCTYPE html>
            <html lang="fr">
            <head>
                <meta charset="UTF-8">
                <title>Attestation de Travail - ${this.name}</title>
                <style>
                    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; font-size: 11pt; background-color: #f9f9f9; margin: 0; padding: 0; }
                    .container { max-width: 210mm; min-height: 297mm; margin: auto; padding: 2cm; background-color: white; box-sizing: border-box; display: flex; flex-direction: column; }
                    .header { text-align: center; margin-bottom: 30px; }
                    .header p { margin: 2px 0; }
                    .header h3 { margin: 0 0 5px 0; font-size: 14pt; font-weight: bold; color: #2563eb; }
                    .title-certif { font-weight: bold; text-decoration: underline; text-underline-offset: 6px; margin-bottom: 40px; font-size: 16pt; text-align: center; }
                    .body-content { flex-grow: 1; }
                    .body-content p { margin-bottom: 20px; text-align: justify; }
                    .body-content strong { font-weight: 600; }
                    .signature-block { margin-top: 60px; text-align: right; }
                    .signature-location { margin-bottom: 40px; }
                    .signature-title { font-weight: bold; }
                    @page { size: A4; margin: 0; }
                    @media print {
                        body { background-color: #fff; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
                        .container { box-shadow: none; border: none; margin: 0 auto; max-width: 100%; border-radius: 0; padding: 2cm; min-height: 0; height: auto; }
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <header class="header">
                        <h3>${settings.name || 'Nom de l\'entreprise'}</h3>
                        <p>${settings.businessType || 'Type de commerce'}</p>
                        <p>${settings.address || 'Adresse'}</p>
                        <p>N° Adhérent: ${settings.adherent || 'N/A'}</p>
                    </header>
    
                    <h2 class="title-certif">ATTESTATION DE TRAVAIL</h2>
    
                    <div class="body-content">
                        <p>Nous soussignés, ${settings.managerName || '[Nom du Gérant]'}, Gérant de ${settings.name || '[Nom Entreprise]'}, Sise à : ${settings.address || '[Adresse Entreprise]'}.</p>
                        
                        <p>Attestons que : Mr/Mme <strong>${this.name}</strong>, né(e) le <strong>${formatDate(this.birthDate)}</strong> à <strong>${this.birthPlace || '[Lieu de naissance]'}</strong>.</p>
                        
                        <p>Demeurant à : <strong>${this.address || '[Adresse employé]'}</strong></p>
                        
                        <p>N° Sécurité sociale : <strong>${this.nss || '[NSS]'}</strong></p>
                        
                        <p>Est employé(e) au sein de notre entreprise depuis le <strong>${formatDate(this.hireDate)}</strong> à ce jour.</p>
                        
                        <p>En qualité de : <strong>${this.position || '[Poste]'}</strong></p>
                        
                        <p>La présente attestation lui est délivrée pour servir et valoir ce que de droit.</p>
                    </div>
                    
                    <div class="signature-block">
                        <p class="signature-location">Fait à ALGER, le ${today}</p>
                        <p class="signature-title">${Translator.t('the_manager')}</p>
                    </div>
                </div>
            </body>
            </html>
        `;
    }

    generateLeaveCertificateHTML(startDateStr, duration) {
        const settings = Storage.getSettings();
        const formatLongDate = (date) => new Date(date).toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' });
        const today = new Date();

        const startDate = new Date(startDateStr);
        const endDate = new Date(startDate);
        endDate.setDate(startDate.getDate() + duration - 1);
        const returnDate = new Date(endDate);
        returnDate.setDate(endDate.getDate() + 1);
        
        const startYear = startDate.getFullYear();
        const anneeCongé = `${startYear}/${startYear + 1}`;

        return `
            <!DOCTYPE html>
            <html lang="fr">
            <head>
                <meta charset="UTF-8">
                <title>Titre de Congé - ${this.name}</title>
                 <style>
                    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; font-size: 11pt; background-color: #f9f9f9; margin: 0; padding: 0; }
                    .container { max-width: 210mm; min-height: 297mm; margin: auto; padding: 2cm; background-color: white; box-sizing: border-box; display: flex; flex-direction: column; }
                    .header { text-align: center; margin-bottom: 20px; }
                    .header h3 { margin: 4px 0; font-weight: bold; color: #2563eb; }
                    .header p { margin: 4px 0; font-size: 10pt; color: #555; }
                    .header-info { display: flex; justify-content: space-between; font-weight: 500; margin-top: 15px; font-size: 10pt; padding: 10px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; }
                    .title-certif { font-weight: bold; text-decoration: underline; text-underline-offset: 8px; margin: 30px 0 10px 0; font-size: 18pt; text-align: center; }
                    .annee-conge { text-align: center; margin-bottom: 30px; font-size: 14pt; font-weight: bold; }
                    .content-section { flex-grow: 1; }
                    .person-block { margin-bottom: 15px; display: grid; grid-template-columns: 100px 1fr; gap: 5px; }
                    .person-block .label { font-weight: 600; }
                    .decision-block { text-align: center; margin: 30px 0; }
                    .decision-title { font-weight: bold; text-decoration: underline; text-underline-offset: 6px; font-size: 16pt; }
                    .conge-details { font-size: 12pt; margin: 20px 0; }
                    .date-details { display: flex; justify-content: space-around; font-weight: bold; font-size: 12pt; padding: 20px; background-color: #f8f9fa; border-radius: 8px; }
                    .footer { text-align: right; margin-top: 50px; }
                    .footer p { font-weight: 500; }
                    @page { size: A4; margin: 0; }
                    @media print {
                        body { background-color: #fff; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
                        .container { box-shadow: none; border: none; margin: 0 auto; max-width: 100%; border-radius: 0; padding: 2cm; min-height: 0; height: auto; }
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <header class="header">
                        <h3>${settings.name || 'Nom de l\'entreprise'}</h3>
                        <p>${settings.businessType || 'Type de commerce'}</p>
                        <p>${settings.address || 'Adresse'}</p>
                        <div class="header-info">
                            <span>N° Adhérent: ${settings.adherent || 'N/A'}</span>
                            <span>NIF N°: ${settings.nif || 'N/A'}</span>
                            <span>ART N°: ${settings.art || 'N/A'}</span>
                        </div>
                    </header>
                    
                    <h2 class="title-certif">TITRE DE CONGE</h2>
                    <p class="annee-conge">Année ${anneeCongé}</p>
                    
                    <div class="content-section">
                        <div class="person-block">
                            <span class="label">Mr:</span><span>${settings.managerName || '[Nom Gérant]'}</span>
                            <span class="label">Fonction:</span><span>GERANT</span>
                        </div>

                        <p style="margin: 20px 0;"><strong>Sur demande introduite par :</strong></p>

                        <div class="person-block">
                            <span class="label">Mr:</span><span>${this.name}</span>
                            <span class="label">Fonction:</span><span>${this.position}</span>
                        </div>
                        
                        <div class="decision-block">
                            <h3 class="decision-title">DECIDE</h3>
                        </div>

                        <p class="conge-details">Un congé annuel de détente d'une période de <strong>${duration}</strong> Jours.</p>

                        <div class="date-details">
                            <span>Date de sortie : ${formatLongDate(startDate)}</span>
                            <span>Date de reprise : ${formatLongDate(returnDate)}</span>
                        </div>
                    </div>

                    <div class="footer">
                        <p>Fait à Alger le ${formatLongDate(today)}</p>
                    </div>

                </div>
            </body>
            </html>
        `;
    }

    generateDischargeHTML(period) {
        const settings = Storage.getSettings();
        const payslip = new Payslip(this, period);
        const numberConverter = new NumberToLetter();

        const formatDate = (dateStr) => dateStr ? new Date(dateStr).toLocaleDateString('fr-FR') : '';
        const formatLongDate = (date) => new Date(date).toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' });
        const today = new Date();

        const netToPayInWords = numberConverter.toCurrencyWords(payslip.net_to_pay, 'dinars', 'Cts');
        const netToPayFormatted = (payslip.net_to_pay || 0).toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        
        return `
            <!DOCTYPE html>
            <html lang="fr">
            <head>
                <meta charset="UTF-8">
                <title>${Translator.t('discharge')} - ${this.name}</title>
                <style>
                    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.8; color: #333; font-size: 11pt; background-color: #f9f9f9; margin: 0; padding: 0; }
                    .container { max-width: 210mm; min-height: 297mm; margin: auto; padding: 2cm; background-color: white; box-sizing: border-box; display: flex; flex-direction: column; }
                    .header { text-align: center; margin-bottom: 40px; }
                    .header h2 { font-size: 14pt; margin: 0 0 5px 0; font-weight: bold; color: #2563eb; }
                    .header p { font-size: 10pt; margin: 4px 0; color: #555; }
                    .header .divider { border-bottom: 1px solid #ccc; margin-top: 15px; }
                    .title-certif { font-weight: bold; text-decoration: underline; text-underline-offset: 8px; margin: 40px 0; font-size: 18pt; text-align: center; }
                    .body-content { flex-grow: 1; }
                    .body-content p { margin-bottom: 20px; text-align: justify; }
                    .body-content strong { font-weight: 600; }
                    .amount-block {
                        border: 1px solid #eee;
                        padding: 15px;
                        margin: 25px 0;
                        border-radius: 8px;
                        background-color: #f8f9fa;
                    }
                    .signature-block { margin-top: 80px; display: flex; justify-content: space-between; font-weight: bold; }
                    .date-block { text-align: right; margin-top: 40px; }
                    @page { size: A4; margin: 0; }
                    @media print {
                        body { background-color: #fff; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
                        .container { box-shadow: none; border: none; margin: 0 auto; max-width: 100%; border-radius: 0; padding: 2cm; min-height: 0; height: auto; }
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <header class="header">
                        <h2>${settings.name || 'Nom de l\'entreprise'}</h2>
                        <p>${settings.businessType || 'Type de commerce'}</p>
                        <p>${settings.address || 'Adresse'}</p>
                        <div class="divider"></div>
                    </header>
    
                    <h2 class="title-certif">${Translator.t('discharge')}</h2>
    
                    <div class="body-content">
                        <p>${Translator.t('we_the_undersigned')}, <strong>${settings.managerName || '[Nom Gérant]'}</strong>, Gérant de <strong>${settings.name || '[Nom Entreprise]'}</strong>,
                        Sise au ${settings.address || '[Adresse Entreprise]'}, ${Translator.t('acting_as_employer')}.</p>
                        
                        <p>${Translator.t('declare_to_have_given')} Mr <strong>${this.name}</strong>, (Né le ${formatDate(this.birthDate)} à ${this.birthPlace || '[Lieu de naissance]'}, demeurant à ${this.address || '[Adresse Employé]'}), employé en qualité de <strong>${this.position.toUpperCase()}</strong>.</p>
                        
                        <div class="amount-block">
                            <p>${Translator.t('net_amount_of')} <strong>${netToPayFormatted} DA</strong>,</p>
                            <p><em>« ${netToPayInWords} »</em></p>
                            <p>${Translator.t('representing_salary_for')} <strong>${period}</strong>.</p>
                        </div>
                    </div>
                    
                    <div class="date-block">
                        Fait à Alger, le ${formatLongDate(today)}
                    </div>
                    
                    <div class="signature-block">
                        <span>${Translator.t('the_employer_signature')}:</span>
                        <span>${Translator.t('the_employee_signature')}:</span>
                    </div>
                </div>
            </body>
            </html>
        `;
    }
}


// Gestion des factures
class Invoice {
    constructor(clientId, items, date = new Date(), id = null) {
        this.id = id || Invoice.generateInvoiceNumber();
        this.clientId = clientId;
        this.items = items;
        this.date = date;
        this.status = 'pending';
        this.tvaRate = 0.19; // Taux de TVA à 19%
        this.updateTotals();
        this.currency = Storage.getSettings().currency;
    }
    
    updateTotals() {
        this.totalHT = this.calculateTotalHT();
        this.tva = this.calculateTVA();
        this.totalTTC = this.calculateTotalTTC();
    }

    static generateInvoiceNumber() {
        const currentYear = new Date().getFullYear();
        const invoices = Storage.getInvoices();
        const currentYearInvoices = invoices.filter(inv => inv.id.split('/')[1] === currentYear.toString());
        let lastNumber = 0;
        if (currentYearInvoices.length > 0) {
            lastNumber = Math.max(...currentYearInvoices.map(inv => parseInt(inv.id.split('/')[0]) || 0));
        }
        return `${(lastNumber + 1).toString().padStart(4, '0')}/${currentYear}`;
    }

    calculateTotalHT() { return this.items.reduce((total, item) => total + (item.quantity * item.price), 0); }
    calculateTVA() { return this.calculateTotalHT() * this.tvaRate; }
    calculateTotalTTC() { return this.calculateTotalHT() + this.calculateTVA(); }

    static formatAmount(amount, currency = Storage.getSettings().currency) {
        const validAmount = Number(amount) || 0;
        return `${validAmount.toFixed(2)} ${currency}`;
    }

    static add(invoice) {
        const invoices = Storage.getInvoices();
        invoices.push(invoice);
        Storage.setInvoices(invoices);
    }

    static getAll() { return Storage.getInvoices(); }
    
    static updateDashboardStats() {
        const dashboardView = document.querySelector('.dashboard');
        if (!dashboardView) return;

        const invoices = this.getAll();
        const totalRevenue = invoices.filter(inv => inv.status === 'paid').reduce((total, inv) => total + inv.totalTTC, 0);
        const pendingInvoices = invoices.filter(inv => inv.status === 'pending').length;
        const activeClients = new Set(invoices.map(inv => inv.clientId)).size;

        dashboardView.querySelector('.stat-card:nth-child(1) .amount').textContent = this.formatAmount(totalRevenue);
        dashboardView.querySelector('.stat-card:nth-child(2) .amount').textContent = pendingInvoices;
        dashboardView.querySelector('.stat-card:nth-child(3) .amount').textContent = activeClients;
    }

    static delete(invoiceId) {
        let invoices = this.getAll();
        const invoiceToDelete = invoices.find(inv => inv.id === invoiceId);
        if (invoiceToDelete) {
            // Restore stock
            invoiceToDelete.items.forEach(item => {
                Product.updateStock(item.productId, item.quantity); // Add back the quantity
            });
        }
        invoices = invoices.filter(inv => inv.id !== invoiceId);
        Storage.setInvoices(invoices);
        return true;
    }

    static getById(invoiceId) {
        const invoiceData = this.getAll().find(inv => inv.id === invoiceId);
        if (!invoiceData) return null;
        // Reconstitute the object to have access to instance methods
        const invoice = new Invoice(invoiceData.clientId, invoiceData.items, invoiceData.date, invoiceData.id);
        Object.assign(invoice, invoiceData);
        invoice.updateTotals();
        return invoice;
    }

    generateHTML() {
        const client = Client.getById(this.clientId);
        const settings = Storage.getSettings();
        const rtl = settings.language === 'ar';
        
        // Définir les symboles en fonction de la langue
        const symbolsSet = {
            colon: rtl ? ' :' : ': ',       // Deux points
            slash: rtl ? '/' : '/',         // Slash pour les dates
            comma: rtl ? '،' : ',',         // Virgule
            semicolon: rtl ? '؛' : ';',     // Point-virgule
            question: rtl ? '؟' : '?',      // Point d'interrogation
            exclamation: rtl ? '!' : '!'    // Point d'interrogation
        };
        
        const formatDate = (date) => new Date(date).toLocaleDateString('fr-FR');
        
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
                                <div class="info-value">${formatDate(this.date)}</div>
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
            </html>`;
    }
    
    save() {
        const invoices = Invoice.getAll();
        const index = invoices.findIndex(inv => inv.id === this.id);
        this.updateTotals();
        if (index !== -1) {
            invoices[index] = this;
        } else {
            invoices.push(this);
        }
        Storage.setInvoices(invoices);
    }
}


// Moteur de calcul de la paie algérienne
class Payslip {
    constructor(employee, period) {
        this.employee = employee;
        this.period = period;
        this.lines = [];
        this.calculate();
    }

    // Fonction de calcul de l'IRG selon le barème algérien (Loi de Finances 2022)
    calculateIRG(taxableIncome) {
        const annualIncome = taxableIncome * 12;
        let annualTax = 0;

        if (annualIncome <= 240000) {
            annualTax = 0;
        } else if (annualIncome > 240000 && annualIncome <= 480000) {
            annualTax = (annualIncome - 240000) * 0.23;
        } else if (annualIncome > 480000 && annualIncome <= 960000) {
            annualTax = 55200 + (annualIncome - 480000) * 0.27;
        } else if (annualIncome > 960000 && annualIncome <= 1920000) {
            annualTax = 184800 + (annualIncome - 960000) * 0.30;
        } else if (annualIncome > 1920000 && annualIncome <= 3840000) {
            annualTax = 472800 + (annualIncome - 1920000) * 0.33;
        } else if (annualIncome > 3840000) {
            annualTax = 1108800 + (annualIncome - 3840000) * 0.35;
        }

        let monthlyTax = annualTax / 12;

        // Abattement de 40% (plafonné entre 1000 et 1500 DA/mois)
        if (monthlyTax > 0) {
            let abatement = monthlyTax * 0.40;
            if (abatement < 1000) abatement = 1000;
            if (abatement > 1500) abatement = 1500;
            monthlyTax -= abatement;
        }
        
        return monthlyTax > 0 ? monthlyTax : 0;
    }

    calculate() {
        // Point 2: Utiliser le salaire de l'employé comme salaire de base
        const base_salary = parseFloat(this.employee.salary) || 0;

        // Gains (Exemples basés sur l'image)
        const prime_qualification = 6500.00; // Exemple
        const prime_responsabilite = 7000.00; // Exemple
        const indemnite_panier = 12000.00; // Exemple
        const indemnite_transport = 9900.00; // Exemple

        this.total_gain = base_salary + prime_qualification + prime_responsabilite + indemnite_panier + indemnite_transport;

        // Base cotisable (soumis à la sécurité sociale)
        const base_cotisable = base_salary + prime_qualification + prime_responsabilite;
        const taux_ss = 9.00;
        this.retenue_ss = base_cotisable * (taux_ss / 100);

        // Point 3: Base imposable (soumis à l'IRG) et calcul du taux effectif
        // La base imposable standard est la base cotisable moins la retenue SS.
        // Les indemnités de panier et transport sont ajoutées à la base imposable sur demande.
        const base_imposable = (base_cotisable + indemnite_panier + indemnite_transport) - this.retenue_ss;
        // On arrondit la base imposable à la dizaine inférieure pour le calcul de l'IRG
        const rounded_base_imposable = Math.floor(base_imposable / 10) * 10;
        this.retenue_irg = this.calculateIRG(rounded_base_imposable);
        
        this.total_deductions = this.retenue_ss + this.retenue_irg;
        this.net_to_pay = this.total_gain - this.total_deductions;

        // Point 4: Construction des lignes dans l'ordre demandé
        this.lines = [
            { code: 'R030', label: 'SALAIRE DE BASE', base: null, rate: null, gain: base_salary, deduction: null },
            { code: 'R330', label: 'PRIME DE QUALIFICATION', base: null, rate: null, gain: prime_qualification, deduction: null },
            { code: 'R340', label: 'PRIME DE RESPONSABILITE', base: null, rate: null, gain: prime_responsabilite, deduction: null },
            { code: 'R510', label: 'RETENUE SECU. SLE.', base: base_cotisable, rate: taux_ss, gain: null, deduction: this.retenue_ss },
            { code: 'R530', label: 'INDEMNITE DE PANIER', base: null, rate: null, gain: indemnite_panier, deduction: null },
            { code: 'R540', label: 'INDEMNITE DE TRANSPORT', base: null, rate: null, gain: indemnite_transport, deduction: null },
            { code: 'R660', label: 'RETENUE IRG', base: base_imposable, rate: 1.0, gain: null, deduction: this.retenue_irg },
        ];
    }
}


// Gestion des données (Import/Export)
class DataService {
    static exportToXLSX() {
        try {
            const clients = Storage.getClients();
            const products = Storage.getProducts();
            const invoices = Storage.getInvoices().map(inv => ({
                ...inv,
                items: JSON.stringify(inv.items) // Aplatir les articles pour l'export
            }));
            const employees = Storage.getEmployees();
            const settings = [Storage.getSettings()];

            const wb = XLSX.utils.book_new();
            const wsClients = XLSX.utils.json_to_sheet(clients);
            const wsProducts = XLSX.utils.json_to_sheet(products);
            const wsInvoices = XLSX.utils.json_to_sheet(invoices);
            const wsEmployees = XLSX.utils.json_to_sheet(employees);
            const wsSettings = XLSX.utils.json_to_sheet(settings);

            XLSX.utils.book_append_sheet(wb, wsClients, "Clients");
            XLSX.utils.book_append_sheet(wb, wsProducts, "Produits");
            XLSX.utils.book_append_sheet(wb, wsInvoices, "Factures");
            XLSX.utils.book_append_sheet(wb, wsEmployees, "Employes");
            XLSX.utils.book_append_sheet(wb, wsSettings, "Settings");

            const today = new Date().toISOString().slice(0, 10);
            XLSX.writeFile(wb, `FacturePro_Backup_${today}.xlsx`);

            UI.showToast(Translator.t('export_success'), 'success');
        } catch (error) {
            console.error("Export failed:", error);
            UI.showToast('Erreur lors de l\'exportation.', 'error');
        }
    }

    static importFromXLSX(file) {
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });

                const clients = XLSX.utils.sheet_to_json(workbook.Sheets['Clients'] || []);
                const products = XLSX.utils.sheet_to_json(workbook.Sheets['Produits'] || []);
                const employees = XLSX.utils.sheet_to_json(workbook.Sheets['Employes'] || []);
                const invoices = XLSX.utils.sheet_to_json(workbook.Sheets['Factures'] || []).map(inv => {
                    try {
                        inv.items = typeof inv.items === 'string' ? JSON.parse(inv.items) : [];
                    } catch {
                        inv.items = [];
                    }
                    return inv;
                });
                const settingsData = XLSX.utils.sheet_to_json(workbook.Sheets['Settings'] || []);
                
                if (!workbook.Sheets['Clients'] || !workbook.Sheets['Produits'] || !workbook.Sheets['Factures']) {
                    throw new Error("Invalid file format, missing sheets.");
                }

                UI.showConfirmationModal(
                    Translator.t('import_confirm_title'),
                    Translator.t('import_confirm_text'),
                    () => {
                        Storage.setClients(clients);
                        Storage.setProducts(products);
                        Storage.setInvoices(invoices);
                        Storage.setEmployees(employees);
                        if (settingsData.length > 0) {
                            Storage.setSettings(settingsData[0]);
                        }
                        UI.showToast(Translator.t('import_success'), 'info');
                        setTimeout(() => window.location.reload(), 2000);
                    }
                );

            } catch (error) {
                console.error("Import failed:", error);
                UI.showToast(Translator.t('import_error'), 'error');
            }
        };
        reader.readAsArrayBuffer(file);
    }
}


// Gestion de l'interface utilisateur
class UI {
    static init() {
        Router.init();
        this.initGlobalEventListeners();
    }

    static initGlobalEventListeners() {
        document.body.addEventListener('click', e => {
            if (!e.target.closest('.searchable-select-container')) {
                document.querySelectorAll('.select-dropdown.active').forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
            }
            if (e.target.classList.contains('modal') || e.target.classList.contains('close-modal')) {
                const modal = e.target.closest('.modal');
                if (modal) modal.classList.remove('active');
            }
        });
    }
    
    static showToast(message, type = 'info', duration = 4000) {
        const container = document.getElementById('toast-container');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        const iconMap = {
            success: 'fa-check-circle',
            error: 'fa-times-circle',
            warning: 'fa-exclamation-triangle',
            info: 'fa-info-circle'
        };
        toast.innerHTML = `<i class="fas ${iconMap[type]} toast-icon"></i><p>${message}</p>`;
        container.appendChild(toast);
        
        setTimeout(() => toast.classList.add('show'), 100);
        setTimeout(() => {
            toast.classList.remove('show');
            toast.addEventListener('transitionend', () => toast.remove());
        }, duration);
    }

    static showConfirmationModal(title, text, onConfirm) {
        const modal = document.getElementById('confirm-modal');
        if (!modal) return;

        modal.querySelector('#confirm-modal-title').textContent = title;
        modal.querySelector('#confirm-modal-text').textContent = text;
        
        const confirmBtn = document.getElementById('confirm-modal-confirm');
        const cancelBtn = document.getElementById('confirm-modal-cancel');
        const closeBtn = modal.querySelector('.close-modal');

        const newConfirmBtn = confirmBtn.cloneNode(true);
        confirmBtn.parentNode.replaceChild(newConfirmBtn, confirmBtn);
        
        const newCancelBtn = cancelBtn.cloneNode(true);
        cancelBtn.parentNode.replaceChild(newCancelBtn, cancelBtn);

        const closeModal = () => modal.classList.remove('active');

        newConfirmBtn.addEventListener('click', () => { onConfirm(); closeModal(); });
        newCancelBtn.addEventListener('click', closeModal);
        closeBtn.addEventListener('click', closeModal);

        modal.classList.add('active');
    }

    static openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
        }
    }

    static setupSearchableSelect(container, items, onSelect) {
        const searchInput = container.querySelector('.select-search');
        const dropdown = container.querySelector('.select-dropdown');
        const optionsList = container.querySelector('ul');
        const hiddenInput = container.querySelector('input[type="hidden"]');
        
        const populateOptions = (filteredItems) => {
            optionsList.innerHTML = '';
            if (filteredItems.length === 0) {
                optionsList.innerHTML = `<li class="no-results">Aucun résultat</li>`;
                return;
            }
            filteredItems.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item.name;
                li.dataset.id = item.id;
                if(item.price) li.dataset.price = item.price;
                optionsList.appendChild(li);
            });
        };
        
        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.toLowerCase();
            const filteredItems = items.filter(item => item.name.toLowerCase().includes(searchTerm));
            populateOptions(filteredItems);
            dropdown.classList.add('active');
        });

        searchInput.addEventListener('focus', () => {
            populateOptions(items);
            dropdown.classList.add('active');
        });

        optionsList.addEventListener('click', (e) => {
            const selectedLi = e.target.closest('li');
            if (selectedLi && !selectedLi.classList.contains('no-results')) {
                hiddenInput.value = selectedLi.dataset.id;
                searchInput.value = selectedLi.textContent;
                dropdown.classList.remove('active');
                if (onSelect) onSelect(selectedLi.dataset);
            }
        });
    }

    static initInvoiceForm(invoiceId = null) {
        const modal = document.getElementById('invoice-modal');
        const form = document.getElementById('invoice-form');
        form.reset();
        form.dataset.editId = '';
        
        document.getElementById('items-list').innerHTML = '';
        document.getElementById('invoice-total').textContent = Invoice.formatAmount(0);
        
        const modalTitle = modal.querySelector('.modal-header h2');
        const submitBtn = form.querySelector('button[type="submit"]');

        UI.setupSearchableSelect(form.querySelector('#client-select-container'), Client.getAll());
        
        const addItem = (itemData = {}) => {
            const itemsList = document.getElementById('items-list');
            const itemRow = document.createElement('div');
            itemRow.classList.add('item-row');
            itemRow.innerHTML = `
                <div class="searchable-select-container" style="flex-grow:1;">
                    <input type="text" class="select-search" placeholder="${Translator.t('select_product')}...">
                    <div class="select-dropdown"><ul></ul></div>
                    <input type="hidden" class="product-id">
                </div>
                <input type="number" class="quantity" min="1" value="1" required>
                <button type="button" class="remove-item">&times;</button>`;
            itemsList.appendChild(itemRow);
            
            const productSelectContainer = itemRow.querySelector('.searchable-select-container');
            UI.setupSearchableSelect(productSelectContainer, Product.getAll(), () => UI.updateInvoiceTotal());
            
            itemRow.querySelector('.quantity').addEventListener('input', () => UI.updateInvoiceTotal());
            itemRow.querySelector('.remove-item').addEventListener('click', () => {
                if (itemsList.children.length > 1) {
                    itemRow.remove();
                    UI.updateInvoiceTotal();
                } else {
                    UI.showToast(Translator.t('cannot_remove_last_item'), 'warning');
                }
            });

            if (itemData.productId) {
                const product = Product.getById(itemData.productId);
                if(product) {
                    itemRow.querySelector('.select-search').value = product.name;
                    itemRow.querySelector('.product-id').value = product.id;
                    itemRow.querySelector('.quantity').value = itemData.quantity;
                }
            }
        };

        if (invoiceId) {
            const invoice = Invoice.getById(invoiceId);
            if (!invoice) return; 
            
            form.dataset.editId = invoiceId;
            modalTitle.textContent = Translator.t('edit_invoice');
            submitBtn.textContent = Translator.t('update');

            const client = Client.getById(invoice.clientId);
            if (client) {
                form.querySelector('#client-search').value = client.name;
                form.querySelector('#client-select-value').value = client.id;
            }
            document.getElementById('invoice-date').value = new Date(invoice.date).toISOString().split('T')[0];
            invoice.items.forEach(item => addItem(item));
        } else {
            modalTitle.textContent = Translator.t('new_invoice');
            submitBtn.textContent = Translator.t('save');
            addItem();
            document.getElementById('invoice-date').value = new Date().toISOString().split('T')[0];
        }
        
        document.getElementById('add-item').onclick = () => addItem();
        UI.updateInvoiceTotal();
        this.openModal('invoice-modal');
    }

    static updateInvoiceTotal() {
        let total = 0;
        document.querySelectorAll('#items-list .item-row').forEach(row => {
            const productId = row.querySelector('.product-id').value;
            const quantity = parseFloat(row.querySelector('.quantity').value) || 0;
            const product = Product.getById(productId);
            if (product) {
                total += product.price * quantity;
            }
        });
        document.getElementById('invoice-total').textContent = Invoice.formatAmount(total);
    }
    
    static handleInvoiceSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const editId = form.dataset.editId;
        const clientId = form.querySelector('#client-select-value').value;
        const date = form.querySelector('#invoice-date').value;
        const newItems = [];

        let isValid = true;
        form.querySelectorAll('.item-row').forEach(row => {
            const productId = row.querySelector('.product-id').value;
            const product = Product.getById(productId);
            if(product) {
                newItems.push({
                    productId: productId,
                    name: product.name,
                    price: product.price,
                    quantity: parseInt(row.querySelector('.quantity').value)
                });
            } else {
                isValid = false;
            }
        });
        
        if (!clientId || newItems.length === 0 || !isValid) {
            UI.showToast(Translator.t('invoice_validation_error'), 'error');
            return;
        }

        // --- Stock Validation Logic ---
        const oldInvoice = editId ? Invoice.getById(editId) : null;
        const stockChanges = new Map();

        // Calculate deductions for new/updated items
        newItems.forEach(item => {
            stockChanges.set(item.productId, (stockChanges.get(item.productId) || 0) + item.quantity);
        });

        // If updating, calculate stock to be returned from old items
        if (oldInvoice) {
            oldInvoice.items.forEach(item => {
                stockChanges.set(item.productId, (stockChanges.get(item.productId) || 0) - item.quantity);
            });
        }
        
        // Check for sufficient stock
        for (const [productId, quantityChange] of stockChanges.entries()) {
            if (quantityChange <= 0) continue; // No deduction needed or stock is being returned
            const product = Product.getById(productId);
            const availableStock = product.stock || 0;
            if (availableStock < quantityChange) {
                UI.showToast(`${Translator.t('insufficient_stock')} ${product.name} (Requis: ${quantityChange}, Disponible: ${availableStock})`, 'error');
                return;
            }
        }
        // --- End Stock Validation ---

        if (editId) {
            const invoice = Invoice.getById(editId);
            invoice.clientId = clientId;
            invoice.items = newItems;
            invoice.date = new Date(date);
            invoice.save();
            UI.showToast(Translator.t('invoice_updated'), 'success');
        } else {
            const newInvoice = new Invoice(clientId, newItems, new Date(date));
            Invoice.add(newInvoice);
            UI.showToast(Translator.t('invoice_created'), 'success');
        }
        
        // Apply stock changes
        for (const [productId, quantityChange] of stockChanges.entries()) {
            if (quantityChange !== 0) {
                Product.updateStock(productId, -quantityChange);
            }
        }

        document.getElementById('invoice-modal').classList.remove('active');
        Router.handleRoute(); // Refresh current view
    }

    static initClientForm(clientId = null) {
        const modal = document.getElementById('client-modal');
        const form = document.getElementById('client-form');
        form.reset();
        form.querySelector('#client-id').value = '';

        const modalTitle = modal.querySelector('#client-modal-title');
        const submitBtn = form.querySelector('button[type="submit"]');

        if (clientId) {
            const client = Client.getById(clientId);
            if(client) {
                modalTitle.textContent = Translator.t('edit_client');
                submitBtn.textContent = Translator.t('update');
                form.querySelector('#client-id').value = client.id;
                form.querySelector('#client-name').value = client.name;
                form.querySelector('#client-email').value = client.email;
                form.querySelector('#client-phone').value = client.phone;
                form.querySelector('#client-address').value = client.address;
            }
        } else {
            modalTitle.textContent = Translator.t('new_client');
            submitBtn.textContent = Translator.t('save');
        }
        this.openModal('client-modal');
    }

    static handleClientSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const clientId = form.querySelector('#client-id').value;
        const name = form.querySelector('#client-name').value;
        const email = form.querySelector('#client-email').value;
        const phone = form.querySelector('#client-phone').value;
        const address = form.querySelector('#client-address').value;

        if (!name) {
            UI.showToast(Translator.t('client_name_required'), 'error');
            return;
        }

        const clients = Client.getAll();
        if (clientId) {
            const clientIndex = clients.findIndex(c => c.id === clientId);
            if (clientIndex !== -1) {
                clients[clientIndex].name = name;
                clients[clientIndex].email = email;
                clients[clientIndex].phone = phone;
                clients[clientIndex].address = address;
                UI.showToast(Translator.t('client_updated'), 'success');
            }
        } else {
            const newClient = new Client(name, email, address, phone);
            clients.push(newClient);
            UI.showToast(Translator.t('client_added'), 'success');
        }

        Storage.setClients(clients);
        document.getElementById('client-modal').classList.remove('active');
        Router.handleRoute();
    }

    static initProductForm(productId = null) {
        const modal = document.getElementById('product-modal');
        const form = document.getElementById('product-form');
        form.reset();
        form.querySelector('#product-id').value = '';

        const modalTitle = modal.querySelector('#product-modal-title');
        const submitBtn = form.querySelector('button[type="submit"]');
        const stockInput = form.querySelector('#product-stock');

        if (productId) {
            const product = Product.getById(productId);
            if (product) {
                modalTitle.textContent = Translator.t('edit_product');
                submitBtn.textContent = Translator.t('update');
                form.querySelector('#product-id').value = product.id;
                form.querySelector('#product-name').value = product.name;
                form.querySelector('#product-price').value = product.price;
                form.querySelector('#product-description').value = product.description;
                stockInput.value = product.stock;
                stockInput.disabled = true; // Stock is managed separately
            }
        } else {
            modalTitle.textContent = Translator.t('new_product');
            submitBtn.textContent = Translator.t('save');
            stockInput.value = 0;
            stockInput.disabled = false;
        }
        this.openModal('product-modal');
    }

    static handleProductSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const productId = form.querySelector('#product-id').value;
        const name = form.querySelector('#product-name').value;
        const price = parseFloat(form.querySelector('#product-price').value);
        const description = form.querySelector('#product-description').value;

        if (!name) {
            UI.showToast(Translator.t('product_name_required'), 'error');
            return;
        }

        const products = Product.getAll();
        if (productId) {
            const productIndex = products.findIndex(p => p.id === productId);
            if (productIndex !== -1) {
                products[productIndex].name = name;
                products[productIndex].price = price;
                products[productIndex].description = description;
                UI.showToast(Translator.t('product_updated'), 'success');
            }
        } else {
            const stock = parseInt(form.querySelector('#product-stock').value) || 0;
            const newProduct = new Product(name, price, description, stock);
            products.push(newProduct);
            UI.showToast(Translator.t('product_added'), 'success');
        }

        Storage.setProducts(products);
        document.getElementById('product-modal').classList.remove('active');
        Router.handleRoute();
    }
    
    static initStockForm(productId) {
        const product = Product.getById(productId);
        if (!product) return;
        const modal = document.getElementById('stock-modal');
        const form = document.getElementById('stock-form');
        form.reset();
        
        form.querySelector('#stock-product-id').value = productId;
        modal.querySelector('#stock-product-name').textContent = product.name;
        modal.querySelector('#stock-current-quantity').textContent = `${Translator.t('current_stock')}: ${product.stock}`;
        this.openModal('stock-modal');
    }
    
    static handleStockSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const productId = form.querySelector('#stock-product-id').value;
        const quantityChange = parseInt(form.querySelector('#stock-quantity-change').value);

        if (isNaN(quantityChange)) return;

        if (Product.updateStock(productId, quantityChange)) {
            UI.showToast(Translator.t('stock_updated'), 'success');
        }
        document.getElementById('stock-modal').classList.remove('active');
        Router.handleRoute();
    }
    
    static initEmployeeForm(employeeId = null) {
        const modal = document.getElementById('employee-modal');
        const form = document.getElementById('employee-form');
        form.reset();
        form.querySelector('#employee-id').value = '';

        const modalTitle = modal.querySelector('#employee-modal-title');
        const submitBtn = form.querySelector('button[type="submit"]');

        if (employeeId) {
            const employee = Employee.getById(employeeId);
            if(employee) {
                modalTitle.textContent = Translator.t('edit_employee');
                submitBtn.textContent = Translator.t('update');
                form.querySelector('#employee-id').value = employee.id;
                form.querySelector('#employee-name').value = employee.name;
                form.querySelector('#employee-position').value = employee.position;
                form.querySelector('#employee-hire-date').value = employee.hireDate;
                form.querySelector('#employee-salary').value = employee.salary;
                form.querySelector('#employee-nss').value = employee.nss;
                form.querySelector('#employee-matricule').value = employee.id;
                form.querySelector('#employee-family-sit').value = employee.familySit;
                form.querySelector('#employee-birth-date').value = employee.birthDate;
                form.querySelector('#employee-birth-place').value = employee.birthPlace;
                form.querySelector('#employee-address').value = employee.address;
            }
        } else {
            modalTitle.textContent = Translator.t('new_employee');
            submitBtn.textContent = Translator.t('save');
            form.querySelector('#employee-matricule').value = Employee.generateEmployeeId();
        }
        this.openModal('employee-modal');
    }

    static handleEmployeeSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const originalId = form.querySelector('#employee-id').value;
        const matricule = form.querySelector('#employee-matricule').value;
        const name = form.querySelector('#employee-name').value;
        const position = form.querySelector('#employee-position').value;
        const hireDate = form.querySelector('#employee-hire-date').value;
        const salary = parseFloat(form.querySelector('#employee-salary').value) || 0;
        const nss = form.querySelector('#employee-nss').value;
        const familySit = form.querySelector('#employee-family-sit').value;
        const birthDate = form.querySelector('#employee-birth-date').value;
        const birthPlace = form.querySelector('#employee-birth-place').value;
        const address = form.querySelector('#employee-address').value;

        if (!name || !matricule) {
            UI.showToast('Le nom et le matricule sont obligatoires.', 'error');
            return;
        }

        const employees = Storage.getEmployees();
        if (originalId) {
            const index = employees.findIndex(emp => emp.id === originalId);
            if (index !== -1) {
                if (employees.some(emp => emp.id === matricule && emp.id !== originalId)) {
                    UI.showToast('Ce matricule est déjà utilisé par un autre employé.', 'error');
                    return;
                }
                employees[index].id = matricule;
                employees[index].name = name;
                employees[index].position = position;
                employees[index].hireDate = hireDate;
                employees[index].salary = salary;
                employees[index].nss = nss;
                employees[index].familySit = familySit;
                employees[index].birthDate = birthDate;
                employees[index].birthPlace = birthPlace;
                employees[index].address = address;
                
                Storage.setEmployees(employees);
                UI.showToast(Translator.t('employee_updated'), 'success');
            }
        } else {
            if (employees.some(emp => emp.id === matricule)) {
                UI.showToast('Ce matricule est déjà utilisé.', 'error');
                return;
            }
            const newEmployee = new Employee(matricule, name, position, hireDate, salary, nss, familySit, birthDate, birthPlace, address);
            employees.push(newEmployee);
            Storage.setEmployees(employees);
            UI.showToast(Translator.t('employee_added'), 'success');
        }

        document.getElementById('employee-modal').classList.remove('active');
        Router.handleRoute();
    }

    static initPayslipPeriodModal(employeeId) {
        const modal = document.getElementById('payslip-period-modal');
        if (!modal) return;
        const form = document.getElementById('payslip-period-form');
        form.reset();
    
        document.getElementById('payslip-employee-id').value = employeeId;
    
        const today = new Date();
        document.getElementById('payslip-month').value = today.getMonth();
        document.getElementById('payslip-year').value = today.getFullYear();
    
        this.openModal('payslip-period-modal');
    }

    static handlePayslipPeriodSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const employeeId = document.getElementById('payslip-employee-id').value;
        const monthIndex = document.getElementById('payslip-month').value;
        const year = document.getElementById('payslip-year').value;
    
        if (!employeeId || !monthIndex || !year) return;
    
        const employee = Employee.getById(employeeId);
        if (!employee) return;
    
        const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
        const period = `${monthNames[parseInt(monthIndex)]} ${year}`;
        
        const html = employee.generatePayslipHTML(period);
        const win = window.open('', '_blank');
        win.document.write(html);
        win.document.close();
    
        document.getElementById('payslip-period-modal').classList.remove('active');
    }

    static initLeavePeriodModal(employeeId) {
        const modal = document.getElementById('leave-period-modal');
        if (!modal) return;
        const form = document.getElementById('leave-period-form');
        form.reset();
        document.getElementById('leave-employee-id').value = employeeId;
        document.getElementById('leave-start-date').valueAsDate = new Date();
        this.openModal('leave-period-modal');
    }

    static handleLeavePeriodSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const employeeId = form.querySelector('#leave-employee-id').value;
        const startDate = form.querySelector('#leave-start-date').value;
        const duration = parseInt(form.querySelector('#leave-duration').value);

        if (!employeeId || !startDate || isNaN(duration) || duration <= 0) {
            UI.showToast('Veuillez remplir tous les champs correctement.', 'error');
            return;
        }

        const employee = Employee.getById(employeeId);
        if (!employee) return;

        const html = employee.generateLeaveCertificateHTML(startDate, duration);
        const win = window.open('', '_blank');
        win.document.write(html);
        win.document.close();

        document.getElementById('leave-period-modal').classList.remove('active');
    }

    static initDischargePeriodModal(employeeId) {
        const modal = document.getElementById('discharge-period-modal');
        if (!modal) return;
        const form = document.getElementById('discharge-period-form');
        form.reset();
    
        document.getElementById('discharge-employee-id').value = employeeId;
    
        const today = new Date();
        document.getElementById('discharge-month').value = today.getMonth();
        document.getElementById('discharge-year').value = today.getFullYear();
    
        this.openModal('discharge-period-modal');
    }
    
    static handleDischargePeriodSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const employeeId = document.getElementById('discharge-employee-id').value;
        const monthIndex = document.getElementById('discharge-month').value;
        const year = document.getElementById('discharge-year').value;
    
        if (!employeeId || !monthIndex || !year) return;
    
        const employee = Employee.getById(employeeId);
        if (!employee) return;
    
        const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
        const period = `${monthNames[parseInt(monthIndex)]} ${year}`;
        
        const html = employee.generateDischargeHTML(period);
        const win = window.open('', '_blank');
        win.document.write(html);
        win.document.close();
    
        document.getElementById('discharge-period-modal').classList.remove('active');
    }

    static updateList(tbodyId, items, rowGenerator, actionsInitializer) {
        const tbody = document.getElementById(tbodyId);
        if (!tbody) return;
        tbody.innerHTML = '';
        items.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = rowGenerator(item);
            tbody.appendChild(row);
        });
        if (actionsInitializer) actionsInitializer();
    }
    
    static initInvoiceActions() {
        document.querySelectorAll('#invoices-list .action-btn').forEach(btn => {
            btn.onclick = (e) => {
                const id = e.currentTarget.dataset.id;
                const invoice = Invoice.getById(id);
                if (!invoice) return;
                if (btn.classList.contains('edit-btn')) UI.initInvoiceForm(id);
                if (btn.classList.contains('view-btn')) {
                    const win = window.open('', '_blank');
                    win.document.write(invoice.generateHTML());
                    win.document.close();
                }
                if (btn.classList.contains('download-btn')) {
                    html2pdf().from(invoice.generateHTML()).save(`facture-${id.replace('/', '-')}.pdf`);
                }
                if (btn.classList.contains('delete-btn')) {
                    UI.showConfirmationModal(
                        Translator.t('delete_invoice'),
                        Translator.t('delete_invoice_confirm'),
                        () => {
                            Invoice.delete(id);
                            UI.showToast(Translator.t('invoice_deleted'), 'success');
                            Router.handleRoute();
                        }
                    );
                }
            };
        });
        document.querySelectorAll('#invoices-list .status-badge.clickable').forEach(badge => {
            badge.onclick = (e) => {
                const id = e.currentTarget.dataset.invoiceId;
                const invoice = Invoice.getById(id);
                if (!invoice) return;
                invoice.status = invoice.status === 'paid' ? 'pending' : 'paid';
                invoice.save();
                Router.handleRoute();
            };
        });
    }

    static initClientActions() {
        document.querySelectorAll('#clients-list .action-btn').forEach(btn => {
             btn.onclick = (e) => {
                 const id = e.currentTarget.dataset.id;
                 if (btn.classList.contains('edit-btn')) {
                     UI.initClientForm(id);
                 }
                 if (btn.classList.contains('delete-btn')) {
                     UI.showConfirmationModal(
                        Translator.t('delete'),
                        Translator.t('delete_client_confirm'),
                        () => {
                            let clients = Client.getAll().filter(c => c.id !== id);
                            Storage.setClients(clients);
                            UI.showToast(Translator.t('client_deleted'), 'success');
                            Router.handleRoute();
                        }
                     );
                 }
            };
        });
    }

    static initProductActions() {
        document.querySelectorAll('#products-list .action-btn').forEach(btn => {
            btn.onclick = (e) => {
                const id = e.currentTarget.dataset.id;
                if (btn.classList.contains('edit-btn')) {
                    UI.initProductForm(id);
                }
                if (btn.classList.contains('stock-btn')) {
                    UI.initStockForm(id);
                }
                if (btn.classList.contains('delete-btn')) {
                    UI.showConfirmationModal(
                        Translator.t('delete'),
                        Translator.t('delete_product_confirm'),
                        () => {
                            let products = Product.getAll().filter(p => p.id !== id);
                            Storage.setProducts(products);
                            UI.showToast(Translator.t('product_deleted'), 'success');
                            Router.handleRoute();
                        }
                    );
                }
            };
        });
    }

    static initEmployeeActions() {
        document.querySelectorAll('#employees-list .action-btn').forEach(btn => {
            btn.onclick = (e) => {
                const id = e.currentTarget.dataset.id;
                const employee = Employee.getById(id);
                if (!employee) return;

                if (btn.classList.contains('edit-btn')) {
                    UI.initEmployeeForm(id);
                } else if (btn.classList.contains('generate-payslip-btn')) {
                    UI.initPayslipPeriodModal(id);
                } else if (btn.classList.contains('generate-work-cert-btn')) {
                    const html = employee.generateWorkCertificateHTML();
                    const win = window.open('', '_blank');
                    win.document.write(html);
                    win.document.close();
                } else if (btn.classList.contains('generate-leave-cert-btn')) {
                    UI.initLeavePeriodModal(id);
                } else if (btn.classList.contains('generate-discharge-btn')) {
                    UI.initDischargePeriodModal(id);
                }
                else if (btn.classList.contains('delete-btn')) {
                    UI.showConfirmationModal(
                       Translator.t('delete'),
                       Translator.t('delete_employee_confirm'),
                       () => {
                           let employees = Employee.getAll().filter(emp => emp.id !== id);
                           Storage.setEmployees(employees);
                           UI.showToast(Translator.t('employee_deleted'), 'success');
                           Router.handleRoute();
                       }
                    );
                }
           };
        });
    }

    static initSettingsForm() {
        const form = document.getElementById('settings-form');
        if (!form) return;
        const settings = Storage.getSettings();
        Object.keys(settings).forEach(key => {
            const input = document.getElementById(`company-${key.toLowerCase().replace(/_/g, '-')}`);
            if (input) input.value = settings[key];
        });
        
        form.onsubmit = (e) => {
            e.preventDefault();
            const previousLanguage = Storage.getSettings().language || 'fr';
            const newSettings = {
                name: document.getElementById('company-name').value,
                managerName: document.getElementById('company-managername').value,
                businessType: document.getElementById('company-businesstype').value,
                address: document.getElementById('company-address').value,
                phone: document.getElementById('company-phone').value,
                email: document.getElementById('company-email').value,
                currency: document.getElementById('company-currency').value,
                rc: document.getElementById('company-rc').value,
                nif: document.getElementById('company-nif').value,
                art: document.getElementById('company-art').value,
                adherent: document.getElementById('company-adherent').value,
                language: document.getElementById('company-language').value,
            };
            Storage.setSettings(newSettings);
            UI.showToast(Translator.t('settings_saved'), 'success');
            if (previousLanguage !== newSettings.language) {
                UI.showToast(Translator.t('language_changed'), 'info');
                setTimeout(() => window.location.reload(), 2000);
            } else {
                Router.handleRoute();
            }
        };

        document.getElementById('export-data-btn')?.addEventListener('click', DataService.exportToXLSX);
    
        const importInput = document.getElementById('import-data-input');
        importInput?.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                DataService.importFromXLSX(file);
            }
            e.target.value = null; // Réinitialiser pour permettre de ré-uploader le même fichier
        });
    }
}

// Gestion du routage
class Router {
    static init() {
        window.addEventListener('hashchange', this.handleRoute.bind(this));
        document.querySelectorAll('.menu a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.hash = link.getAttribute('href');
            });
        });
        this.handleRoute();
    }

    static handleRoute() {
        const route = (window.location.hash || '#dashboard').substring(1);
        document.querySelectorAll('.menu li').forEach(item => item.classList.remove('active'));
        const activeLink = document.querySelector(`.menu a[href="#${route}"]`);
        if(activeLink) activeLink.parentElement.classList.add('active');

        this.loadView(route);
    }

    static loadView(route) {
        const mainContent = document.querySelector('.main-content');
        mainContent.innerHTML = this.getView(route);
        this.postRender(route);
    }

    static postRender(route) {
        let items, rowGenerator, tbodyId, actionsInitializer;
        switch (route) {
            case 'dashboard':
                Invoice.updateDashboardStats();
                items = Invoice.getAll().slice(-5).reverse();
                rowGenerator = this.invoiceRow;
                tbodyId = 'invoices-list';
                actionsInitializer = UI.initInvoiceActions;
                break;
            case 'invoices':
                items = Invoice.getAll().reverse();
                rowGenerator = this.invoiceRow;
                tbodyId = 'invoices-list';
                actionsInitializer = UI.initInvoiceActions;
                break;
            case 'clients':
                items = Client.getAll();
                rowGenerator = this.clientRow;
                tbodyId = 'clients-list';
                actionsInitializer = UI.initClientActions;
                break;
            case 'products':
                items = Product.getAll();
                rowGenerator = this.productRow;
                tbodyId = 'products-list';
                actionsInitializer = UI.initProductActions;
                break;
            case 'employees':
                items = Employee.getAll();
                rowGenerator = this.employeeRow;
                tbodyId = 'employees-list';
                actionsInitializer = UI.initEmployeeActions;
                break;
            case 'settings':
                UI.initSettingsForm();
                break;
        }

        if(tbodyId) UI.updateList(tbodyId, items, rowGenerator, actionsInitializer);
        
        document.querySelector('.new-invoice-btn')?.addEventListener('click', () => UI.initInvoiceForm());
        document.querySelector('.new-client-btn')?.addEventListener('click', () => UI.initClientForm());
        document.querySelector('.new-product-btn')?.addEventListener('click', () => UI.initProductForm());
        document.querySelector('.new-employee-btn')?.addEventListener('click', () => UI.initEmployeeForm());
        
        document.getElementById('invoice-form')?.addEventListener('submit', UI.handleInvoiceSubmit);
        document.getElementById('client-form')?.addEventListener('submit', UI.handleClientSubmit);
        document.getElementById('product-form')?.addEventListener('submit', UI.handleProductSubmit);
        document.getElementById('stock-form')?.addEventListener('submit', UI.handleStockSubmit);
        document.getElementById('employee-form')?.addEventListener('submit', UI.handleEmployeeSubmit);
        document.getElementById('payslip-period-form')?.addEventListener('submit', UI.handlePayslipPeriodSubmit);
        document.getElementById('leave-period-form')?.addEventListener('submit', UI.handleLeavePeriodSubmit);
        document.getElementById('discharge-period-form')?.addEventListener('submit', UI.handleDischargePeriodSubmit);
        
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const searchTerm = e.target.value.toLowerCase();
                this.handleSearch(route, searchTerm);
            });
        }
    }
    
    static handleSearch(route, searchTerm) {
        let allItems, filteredItems, rowGenerator, tbodyId, actionsInitializer;
        
        if (route === 'dashboard' || route === 'invoices') {
            allItems = Invoice.getAll().reverse();
            filteredItems = allItems.filter(inv => {
                const client = Client.getById(inv.clientId);
                return inv.id.toLowerCase().includes(searchTerm) || 
                       (client && client.name.toLowerCase().includes(searchTerm));
            });
            if (route === 'dashboard') {
                 filteredItems = filteredItems.slice(0, 5);
            }
            rowGenerator = this.invoiceRow;
            tbodyId = 'invoices-list';
            actionsInitializer = UI.initInvoiceActions;
        } else if (route === 'clients') {
            allItems = Client.getAll();
            filteredItems = allItems.filter(c => c.name.toLowerCase().includes(searchTerm) || c.email.toLowerCase().includes(searchTerm));
            rowGenerator = this.clientRow;
            tbodyId = 'clients-list';
            actionsInitializer = UI.initClientActions;
        } else if (route === 'products') {
            allItems = Product.getAll();
            filteredItems = allItems.filter(p => p.name.toLowerCase().includes(searchTerm) || (p.description && p.description.toLowerCase().includes(searchTerm)));
            rowGenerator = this.productRow;
            tbodyId = 'products-list';
            actionsInitializer = UI.initProductActions;
        } else if (route === 'employees') {
            allItems = Employee.getAll();
            filteredItems = allItems.filter(e => e.name.toLowerCase().includes(searchTerm) || e.position.toLowerCase().includes(searchTerm));
            rowGenerator = this.employeeRow;
            tbodyId = 'employees-list';
            actionsInitializer = UI.initEmployeeActions;
        }

        if(filteredItems) {
            UI.updateList(tbodyId, filteredItems, rowGenerator, actionsInitializer);
        }
    }
    
    static invoiceRow(invoice) {
        const client = Client.getById(invoice.clientId);
        const formatDate = (date) => new Date(date).toLocaleDateString('fr-FR');
        return `
            <td>${invoice.id}</td>
            <td>${client ? client.name : Translator.t('unknown_client')}</td>
            <td>${formatDate(invoice.date)}</td>
            <td>${Invoice.formatAmount(invoice.totalTTC, invoice.currency)}</td>
            <td><span class="status-badge ${invoice.status} clickable" data-invoice-id="${invoice.id}">${Translator.t(invoice.status)}</span></td>
            <td>
                <button class="action-btn edit-btn" data-id="${invoice.id}" title="${Translator.t('edit')}"><i class="fas fa-edit"></i></button>
                <button class="action-btn view-btn" data-id="${invoice.id}" title="${Translator.t('view_invoice')}"><i class="fas fa-file-alt"></i></button>
                <button class="action-btn download-btn" data-id="${invoice.id}" title="${Translator.t('download_invoice')}"><i class="fas fa-download"></i></button>
                <button class="action-btn delete-btn" data-id="${invoice.id}" title="${Translator.t('delete_invoice')}"><i class="fas fa-trash-alt"></i></button>
            </td>`;
    }

    static clientRow(client) {
        return `
            <td>${client.name}</td>
            <td>${client.email}</td>
            <td>${client.phone}</td>
            <td>${client.address}</td>
            <td>
                <button class="action-btn edit-btn" data-id="${client.id}" title="${Translator.t('edit')}"><i class="fas fa-pen"></i></button>
                <button class="action-btn delete-btn" data-id="${client.id}" title="${Translator.t('delete')}"><i class="fas fa-trash-alt"></i></button>
            </td>`;
    }

    static productRow(product) {
        return `
            <td>${product.name}</td>
            <td>${Invoice.formatAmount(product.price)}</td>
            <td>${product.description}</td>
            <td>${product.stock || 0}</td>
            <td>
                <button class="action-btn edit-btn" data-id="${product.id}" title="${Translator.t('edit')}"><i class="fas fa-pen"></i></button>
                <button class="action-btn stock-btn" data-id="${product.id}" title="${Translator.t('manage_stock')}"><i class="fas fa-boxes"></i></button>
                <button class="action-btn delete-btn" data-id="${product.id}" title="${Translator.t('delete')}"><i class="fas fa-trash-alt"></i></button>
            </td>`;
    }

    static employeeRow(employee) {
        const formatDate = (date) => new Date(date).toLocaleDateString('fr-FR');
        return `
            <td>${employee.id.slice(-5)}</td>
            <td>${employee.name}</td>
            <td>${employee.position}</td>
            <td>${formatDate(employee.hireDate)}</td>
            <td>${Invoice.formatAmount(employee.salary)}</td>
            <td>
                <button class="action-btn edit-btn" data-id="${employee.id}" title="${Translator.t('edit')}"><i class="fas fa-pen"></i></button>
                <button class="action-btn generate-payslip-btn" data-id="${employee.id}" title="${Translator.t('generate_payslip')}"><i class="fas fa-file-invoice-dollar"></i></button>
                <button class="action-btn generate-work-cert-btn" data-id="${employee.id}" title="${Translator.t('generate_work_certificate')}"><i class="fas fa-file-signature"></i></button>
                <button class="action-btn generate-leave-cert-btn" data-id="${employee.id}" title="${Translator.t('generate_leave_certificate')}"><i class="fas fa-calendar-alt"></i></button>
                <button class="action-btn generate-discharge-btn" data-id="${employee.id}" title="${Translator.t('generate_discharge')}"><i class="fas fa-handshake"></i></button>
                <button class="action-btn delete-btn" data-id="${employee.id}" title="${Translator.t('delete')}"><i class="fas fa-trash-alt"></i></button>
            </td>`;
    }

    static getView(route) {
        const T = Translator.t.bind(Translator);
        const rtl = Translator.getTextDirection() === 'rtl' ? 'rtl' : '';
        const header = (title, buttonType, showSearch = false) => `
            <header class="top-bar ${rtl}">
                <h1>${T(title)}</h1>
                <div class="top-bar-controls">
                    ${showSearch ? `<div class="search-bar"><i class="fas fa-search"></i><input type="text" id="search-input" placeholder="${T('search')}"></div>` : ''}
                    ${buttonType ? `<button class="new-${buttonType}-btn"><i class="fas fa-plus"></i> ${T('new_' + buttonType)}</button>` : ''}
                </div>
            </header>`;
        
        const table = (id, headers) => `
            <div class="table-wrapper">
                <div class="table-container">
                    <table>
                        <thead><tr>${headers.map(h => `<th>${T(h)}</th>`).join('')}</tr></thead>
                        <tbody id="${id}-list"></tbody>
                    </table>
                </div>
            </div>`;
        
        switch (route) {
            case 'dashboard': return `
                <header class="top-bar ${rtl}">
                    <h1>${T('dashboard')}</h1>
                    <div class="top-bar-controls">
                        <div class="search-bar"><i class="fas fa-search"></i><input type="text" id="search-input" placeholder="${T('search')}"></div>
                        <button class="new-invoice-btn"><i class="fas fa-plus"></i> ${T('new_invoice')}</button>
                    </div>
                </header>
                <div class="dashboard ${rtl}">
                    <div class="stats-container">
                        ${['revenue', 'pending_invoices', 'active_clients'].map(stat => `
                        <div class="stat-card">
                            <div class="stat-info">
                                <h3>${T(stat)}</h3>
                                <p class="amount">0</p>
                            </div>
                        </div>`).join('')}
                    </div>
                    <div class="recent-invoices">
                        <h2>${T('recent_invoices')}</h2>
                        ${table('invoices', ['invoice_number', 'client', 'date', 'amount', 'status', 'actions'])}
                    </div>
                </div>`;
            case 'invoices': return `${header('invoices', 'invoice', true)}${table('invoices', ['invoice_number', 'client', 'date', 'amount', 'status', 'actions'])}`;
            case 'clients': return `${header('clients', 'client', true)}${table('clients', ['name', 'email', 'phone', 'address', 'actions'])}`;
            case 'products': return `${header('products', 'product', true)}${table('products', ['name', 'price', 'description', 'stock', 'actions'])}`;
            case 'employees': return `${header('employees', 'employee', true)}${table('employees', ['matricule', 'name', 'position', 'hire_date', 'salary', 'actions'])}`;
            case 'settings': return `
                ${header('settings')}
                <div class="settings-container table-wrapper ${rtl}">
                    <form id="settings-form" class="settings-form">
                        <h2>${T('main_info')}</h2>
                        <div class="form-group"><label for="company-name">${T('company_name')}</label><input type="text" id="company-name"></div>
                        <div class="form-group"><label for="company-managername">${T('manager_name')}</label><input type="text" id="company-managername"></div>
                        <div class="form-group"><label for="company-businesstype">${T('business_type')}</label><input type="text" id="company-businesstype"></div>
                        <div class="form-group"><label for="company-phone">${T('phone')}</label><input type="tel" id="company-phone"></div>
                        <div class="form-group"><label for="company-email">${T('email')}</label><input type="email" id="company-email"></div>
                        <div class="form-group"><label for="company-address">${T('address')}</label><textarea id="company-address"></textarea></div>
                        <h2>${T('additional_info')}</h2>
                        <div class="form-group"><label for="company-rc">${T('rc_number')}</label><input type="text" id="company-rc"></div>
                        <div class="form-group"><label for="company-nif">${T('nif')}</label><input type="text" id="company-nif"></div>
                        <div class="form-group"><label for="company-art">${T('art_number')}</label><input type="text" id="company-art"></div>
                        <div class="form-group"><label for="company-adherent">${T('adherent_number')}</label><input type="text" id="company-adherent"></div>
                        <h2>${T('billing_settings')}</h2>
                        <div class="form-group"><label for="company-currency">${T('currency')}</label><select id="company-currency"><option value="DZD">DZD</option><option value="EUR">EUR</option></select></div>
                        <div class="form-group"><label for="company-language">${T('language')}</label><select id="company-language"><option value="fr">Français</option><option value="ar">العربية</option></select></div>
                        <button type="submit" class="save-btn">${T('save_settings')}</button>
                    </form>
                    <div class="settings-form data-management-section">
                        <h2>${T('data_management')}</h2>
                        <div class="form-group">
                            <button type="button" id="export-data-btn" class="save-btn" style="background-color: #64748b;">${T('export_data')}</button>
                        </div>
                        <div class="form-group">
                            <label for="import-data-input" class="import-btn-label">${T('import_data')}</label>
                            <input type="file" id="import-data-input" accept=".xlsx, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" style="display: none;">
                            <p class="form-help-text">${T('import_data_help')}</p>
                        </div>
                    </div>
                </div>`;
            default: return `<h1>Page non trouvée</h1>`;
        }
    }
}

// Initialisation de l'application
document.addEventListener('DOMContentLoaded', () => {
    // Ajout de données de test si nécessaire
    if (Client.getAll().length === 0) {
        const clients = [
            new Client('Client Test', 'test@example.com', '123 Rue Test', '0123456789'),
            new Client('Société Alpha', 'contact@alpha.com', '45 Avenue Principale', '0987654321')
        ];
        Storage.setClients(clients);
    }
    if (Product.getAll().length === 0) {
        const products = [
            new Product('Produit Test A', 99.99, 'Description du produit test A', 50),
            new Product('Service de Conseil', 250, 'Heure de consultation', 1000),
            new Product('Matériel B', 12.50, '', 200)
        ];
        Storage.setProducts(products);
    }
    if (Employee.getAll().length === 0) {
        const employees = [
            new Employee('001', 'John Doe', 'Développeur', '2023-01-15', 50000, '1234567890', 'C', '1990-05-20', 'Paris', '1 Rue de la Paix'),
            new Employee('002', 'Jane Smith', 'Designer', '2022-05-20', 45000, '0987654321', 'M', '1992-11-10', 'Lyon', '2 Avenue des Peupliers')
        ];
        Storage.setEmployees(employees);
    }
    UI.init();
});

    
