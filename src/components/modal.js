import React, { Component } from 'react';
import '../styles/modules/modal.css';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      invalidFirstName: false,
      invalidLastName: false,
      invalidEmail: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
  }

  validateEmail() {
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!re.test(this.state.email)) {
      this.setState({
        invalidEmail: true
      });
    } else {
      this.setState({
        invalidEmail: false
      });
    }
  }

  validateName() {
    if (!this.state.firstname) {
      this.setState({
        invalidFirstName: true
      });
    } else {
       this.setState({
        invalidFirstName: false
      });
    }

    if (!this.state.lastname) {
      this.setState({
        invalidLastName: true
      });
    } else {
       this.setState({
        invalidLastName: false
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.validateName();
    this.validateEmail();

    if (this.state.email && this.state.firstname && this.state.lastname) {
      this.props.onClick();
    }
  }

  render() {
    return (
      <div className="modal__wrapper">
        <div className="modal__overlay"></div>
        <div className="modal">
          <span className="modal__close-btn" onClick={() => this.props.onClick}>X</span>
          <h1 className="modal__title">Subscribe Today</h1>
          <form className="modal__form" onSubmit={(e) => this.handleSubmit(e)} noValidate>
            <div className="modal__form-row">
              <label className={'modal__input-label' + (this.state.invalidFirstName ? ' required' : '')}>
                Your first name
                {this.state.invalidFirstName ?
                  <span>Required</span> :
                  null
                }
                <input className="modal__input-box" type="text" value={this.state.firstname} onChange={event => this.setState({firstname: event.target.value})} required />
              </label>
              <label className={'modal__input-label' + (this.state.invalidLastName ? ' required' : '')}>
                Your last name
                {this.state.invalidLastName ?
                  <span>Required</span> :
                  null
                }
                <input className="modal__input-box" type="text" value={this.state.lastname} onChange={event => this.setState({lastname: event.target.value})} required />
              </label>
            </div>
            <div className="modal__form-row">
              <label className={'modal__input-label' + (this.state.invalidEmail ? ' required' : '')}>
                Your email
                {this.state.invalidEmail ?
                  <span>A valid email is required</span> :
                  null
                }
                <input className='modal__input-box' type="email" value={this.state.email} onChange={event => this.setState({email: event.target.value})} ref={(input) => { this.emailInput = input; }} required />
              </label>
            </div>
            <button className="button button--primary" type="submit">Get started</button>
            <small className="modal__small-print">
              By creating an account, an agree to <a href="#" className="link">Ancestry Terms and Conditions</a> and understand that your information will be used in accordance with our <a href="#" className="link">Privacy Statement</a>, including that we will send you emails about our services and special offers.
            </small>
          </form>
        </div>
      </div>
    );
  }
}

export default Modal;