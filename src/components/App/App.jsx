import { useState } from "react";
import { Routes, Route } from "react-router-dom";
//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";

function App() {
  const [activeModal, setActiveModal] = useState("");

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

  return (
    <>
      <div className="app">
        <Header
          handleRegisterModal={handleRegisterModal}
          handleLoginModal={handleLoginModal}
        />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </div>
      <RegisterModal
        isOpen={activeModal === "register"}
        onClose={closeActiveModal}
      />
      <LoginModal
        isOpen={activeModal === "login"}
        onClose={closeActiveModal}
      ></LoginModal>
    </>
  );
}

export default App;
