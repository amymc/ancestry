import React from 'react';
import '../styles/modules/footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      &copy;1997-2015 Ancestry
      <ul className="footer__list">
        <li className="footer__list-item">
          <a className="link" href="#">Corporate Information</a>
        </li>
        <li className="footer__list-item">
          <a className="link" href="#">Privacy</a>
        </li>
        <li className="footer__list-item">
          <a className="link" href="#">Terms and Conditions</a>
        </li>
        <li className="footer__list-item">
          <a className="link" href="#">Site Map</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;