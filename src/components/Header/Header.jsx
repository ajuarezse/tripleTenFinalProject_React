import "./Header.css";
//import logo from "../../assets/logo.svg";
//import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
//import { useContext } from "react";
//import CurrentUserContext from "../../contexts/CurrentUserContext/CurrentUserContext";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <div className="header__logo">Name of Project</div>
      </Link>
      <div className="header__auth-buttons">
        <button className="header__auth-link">Sign Up</button>
        <button className="header__auth-link">Log In</button>
      </div>
    </header>
  );
}

export default Header;
