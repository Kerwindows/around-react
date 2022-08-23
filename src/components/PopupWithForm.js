/* --------------------------------- imports -------------------------------- */
import React from "react";
import closeIcon from "../images/close-icon.svg";

/* ------------------------- function PopupWIthForm ------------------------- */
function PopupWithForm({ isOpen, onClose, name, title, children, submitText }) {
  return (
    <div id={name} className={`popup ${isOpen && "popup_opened"}`}>
      <div className="popup__overlay"></div>
      <div className="popup__form-card">
        <button
          onClick={onClose}
          aria-label="Close Form Button"
          type="button"
          className={`popup__close-btn popup__${name}-close-btn`}
        >
          <img className="popup__close-icon" src={closeIcon} alt="close" />
        </button>
        <form
          className={`popup___${name}-pic-form popup__form`}
          name={`${name}Form`}
        >
          <h2 className="popup__form-label">{title}</h2>
          {children}
          <span
            className={`popup__input-type-error js-input-_${name}-pic-input-error`}
          ></span>
          <button className="popup__button" type="submit">
            {submitText}
          </button>
        </form>
      </div>
    </div>
  );
}
export default PopupWithForm;
