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
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [likedSongs, setLikedSongs] = useState({});
  //const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

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

  const handleLike = (id) => {
    setLikedSongs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
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
        <RegisterModal
          isOpen={activeModal === "register"}
          onClose={closeActiveModal}
          onSignUp={handleSignUp}
        />
        <LoginModal
          isOpen={activeModal === "login"}
          onClose={closeActiveModal}
        />
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
