import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [likedSongs, setLikedSongs] = useState({}); // Centralized state for liked songs

  const handleRegisterModal = (e) => {
    e.preventDefault();
    setActiveModal("register");
  };

  const handleLoginModal = (e) => {
    e.preventDefault();
    setActiveModal("login");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  // Function to toggle likes
  const handleLike = (id) => {
    setLikedSongs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      <div className="app">
        <Header
          handleRegisterModal={handleRegisterModal}
          handleLoginModal={handleLoginModal}
        />
        <Routes>
          <Route
            path="/"
            element={<Main likedSongs={likedSongs} onLike={handleLike} />}
          />
          <Route
            path="/profile"
            element={<Profile likedSongs={likedSongs} />}
          />
        </Routes>
        <Footer />
      </div>
      <RegisterModal
        isOpen={activeModal === "register"}
        onClose={closeActiveModal}
      />
      <LoginModal isOpen={activeModal === "login"} onClose={closeActiveModal} />
    </>
  );
}

export default App;
