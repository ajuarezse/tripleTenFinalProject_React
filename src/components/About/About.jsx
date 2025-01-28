import "./About.css";
import musicPhoto from "../../assets/jarochoInstruments.jpg";

function About() {
  return (
    <div className="about">
      <section className="about__section">
        <img
          src={musicPhoto}
          alt="arrangment of Son Jarocho Instruments"
          className="about__image"
        />
        <div className="about__description">
          <h2 className="about__title">About the project</h2>
          <p className="about__paragraph">undergoing re-construction :)</p>
        </div>
      </section>
    </div>
  );
}

export default About;
