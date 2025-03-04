# Application de Facturation

Une application web moderne et intuitive pour la gestion de factures, clients et produits.

## Fonctionnalités

- 📊 Tableau de bord avec statistiques en temps réel
- 📄 Création et gestion de factures
- 👥 Gestion des clients
- 📦 Gestion des produits
- 💰 Suivi des paiements
- 📱 Interface responsive pour une utilisation sur tous les appareils
- 🎨 Design moderne et personnalisable
- 💾 Stockage local des données pour une utilisation hors ligne

## Installation

1. Clonez ce dépôt
2. Ouvrez le fichier `index.html` dans votre navigateur

Aucune installation supplémentaire n'est nécessaire car l'application fonctionne entièrement côté client.

## Personnalisation

### Couleurs

Vous pouvez personnaliser les couleurs de l'application en modifiant les variables CSS dans le fichier `styles.css` :

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --background-color: #f1f5f9;
    --sidebar-color: #ffffff;
    --text-color: #1e293b;
    --border-color: #e2e8f0;
    --success-color: #22c55e;
    --warning-color: #eab308;
    --danger-color: #ef4444;
}
```

## Utilisation

### Création d'une facture

1. Cliquez sur le bouton "Nouvelle Facture"
2. Sélectionnez un client
3. Ajoutez des articles à la facture
4. Définissez les quantités
5. Cliquez sur "Enregistrer la facture"

### Gestion des clients

- Les clients peuvent être ajoutés avec leurs informations de contact
- Chaque client est automatiquement lié à ses factures

### Gestion des produits

- Ajoutez des produits avec leur prix et description
- Les produits peuvent être sélectionnés lors de la création de factures

## Stockage des données

L'application utilise le stockage local (localStorage) du navigateur pour sauvegarder :
- Les clients
- Les produits
- Les factures

⚠️ Note : Les données sont stockées localement dans votre navigateur. Pour une utilisation en production, il est recommandé d'implémenter un backend avec une base de données.

## Technologies utilisées

- HTML5
- CSS3 (avec variables CSS pour la personnalisation)
- JavaScript (ES6+)
- Font Awesome pour les icônes
- LocalStorage pour le stockage des données

## Licence

MIT 
