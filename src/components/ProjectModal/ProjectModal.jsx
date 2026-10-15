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
        <h3>Contexte</h3>
        <p>{project.context}</p>
        <h3>Ce que j'ai fait</h3>
        <p>{project.tasks}</p>
        <h3>Difficulté surmontée</h3>
        <p>{project.challenge}</p>
        <h3>Ce que j'ai appris</h3>
        <p>{project.learned}</p>

        <div className="project-modal__links">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            Voir le code sur GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
