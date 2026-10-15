import projects from "../../data/projects";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./Projects.scss";

function Projects() {
  return (
    <section className="projects" id="projets">
      <h2 className="projects__title">Mes projets</h2>
      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
