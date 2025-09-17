import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="app">
    <!-- Header -->
    <header class="header">
      <div class="header-top">
        <div class="container">
          <div class="header-content">
            <div class="logo-section">
              <div class="french-flag">
                <div class="flag-stripe blue"></div>
                <div class="flag-stripe white"></div>
                <div class="flag-stripe red"></div>
              </div>
              <span class="republic-text">République Française</span>
            </div>
            <div class="header-title">
              <h1>CCPO - Plus fraîche ma ville</h1>
            </div>
          </div>
        </div>
      </div>
      <nav class="main-nav">
        <div class="container">
          <div class="nav-content">
            <div class="nav-logo">CCPO</div>
            <ul class="nav-menu">
              <li class="nav-item">
                <a href="#" class="nav-link">Comprendre</a>
                <ul class="nav-dropdown">
                  <li><a href="#">La ville dans une France à +4°C</a></li>
                  <li><a href="#">Comprendre les notions clés</a></li>
                  <li><a href="#">Connaître la sensibilité actuelle et future</a></li>
                  <li><a href="#">Explorer toutes les solutions</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">Passer à l'action</a>
                <ul class="nav-dropdown">
                  <li><a href="#">Faire un diagnostic</a></li>
                  <li><a href="#">Trouver une solution adaptée</a></li>
                  <li><a href="#">Créer un projet de A à Z</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">S'inspirer</a>
                <ul class="nav-dropdown">
                  <li><a href="#">Diagnostics réalisés</a></li>
                  <li><a href="#">Projets réalisés</a></li>
                </ul>
              </li>
              <li class="nav-item"><a href="#" class="nav-link">Webinaires</a></li>
              <li class="nav-item"><a href="#" class="nav-link">Nous contacter</a></li>
              <li class="nav-item"><a href="#" class="nav-link project-space">Mon Espace Projet</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="main-content">
      <div class="container">
        <div class="page-header">
          <h1>Explorer toutes les solutions de rafraîchissement urbain</h1>
        </div>

        <!-- Filters -->
        <div class="filters-section">
          <div class="filter-group">
            <h3>Tous espaces</h3>
            <div class="filter-options">
              <button class="filter-btn active" data-space="all">Tous espaces</button>
              <button class="filter-btn" data-space="rond-point">Rond point</button>
              <button class="filter-btn" data-space="batiment">Bâtiment</button>
              <button class="filter-btn" data-space="parking">Parking</button>
              <button class="filter-btn" data-space="rue">Rue</button>
              <button class="filter-btn" data-space="place">Place</button>
              <button class="filter-btn" data-space="cour-ecole">Cour d'école</button>
              <button class="filter-btn" data-space="espaces-verts">Espaces verts</button>
            </div>
          </div>

          <div class="filter-group">
            <h3>Types de solution</h3>
            <div class="filter-options">
              <button class="filter-btn" data-type="verte">Solution verte</button>
              <button class="filter-btn" data-type="bleue">Solution bleue</button>
              <button class="filter-btn" data-type="grise">Solution grise</button>
              <button class="filter-btn" data-type="douce">Solution douce</button>
            </div>
          </div>

          <div class="filter-group">
            <h3>Baisse de la température</h3>
            <div class="filter-options">
              <button class="filter-btn" data-temp="faible">Faible (&lt; 1°C)</button>
              <button class="filter-btn" data-temp="moyenne">Moyenne (Entre 1 et 3°C)</button>
              <button class="filter-btn" data-temp="forte">Forte (&gt;= 3°C)</button>
            </div>
          </div>
        </div>

        <!-- Solutions Grid -->
        <div class="solutions-grid" id="solutions-grid">
          <!-- Solutions will be dynamically generated here -->
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>CCPO - Plus fraîche ma ville</h3>
            <p>Notre mission : aider les collectivités dans le choix de solutions de rafraîchissement urbain pérennes et durables.</p>
          </div>
          <div class="footer-section">
            <h4>Nos partenaires</h4>
            <ul>
              <li>Association des maires de France (AMF)</li>
              <li>Agence nationale de l'urbanisme (ANRU)</li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Liens utiles</h4>
            <ul>
              <li><a href="#">Accessibilité : non conforme</a></li>
              <li><a href="#">Mentions légales</a></li>
              <li><a href="#">Politique de confidentialité</a></li>
              <li><a href="#">Plan du site</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>Sauf mention explicite de propriété intellectuelle détenue par des tiers, les contenus de ce site sont proposés sous licence etalab-2.0</p>
        </div>
      </div>
    </footer>
  </div>
`

// Solutions data
const solutions = [
  {
    id: 1,
    title: "Adaptation des bâtiments - école",
    type: "grise",
    description: "Améliore le confort thermique grâce à l'isolation, l'ombrage et la ventilation",
    temperature: "moyenne",
    tempValue: "-2,3°C",
    tempType: "intérieure",
    duration: "de 3 à 6 mois",
    cost: "de 150 à 500 € HT / m²",
    spaces: ["batiment", "cour-ecole"]
  },
  {
    id: 2,
    title: "Réseaux de froid",
    type: "grise",
    description: "Mutualise la production de froid et valorise les ressources énergétiques locales",
    temperature: "faible",
    tempValue: "Baisse de l'ICU",
    tempType: "",
    duration: "de 6 à 24 mois",
    cost: "de 150 à 200 € HT / MWh",
    spaces: ["batiment"]
  },
  {
    id: 3,
    title: "Désimperméabilisation",
    type: "bleue",
    description: "Favorise le cycle de l'eau et contribue à réduire le phénomène d'ICU",
    temperature: "moyenne",
    tempValue: "-2,5°C",
    tempType: "de l'air",
    duration: "de 6 à 12 mois",
    cost: "de 60 à 150 € HT / m²",
    spaces: ["rue", "place", "parking"]
  },
  {
    id: 4,
    title: "Géocooling",
    type: "grise",
    description: "Utilise la fraîcheur du sol pour la diffuser dans les bâtiments",
    temperature: "forte",
    tempValue: "-4°C",
    tempType: "intérieure",
    duration: "de 6 à 12 mois",
    cost: "de 100 à 125 € HT / MWh",
    spaces: ["batiment"]
  },
  {
    id: 5,
    title: "Arbres et végétaux dans la cour d'école",
    type: "verte",
    description: "Fait de l'ombre et rafraîchit l'air par évapotranspiration",
    temperature: "forte",
    tempValue: "-4°C",
    tempType: "de l'air",
    duration: "de 0 à 1 mois",
    cost: "de 30 à 60 € HT / m²",
    spaces: ["cour-ecole", "espaces-verts"]
  },
  {
    id: 6,
    title: "Structure d'ombrage en façade",
    type: "grise",
    description: "Limite l'exposition à la chaleur et améliore le confort thermique à l'intérieur",
    temperature: "forte",
    tempValue: "-3,5°C",
    tempType: "intérieure",
    duration: "de 0 à 1 mois",
    cost: "de 250 à 900 € HT / m²",
    spaces: ["batiment"]
  },
  {
    id: 7,
    title: "Façade végétalisée",
    type: "verte",
    description: "Contribue à isoler les bâtiments et permet de lutter contre le phénomène d'ICU",
    temperature: "forte",
    tempValue: "-4°C",
    tempType: "de l'air",
    duration: "de 3 à 6 mois",
    cost: "de 10 à 700 € HT / m²",
    spaces: ["batiment"]
  },
  {
    id: 8,
    title: "Fontaines et réseaux de fontainerie",
    type: "bleue",
    description: "Offre un accès visuel et auditif à l'eau et une sensation indirecte de fraîcheur",
    temperature: "faible",
    tempValue: "-1°C",
    tempType: "de l'air",
    duration: "de 3 à 6 mois",
    cost: "de 500 à 2 500 € HT / m²",
    spaces: ["place", "rue", "espaces-verts"]
  },
  {
    id: 9,
    title: "Jardin suspendu sur dalle",
    type: "verte",
    description: "Rafraîchit l'air et végétalise un espace déconnecté du sol",
    temperature: "faible",
    tempValue: "-1°C",
    tempType: "de l'air",
    duration: "de 6 à 12 mois",
    cost: "de 100 à 1 600 € HT / m²",
    spaces: ["batiment", "espaces-verts"]
  },
  {
    id: 10,
    title: "Isolation thermique",
    type: "grise",
    description: "Conserve une bonne température à l'intérieur des bâtiments",
    temperature: "moyenne",
    tempValue: "-2,3°C",
    tempType: "intérieure",
    duration: "de 0 à 3 mois",
    cost: "de 120 à 270 € HT / m²",
    spaces: ["batiment"]
  },
  {
    id: 11,
    title: "Jardins potagers, vergers dans la cour d'école",
    type: "verte",
    description: "Rafraîchit l'air par l'évapotranspiration et la création d'ombrage",
    temperature: "faible",
    tempValue: "-0,3°C",
    tempType: "de l'air",
    duration: "de 0 à 1 mois",
    cost: "de 100 à 150 € HT / m²",
    spaces: ["cour-ecole", "espaces-verts"]
  },
  {
    id: 12,
    title: "Jeux d'eau",
    type: "bleue",
    description: "Offre une sensation directe de fraîcheur et crée du lien social",
    temperature: "moyenne",
    tempValue: "-1,5°C",
    tempType: "de l'air",
    duration: "de 1 à 3 mois",
    cost: "de 400 à 2 000 € HT / m²",
    spaces: ["cour-ecole", "place", "espaces-verts"]
  }
]

// Filter functionality
let currentFilters = {
  space: 'all',
  type: 'all',
  temperature: 'all'
}

function renderSolutions() {
  const grid = document.getElementById('solutions-grid')
  const filteredSolutions = solutions.filter(solution => {
    const spaceMatch = currentFilters.space === 'all' || solution.spaces.includes(currentFilters.space)
    const typeMatch = currentFilters.type === 'all' || solution.type === currentFilters.type
    const tempMatch = currentFilters.temperature === 'all' || solution.temperature === currentFilters.temperature
    
    return spaceMatch && typeMatch && tempMatch
  })

  grid.innerHTML = filteredSolutions.map(solution => `
    <div class="solution-card" data-type="${solution.type}">
      <div class="solution-header">
        <span class="solution-type ${solution.type}">Solution ${solution.type}</span>
        <h3 class="solution-title">${solution.title}</h3>
      </div>
      <p class="solution-description">${solution.description}</p>
      <div class="solution-stats">
        <div class="stat">
          <span class="stat-label">Baisse ${solution.tempType ? solution.tempType : ''} de la température</span>
          <span class="stat-value temp-${solution.temperature}">${solution.tempValue}</span>
        </div>
        <div class="stat">
          <span class="stat-label">Délai des travaux</span>
          <span class="stat-value">${solution.duration}</span>
        </div>
        <div class="stat">
          <span class="stat-label">Coût</span>
          <span class="stat-value">${solution.cost}</span>
        </div>
      </div>
    </div>
  `).join('')
}

// Event listeners for filters
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('filter-btn')) {
    // Remove active class from all buttons in the same group
    const group = e.target.closest('.filter-group')
    group.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'))
    e.target.classList.add('active')

    // Update filters
    if (e.target.dataset.space) {
      currentFilters.space = e.target.dataset.space
    }
    if (e.target.dataset.type) {
      currentFilters.type = e.target.dataset.type
    }
    if (e.target.dataset.temp) {
      currentFilters.temperature = e.target.dataset.temp
    }

    renderSolutions()
  }
})

// Initialize
renderSolutions()
