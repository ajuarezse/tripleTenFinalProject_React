import "./Header.css";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Header({ handleRegisterModal, handleLoginModal, handleLogOut }) {
  return (
    <header className="header">
      <Link to="/">
        <div className="header__logo">Name of Project</div>
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
