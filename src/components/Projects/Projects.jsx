import { useState } from "react";
import projects from "../../data/projects";
import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectModal from "../ProjectModal/ProjectModal";
import "./Projects.scss";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="projects" id="projets">
      <h2 className="projects__title">Mes projets</h2>
      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={() => setSelectedProject(project)}
          />
        ))}
      </div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

export default Projects;
