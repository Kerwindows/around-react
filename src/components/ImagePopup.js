import React from "react";

function ImagePopup({ isOpen, onClose  }) {


  return (
    <div id="view__image"
     className={`popup ${isOpen && "popup_opened"}`}
      onClick={handleOutsideClick}
    >
      <div className="modal__content modal__content_type_image">
        <button
          onClick={onClose}
          aria-label="Close Image Button"
          type="button"
          className="button modal__button-close"
          id="modal-image-close-button"
        />
        <img src={card?.link} alt={card?.name} className="modal__image" />
        <p className="modal__caption">{card?.name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;


<div  className="popup">
        <div className="popup__overlay"></div>
        <div className="popup__form-card popup__form-image">
          <button 
          onClick={onClose} 
          aria-label="Close Form Button"
          className="popup__close-btn popup__image-close-btn"
          type="button"
          >
            <img className="popup__close-icon" src={closeIcon} alt="close" />
          </button>
          <img
            className="popup__card-image-preview"
            src={loader}
            alt="preview"
          />
          <p className="popup__card-image-preview-name">loading...</p>
        </div>
      </div>