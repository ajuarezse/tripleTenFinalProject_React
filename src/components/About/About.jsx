import "./About.css";
import musicPhoto from "../../assets/jarochoInstruments.jpg";
import myPhoto from "../../assets/profilePhoto.jpg";

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
          <p className="about__paragraph">
            Imagine a party in Mexico where people play amazing music and dance!
            That's Son Jarocho! It's old-school music from the Veracruz region.
            But sadly, it was starting to disappear. So, this project is here to
            help save it! You can explore the words to these awesome songs by
            clicking on the cards on the main page. And the best part? You can
            even listen to the music right here thanks to Spotify! Enjoy!
          </p>
        </div>
      </section>
      <section className="about__section">
        <div className="about__description">
          <h2 className="about__title">About the author</h2>
          <p className="about__paragraph">
            Hi! I'm Angel, a student software developer who loves building cool
            projects. I grew up playing Son Jarocho music in Southern
            California, and I'm passionate about sharing my love for this
            vibrant tradition. When I'm not coding, you can find me playing
            music or chess with my friends. I'm excited to share my love for Son
            Jarocho with you through this project.
          </p>
        </div>
        <img src={myPhoto} alt="Photo of Author" className="about__image" />
      </section>
    </div>
  );
}

export default About;
