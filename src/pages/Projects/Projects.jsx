import React from "react";
import Header from "components/Header/Header";
import Card from "components/Card/Card.jsx";
import styles from "./Projects.module.css";
import projects from "data/projects.js";

function Projects() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={`${styles.title} fade-in`}>
          My <span className={styles.highlight}>Projects</span>
        </h1>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <Card
              key={index}
              id={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tech={project.tech}
              links={project.links}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Projects;
