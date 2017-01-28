import React, { Component } from 'react';
import '../styles/modules/header.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__background"></div>
        <h1 className="header__title">U.S. Military Collection</h1>
      </header>
    );
  }
}

export default Header;