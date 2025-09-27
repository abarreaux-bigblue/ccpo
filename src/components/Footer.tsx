import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>CCPO - Plus fraîche ma ville</h3>
            <p>Notre mission : aider les collectivités dans le choix de solutions de rafraîchissement urbain pérennes et durables.</p>
          </div>
          <div className="footer-section">
            <h4>Nos partenaires</h4>
            <ul>
              <li>Association des maires de France (AMF)</li>
              <li>Agence nationale de l'urbanisme (ANRU)</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Liens utiles</h4>
            <ul>
              <li><a href="#">Accessibilité : non conforme</a></li>
              <li><a href="#">Mentions légales</a></li>
              <li><a href="#">Politique de confidentialité</a></li>
              <li><a href="#">Plan du site</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Sauf mention explicite de propriété intellectuelle détenue par des tiers, les contenus de ce site sont proposés sous licence etalab-2.0</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
