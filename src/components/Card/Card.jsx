import React from "react";
import styles from "./Card.module.css";

function ProjectCard(props) {
  return (
    <div
      key={props.id}
      className={`${styles.projectCard} ${styles.projectFade}`}
      style={{ animationDelay: `${props.id * 0.1}s` }}
    >
      <div className={styles.projectImage}>
        <img
          src="https://utfs.io/f/LCcCDVgGE2AkQMqnZtF6sGCac8ZVfvypwhedAYzL32oEPjxK"
          alt={props.title}
        />
        <div className={styles.projectLinks}>
          <a href={props.liveLink} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
          <a href={props.githubLink} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>

      <div className={styles.projectInfo}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <div className={styles.techStack}>
          {props.tech.map((tech, i) => (
            <span key={i} className={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
