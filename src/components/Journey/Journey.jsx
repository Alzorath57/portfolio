import useReveal from "../../hooks/useReveal";
import journey from "../../data/journey";
import "./Journey.scss";

function Journey() {
  const [journeyRef, isVisible] = useReveal();

  return (
    <section
      ref={journeyRef}
      className={`journey${isVisible ? " is-visible" : ""}`}
      id="parcours"
    >
      <h2 className="journey__title">Parcours</h2>
      <ol className="journey__list">
        {journey.map((step) => (
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
