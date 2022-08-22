/* --------------------------------- imports -------------------------------- */
import React from "react";
import PopupWithForm from "./PopupWithForm";

/* ------------------------ function EditProfilePopup ----------------------- */

function EditProfilePopup({ isOpen, onClose}) {


  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name="edit-profile"
      title="Edit profile"
    >
    <input id="name-input" minLength="2" maxLength="40" className="popup__form-input js-input-type-profile-name"
                    name="name" type="text" placeholder="Name" required /><span
                    className="popup__input-type-error name-input-error"></span>
    
    <input id="about-input" minLength="2" maxLength="200"
                    className="popup__form-input js-input-type-profile-about-me" name="about" type="text"
                    placeholder="About Me"  required /><span
                    className="popup__input-type-error about-input-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;

