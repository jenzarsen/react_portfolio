import React from "react";
import Header from "components/Header/Header";
import styles from "./Experience.module.css";
import experiences from "data/experiences.js";

function Experience() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={`${styles.title} fade-in`}>
          Work <span className={styles.highlight}>Experience</span>
        </h1>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`${styles.timelineItem} fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={styles.timelineContent}>
                <div className={styles.header}>
                  <h3 className={styles.company}>{exp.company}</h3>
                  <span className={styles.period}>{exp.period}</span>
                </div>
                <h4 className={styles.position}>{exp.position}</h4>
                <p className={styles.description}>{exp.description}</p>

                <ul className={styles.responsibilities}>
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>

                <div className={styles.techStack}>
                  {exp.tech.map((tech, i) => (
                    <span key={i} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Experience;
