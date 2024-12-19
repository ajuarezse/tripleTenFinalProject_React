import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import About from "../About/About";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import ItemModal from "../ItemModal/ItemModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [likedSongs, setLikedSongs] = useState({});
  //const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const navigate = useNavigate();

  const handleCardClick = () => {
    setActiveModal("view");
  };
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

  const handleSignUp = () => {
    //temp for simulating login
    //todo: pass real user objects for backend stage
    setCurrentUser(true);
    navigate("/profile");
    closeActiveModal();
  };

  const handleLogIn = () => {
    //temp for simulating login
    //todo: pass real user objects for backend stage
    setCurrentUser(true);
    navigate("/profile");
    closeActiveModal();
  };

  const handleLike = (id) => {
    setLikedSongs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleLogOut = () => {
    setCurrentUser(null);
    navigate("/");
  };

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <div className="app">
          <Header
            handleRegisterModal={handleRegisterModal}
            handleLoginModal={handleLoginModal}
            handleLogOut={handleLogOut}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  handleCardClick={handleCardClick}
                  likedSongs={likedSongs}
                  onLike={handleLike}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute currentUser={currentUser}>
                  <Profile likedSongs={likedSongs} />
                </ProtectedRoute>
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
        <ItemModal onClose={closeActiveModal} activeModal={activeModal} />
        <RegisterModal
          isOpen={activeModal === "register"}
          onClose={closeActiveModal}
          onSignUp={handleSignUp}
          handleLoginModal={handleLoginModal}
        />
        <LoginModal
          isOpen={activeModal === "login"}
          onClose={closeActiveModal}
          handleRegisterModal={handleRegisterModal}
          onLogIn={handleLogIn}
        />
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
