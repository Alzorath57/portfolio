import "./Hero.scss";
import portrait from "../../assets/images/photo/julien-holtzinger-carre.webp";

function Hero() {
  return (
    <section id="accueil" className="hero">
      <img
        src={portrait}
        alt="Portrait de Julien Holtzinger"
        className="hero__photo"
        width={600}
        height={600}
      />
      <div className="hero__content">
        <h1 className="hero__title">Julien Holtzinger</h1>
        <p className="hero__subtitle">
          Développeur web JavaScript — React & Node.js
        </p>
        <p className="hero__text">
          Ancien boulanger, j'applique au code la même rigueur qu'à mes
          recettes.
        </p>
        <div className="hero__actions">
          <a className="hero__button hero__button--primary" href="#projets">
            Voir mes projets
          </a>
          <a className="hero__button hero__button--secondary" href="#contact">
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
