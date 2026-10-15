import "./ProjectCard.scss";

function ProjectCard({ project, onOpen }) {
  return (
    <article className="project-card">
      <img
        className="project-card__image"
        src={project.cover}
        alt={`Aperçu du site ${project.title}`}
      />
      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <ul className="project-card__tags">
          {project.technologies.slice(0, 3).map((tech) => (
            <li className="project-card__tag" key={tech}>
              {tech}
            </li>
          ))}
        </ul>
        <button className="project-card__button" type="button" onClick={onOpen}>
          Voir le détail
        </button>
      </div>
    </article>
  );
}

export default ProjectCard;
