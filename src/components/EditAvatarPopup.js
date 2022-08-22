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
      title="Change profile picture"
    >
    <input
              id="js-input-edit-profile-pic-input"
              className="popup__form-input js-input-type-edit-profile-pic"
              name="avatar"
              type="url"
              placeholder="Url Link"
              required
            />
    </PopupWithForm>
  );
}

export default EditProfilePopup;

