import "./ProjectModal.scss";

function ProjectModal({ project, onClose }) {
  return (
    <div className="project-modal">
      <div
        className="project-modal__content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <button
          className="project-modal__close"
          onClick={onClose}
          aria-label="Fermer"
          type="button"
        >
          ✕
        </button>
        <img
          className="project-modal__image"
          src={project.cover}
          alt={`Aperçu du site ${project.title}`}
        />
        <ul className="project-modal__gallery">
          {project.images.map((image, index) => (
            <li key={image}>
              <img
                className="project-modal__thumb"
                src={image}
                alt={`Capture ${index + 1} du projet ${project.title}`}
                loading="lazy"
              />
            </li>
          ))}
        </ul>
        <h2 className="project-modal__title" id="project-modal-title">
          {project.title}
        </h2>
        <ul className="project-modal__tags">
          {project.technologies.map((tech) => (
            <li className="project-modal__tag" key={tech}>
              {tech}
            </li>
          ))}
        </ul>
        <h3 className="project-modal__subtitle">Contexte</h3>
        <p className="project-modal__text">{project.context}</p>
        <h3 className="project-modal__subtitle">Ce que j'ai fait</h3>
        <p className="project-modal__text">{project.tasks}</p>
        <h3 className="project-modal__subtitle">Difficulté surmontée</h3>
        <p className="project-modal__text">{project.challenge}</p>
        <h3 className="project-modal__subtitle">Ce que j'ai appris</h3>
        <p className="project-modal__text">{project.learned}</p>

        <div className="project-modal__links">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-modal__link"
          >
            Voir le code sur GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
