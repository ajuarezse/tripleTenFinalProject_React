import "./Header.css";
//import logo from "../../assets/logo.svg";
//import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
//import { useContext } from "react";
//import CurrentUserContext from "../../contexts/CurrentUserContext/CurrentUserContext";

function Header({ handleRegisterModal, handleLoginModal, handleLogOut }) {
  return (
    <header className="header">
      <Link to="/">
        <div className="header__logo">Name of Project</div>
      </Link>
      {/*
      <div className="header__auth-buttons">
        <button
          type="button"
          className="header__auth-link"
          onClick={handleRegisterModal}
        >
          Sign Up
        </button>
        <button
          type="button"
          className="header__auth-link"
          onClick={handleLoginModal}
        >
          Log In
        </button>
      </div>
      */}
      <section className="header__navigation">
        <Navigation
          handleLoginModal={handleLoginModal}
          handleRegisterModal={handleRegisterModal}
          handleLogOut={handleLogOut}
        />
      </section>
    </header>
  );
}

export default Header;
