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
      title="Add Place"
    >
            <input
              id="js-input-place-name-input"
              minLength="1"
              maxLength="30"
              className="popup__form-input js-input-type-place-name"
              name="name"
              type="text"
              placeholder="Title"
              required
            />
            <span className="popup__input-type-error js-input-place-name-input-error"></span>
            <input
              id="js-input-place-url-input"
              className="popup__form-input js-input-type-place-url"
              name="link"
              type="url"
              placeholder="Url Link"
              required
            />
            <span className="popup__input-type-error js-input-place-url-input-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;

