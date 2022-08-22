import React, { useEffect, useState } from "react";
import "../index.css";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import EditProfilePopup from "./EditProfilePopup";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }


  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
  }


  return (
    <>
      <div className="page">
        <Header />
        <Main />
        <Footer />
      </div>

      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />

   
    </>
  );
}

export default App;
