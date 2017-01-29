import React, { Component } from 'react';
import MainArticle from './mainarticle';
import Sidebar from './sidebar';
import Footer from './footer';
import Header from './header';
import Modal from './modal';
import '../styles/modules/app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  render() {
    return (
      <div className="app">
        <Header />
        <div className="app__inner-wrapper">
          <MainArticle />
          <Sidebar onClick={this.handleClick}/>
        </div>
        <Footer />
        {this.state.showModal ?
          <Modal onClick={this.handleClick}/> :
          null
        }
      </div>
    );
  }
}

export default App;
