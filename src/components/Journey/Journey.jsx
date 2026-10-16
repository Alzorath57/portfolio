import "./Journey.scss";

const steps = [
  {
    period: "Avant 2026",
    title: "Boulanger",
    text: "Plusieurs années en boulangerie, où j'ai appris la rigueur, l'organisation et la persévérance : une recette ne pardonne pas l'approximation.",
  },
  {
    period: "Avril – Octobre 2026",
    title: "Formation Développeur Web — OpenClassrooms",
    text: "Reconversion par une formation professionnalisante : React, JavaScript, Node.js, Express, MongoDB, SEO, accessibilité et gestion de projet agile.",
  },
  {
    period: "Aujourd'hui",
    title: "Développeur web React / Node.js",
    text: "À la recherche d'un poste au Luxembourg, sur site, en hybride ou à distance.",
  },
];

function Journey() {
  return (
    <section className="journey" id="parcours">
      <h2 className="journey__title">Parcours</h2>
      <ol className="journey__list">
        {steps.map((step) => (
          <li className="journey__item" key={step.title}>
            <span className="journey__period">{step.period}</span>
            <h3 className="journey__step">{step.title}</h3>
            <p className="journey__text">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default Journey;
