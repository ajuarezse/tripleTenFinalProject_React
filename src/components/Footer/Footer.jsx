import "./Footer.css";
import githubLogo from "../../assets/github-mark-white.png";
import linkedinLogo from "../../assets/LI-In-Bug.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__credit">Developed by Angel Juarez</p>
        <div className="footer__social-links">
          <a
            href="https://github.com/ajuarezse"
            target="blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            <img src={githubLogo} alt="GitHub" className="footer__logo" />
          </a>
          <a
            href="https://www.linkedin.com/in/angel-juarez-tech/"
            target="blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            <img src={linkedinLogo} alt="Linkedin" className="footer__logo" />
          </a>
        </div>
        <p className="footer__year">2025</p>
      </div>
    </footer>
  );
}

export default Footer;
