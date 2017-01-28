import React, { Component } from 'react';
import MainArticle from './mainarticle';
import Sidebar from './sidebar';
import Footer from './footer';
import Header from './header';
import '.././styles/modules/app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app__inner-wrapper">
          <MainArticle />
          <Sidebar />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
