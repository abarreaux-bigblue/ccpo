import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-content">
            <div className="logo-section">
              <div className="french-flag">
                <div className="flag-stripe blue"></div>
                <div className="flag-stripe white"></div>
                <div className="flag-stripe red"></div>
              </div>
              <span className="republic-text">République Française</span>
            </div>
            <div className="header-title">
              <h1>CCPO - Plus fraîche ma ville</h1>
            </div>
          </div>
        </div>
      </div>
      <nav className="main-nav">
        <div className="container">
          <div className="nav-content">
            <div className="nav-logo">CCPO</div>
            <ul className="nav-menu">
              <li className="nav-item">
                <a href="#" className="nav-link">Comprendre</a>
                <ul className="nav-dropdown">
                  <li><a href="#">La ville dans une France à +4°C</a></li>
                  <li><a href="#">Comprendre les notions clés</a></li>
                  <li><a href="#">Connaître la sensibilité actuelle et future</a></li>
                  <li><a href="#">Explorer toutes les solutions</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Passer à l'action</a>
                <ul className="nav-dropdown">
                  <li><a href="#">Faire un diagnostic</a></li>
                  <li><a href="#">Trouver une solution adaptée</a></li>
                  <li><a href="#">Créer un projet de A à Z</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">S'inspirer</a>
                <ul className="nav-dropdown">
                  <li><a href="#">Diagnostics réalisés</a></li>
                  <li><a href="#">Projets réalisés</a></li>
                </ul>
              </li>
              <li className="nav-item"><a href="#" className="nav-link">Webinaires</a></li>
              <li className="nav-item"><a href="#" className="nav-link">Nous contacter</a></li>
              <li className="nav-item"><a href="#" className="nav-link project-space">Mon Espace Projet</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
