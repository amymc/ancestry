import React, { Component } from 'react';
import MainArticle from './mainarticle';
import Sidebar from './sidebar';
import Footer from './footer';
import Header from './header';
//import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainArticle />
        <Sidebar />
        <Footer />
      </div>
    );
  }
}

export default App;
