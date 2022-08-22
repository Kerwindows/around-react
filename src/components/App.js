import React, { useEffect, useState } from "react";
import "../index.css";
import { api } from "../utils/api";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import EditProfilePopup from "./EditProfilePopup";
import AddPlacePopup from "./AddPlacePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [userName, setUserName] = useState(null);
  const [userAbout, setuserAbout] = useState(null);
  const [userAvatar, setUserAvatar] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const [cards, setCards] = useState([]);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(clickedCard) {
    setSelectedCard(clickedCard);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  /* --------------------------- useEffect api calls -------------------------- */
  useEffect(() => {
    api
      .getUser()
      .then((userData) => {
        setUserName(userData.name);
        setuserAbout(userData.about);
        setUserAvatar(userData.avatar);
      })
      .catch((err) => {});
  }, []);

  useEffect(() => {
    api
      .getInitialCards()
      .then((initialCards) => {
        setCards(initialCards);
      })
      .catch((err) => {});
  }, []);

  return (
    <>
      <div className="page">
        <Header />
        <Main
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onEditAvatarClick={handleEditAvatarClick}
          onCardClick={handleCardClick}
          userName={userName}
          userAbout={userAbout}
          userAvatar={userAvatar}
          cards={cards}
        />
        <Footer />
      </div>

      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />

      <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />

      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </>
  );
}

export default App;
