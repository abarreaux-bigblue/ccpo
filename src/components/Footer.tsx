import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>CCPO - Clausier d'adaptation au changement climatique</h3>
            <p>Des suggestions chiffrées et précises pour adapter nos modes de vie.</p>
          </div>
          <div className="footer-section">
            <h4>Liens utiles</h4>
            <ul>
              <li><a href="#">TODO</a></li>
              <li><a href="#">TODO</a></li>
              <li><a href="#">TODO</a></li>
              <li><a href="#">TODO</a></li>
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
