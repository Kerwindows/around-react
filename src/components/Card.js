/* --------------------------------- imports -------------------------------- */
import React from "react";
import PopupWithForm from "./PopupWithForm";
import trash from "../images/Trash.svg";
/* ------------------------ function EditProfilePopup ----------------------- */

function Card({
  card,
  link,
  name,
  title,
  likeCount,
  onCardClick,
  userName,
  selectedCard
}) {
  function handleCardClick() {
    console.log("clicked");
    onCardClick(card);
  }

  return (
    <li className="card">
      <img
        onClick={handleCardClick}
        className="card__image"
        src={link}
        alt={name}
      />
      <button className="card__trash">
        <img
          className="card__trash-image hide"
          src={trash}
          alt={`Delete ${link}`}
        />
      </button>
      <div className="card__place-title">
        <h2 className="card__place-name">{title}</h2>
        <div className="card__place-container">
          <button type="button" className="card__place-favorite"></button>
          <p className="card__place-num">{likeCount}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
