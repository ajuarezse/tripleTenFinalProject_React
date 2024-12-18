import "./Navigation.css";
//import { Link } from "react-router-dom";

function Navigation({ handleRegisterModal, handleLoginModal }) {
  return (
    <nav className="navigation">
      <button
        type="button"
        className="navigation__button"
        onClick={handleRegisterModal}
      >
        Sign Up
      </button>
      <button
        type="button"
        className="navigation__button"
        onClick={handleLoginModal}
      >
        Log In
      </button>
      <button type="button" className="navigation__button">
        Main
      </button>
      <button type="button" className="navigation__button">
        Profile
      </button>
      <button type="button" className="navigation__button">
        About
      </button>
      <button type="button" className="navigation__button">
        Log Out
      </button>
    </nav>
  );
}

export default Navigation;
