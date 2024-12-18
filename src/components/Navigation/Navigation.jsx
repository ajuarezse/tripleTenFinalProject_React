import "./Navigation.css";
import { Link, useNavigate } from "react-router-dom";

function Navigation({ handleRegisterModal, handleLoginModal, handleLogOut }) {
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
      <Link to="/" className="navigation__button">
        Main
      </Link>
      <button type="button" className="navigation__button">
        Profile
      </button>
      <Link to="/about" className="navigation__button">
        About
      </Link>
      <button
        type="button"
        onClick={handleLogOut}
        className="navigation__button"
      >
        Log Out
      </button>
    </nav>
  );
}

export default Navigation;
