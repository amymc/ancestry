import React from 'react';
import '../styles/modules/modal.css';

const Modal = (props) => {
  return (
    <div className="modal__wrapper">
      <div className="modal__overlay"></div>
      <div className="modal">
        <span className="modal__close-btn" onClick={props.onClick}>X</span>
        <h1 className="modal__title">Subscribe Today</h1>
        <form className="modal__form">
          <div className="modal__form-row">
            <label className="modal__input-label">
              Your first name
              <input className="modal__input-box" type="text" required />
            </label>
            <label className="modal__input-label">
              Your last name
              <input className="modal__input-box" type="text" required />
            </label>
          </div>
          <div className="modal__form-row">
            <label className="modal__input-label">
              Your email
              <input className="modal__input-box" type="email" required />
            </label>
          </div>
          <button className="button button--primary">Get started</button>
          <small className="modal__small-print">
            By creating an account, an agree to <a href="#" className="link">Ancestry Terms and Conditions</a> and understand that your information will be used in accordance with our <a href="#" className="link">Privacy Statement</a>, including that we will send you emails about our services and special offers.
          </small>
        </form>
      </div>
    </div>
  );
}

export default Modal;