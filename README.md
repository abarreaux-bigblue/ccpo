# CCPO - Adaptation au changement climatique 

Une application web inspirée de "Plus fraîche ma ville" pour explorer les solutions locales d'adaptation au changement climatique.

## Fonctionnalités

- Interface moderne inspirée du design gouvernemental français
- Grille de solutions avec filtres interactifs
- Design responsive
- Navigation intuitive
- Système de filtrage par type d'espace, type de solution et baisse de température

## Installation

1. Installer les dépendances :
```bash
npm install
```

2. Lancer le serveur de développement :
```bash
npm run dev
```

3. Ouvrir http://localhost:3000 dans votre navigateur

## Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Construit l'application pour la production
- `npm run preview` - Prévisualise la version de production

## Structure du projet

```
ccpo/
├── index.html          # Page principale
├── package.json        # Configuration npm
├── vite.config.js      # Configuration Vite
├── src/
│   ├── main.js         # Logique principale de l'application
│   └── style.css       # Styles CSS
└── README.md           # Documentation
```

## Technologies utilisées

- Vite (build tool)
- HTML5
- CSS3 (Grid, Flexbox)
- JavaScript (ES6+)
