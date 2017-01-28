import React from 'react';
import '../styles/modules/modal.css';

const Modal = (props) => {
  return (
    <div className="modal__wrapper">
      <div className="modal__overlay"></div>
      <div className="modal">
        <span className="modal__close-btn" onClick={props.onClick}>X</span>
        <h1>Subscribe</h1>
        <form>
          <label className="modal__input-label">
            Your first name
            <input className="modal__input-label" type="text" required />
          </label>
          <label className="modal__input-label">
            Your last name
            <input className="modal__input-label" type="text" required />
          </label>
          <label className="modal__input-label">
            Your email
            <input className="modal__input-label" type="email" required />
          </label>
          <button className="button button--primary">Get started</button>
          <small>
            By creating an account, an agree to <a href="#">Ancestry Terms and Conditions</a> and understand that your information will be used in accordance with
          </small>
        </form>
      </div>
    </div>
  );
}

export default Modal;