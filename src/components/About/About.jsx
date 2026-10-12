import "./About.scss";
import aboutIllustration from "../../assets/images/about/illustration-boulanger-dev.svg";

function About() {
  return (
    <section className="about" id="a-propos">
      <img
        className="about__image"
        src={aboutIllustration}
        alt=""
        width={480}
        height={360}
      />
      <div className="about__content">
        <h2 className="about__title">À propos</h2>
        <p className="about__text">
          Boulanger de métier, je suis devenu développeur web grâce à ma
          formation OpenClassrooms. De la boulangerie, j'ai gardé la rigueur,
          l'organisation et la persévérance : une recette ne pardonne pas
          l'approximation, un programme non plus.
        </p>
        <p className="about__text">
          Aujourd'hui, je conçois des applications web complètes : des
          interfaces en React côté front-end, et des API REST avec Node.js,
          Express et MongoDB côté back-end. Je sais aussi optimiser le
          référencement (SEO) et les performances d'un site, et organiser un
          projet avec la méthode agile.
        </p>
        <p className="about__text">
          Je recherche un poste de développeur web React / Node.js au
          Luxembourg, sur site, en hybride ou à distance, dans une équipe où je
          pourrai apporter mon énergie et ma rigueur, tout en continuant à
          apprendre chaque jour.
        </p>
      </div>
    </section>
  );
}

export default About;
