import React, { Component } from 'react';
import '../styles/modules/footer.css';


class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        &copy;1997-2015 Ancestry
        <ul className="footer__list">
          <li className="footer__list-item">
            <a className="footer__link link" href="#">Corporate Information</a>
          </li>
          <li className="footer__list-item">
            <a className="footer__link link" href="#">Privacy</a>
          </li>
          <li className="footer__list-item">
            <a className="footer__link link" href="#">Terms and Conditions</a>
          </li>
          <li className="footer__list-item">
            <a className="footer__link link" href="#">Site Map</a>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;