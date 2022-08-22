import React from "react";
import closeIcon from "../images/close-icon.svg";
import loader from "../images/loader.png";

function Popups() {
  return (
    <>
      <div id="edit-profile-popup" className="popup">
        <div className="popup__overlay"></div>
        <div className="popup__form-card">
          <button
            className="popup__close-btn popup__edit-profile-close-btn"
            type="button"
          >
            <img className="popup__close-icon" src={closeIcon} alt="close" />
          </button>
          <form className="popup__edit-profile-form popup__form" name="edit-ProfileForm">
            <h2 className="popup__form-label">Edit Profile</h2>
            <input
              id="name-input"
              minLength="2"
              maxLength="40"
              className="popup__form-input js-input-type-edit-profile-name"
              name="name"
              type="text"
              placeholder="Name"
              required
            />
            <span className="popup__input-type-error name-input-error"></span>
            <input
              id="about-input"
              minLength="2"
              maxLength="200"
              className="popup__form-input js-input-type-edit-profile-about-me"
              name="about"
              type="text"
              placeholder="About Me"
              required
            />
            <span className="popup__input-type-error about-input-error"></span>
            <button className="popup__button" type="submit">
              Save
            </button>
          </form>
        </div>
      </div>
      <div id="add-place-popup" className="popup">
        <div className="popup__overlay"></div>
        <div className="popup__form-card">
          <button
            className="popup__close-btn popup__place-close-btn"
            type="button"
          >
            <img className="popup__close-icon" src={closeIcon} alt="close" />
          </button>
          <form className="popup__place-form popup__form" name="addPlaceForm">
            <h2 className="popup__form-label">Add Place</h2>
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
            <button className="popup__button" type="submit">
              Save
            </button>
          </form>
        </div>
      </div>
      <div id="edit-profile-pic-popup" className="popup">
        <div className="popup__overlay"></div>
        <div className="popup__form-card">
          <button
            className="popup__close-btn popup__place-close-btn"
            type="button"
          >
            <img className="popup__close-icon" src={closeIcon} alt="close" />
          </button>
          <form
            className="popup__edit-profile-pic-form popup__form"
            name="editProfilePicForm"
          >
            <h2 className="popup__form-label">Change profile picture</h2>
            <input
              id="js-input-edit-profile-pic-input"
              className="popup__form-input js-input-type-edit-profile-pic"
              name="avatar"
              type="url"
              placeholder="Url Link"
              required
            />
            <span className="popup__input-type-error js-input-edit-profile-pic-input-error"></span>
            <button className="popup__button" type="submit">
              Save
            </button>
          </form>
        </div>
      </div>
      <div id="confirmation-popup" className="popup">
        <div className="popup__overlay"></div>
        <div className="popup__form-card">
          <button
            className="popup__close-btn popup__place-close-btn"
            type="button"
          >
            <img className="popup__close-icon" src={closeIcon} alt="close" />
          </button>
          <form className="popup__confirmation-form popup__form" name="confirmationCard">
            <h2 className="popup__form-label popup__form-label-confirmation-confirmation">
              Are you sure?
            </h2>
            <button className="popup__button" type="submit">
              Yes
            </button>
          </form>
        </div>
      </div>
      <div id="view__image" className="popup">
        <div className="popup__overlay"></div>
        <div className="popup__form-card popup__form-image">
          <button
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
    </>
  );
}

export default Popups;
