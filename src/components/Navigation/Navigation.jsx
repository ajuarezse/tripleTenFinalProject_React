import "./Navigation.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Navigation({ handleRegisterModal, handleLoginModal, handleLogOut }) {
  const navigate = useNavigate();
  const currentUser = useContext(CurrentUserContext);

  const handleProfileClick = (e) => {
    if (currentUser) {
      navigate("/profile");
    } else {
      handleLoginModal(e);
    }
  };

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
      <button
        type="button"
        className="navigation__button"
        onClick={handleProfileClick}
      >
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
