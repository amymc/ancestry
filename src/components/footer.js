import React, { Component } from 'react';
import '.././styles/modules/footer.css';


class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        &copy;1997-2015 Ancestry
        <ul className="footer__list">
          <li className="footer__list-item">Corporate Information</li>
          <li className="footer__list-item">Privacy</li>
          <li className="footer__list-item">Terms and Conditions</li>
          <li className="footer__list-item">Site Map</li>
        </ul>
      </footer>
    );
  }
}

export default Footer;