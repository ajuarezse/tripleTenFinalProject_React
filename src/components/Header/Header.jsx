import "./Header.css";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
//import jarochoLogo from "../../assets/jarochoLogo.png";

function Header({ handleRegisterModal, handleLoginModal, handleLogOut }) {
  return (
    <header className="header">
      <Link to="/" className="header__logo-link">
        {/*<img className="header__logo" src={jarochoLogo} alt="logo" />*/}
        <div className="header__title">Son Jarocho Songbook</div>
      </Link>
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
