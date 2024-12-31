import "./About.css";
import musicPhoto from "../../assets/jarochoInstruments.jpg";
import myPhoto from "../../assets/aJuarez.jpg";

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
          <h2 className="about__title">About the Project</h2>
          <p className="about__paragraph">
            This block describes the project author. Here you should indicate
            your name, what you do, and which development technologies you know.
            You can also talk about your experience with TripleTen, what you
            learned there, and how you can help potential customers.
          </p>
        </div>
      </section>
      <section className="about__section">
        <img src={myPhoto} alt="Photo of Author" className="about__image" />
        <div className="about__description">
          <h2 className="about__title">About Me</h2>
          <p className="about__paragraph">
            This block describes the project author. Here you should indicate
            your name, what you do, and which development technologies you know.
            You can also talk about your experience with TripleTen, what you
            learned there, and how you can help potential customers.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
