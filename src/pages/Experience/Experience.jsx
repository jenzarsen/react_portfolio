import React from "react";
import Header from "components/Header/Header";
import styles from "./Experience.module.css";

function Experience() {
  const experiences = [
    {
      company: "Tech Company A",
      position: "Senior Frontend Developer",
      period: "2022 - Present",
      description: "Led frontend development for enterprise applications",
      responsibilities: [
        "Developed and maintained React-based web applications",
        "Implemented responsive designs and modern UI components",
        "Mentored junior developers and conducted code reviews",
        "Optimized application performance and user experience"
      ],
      tech: ["React", "TypeScript", "Redux", "Styled Components"]
    },
    {
      company: "Digital Agency B",
      position: "Full Stack Developer",
      period: "2020 - 2022",
      description: "Full stack development for client projects",
      responsibilities: [
        "Built RESTful APIs using Node.js and Express",
        "Developed frontend interfaces with React",
        "Implemented database solutions using MongoDB",
        "Collaborated with design team for UI/UX improvements"
      ],
      tech: ["Node.js", "React", "MongoDB", "Express"]
    },
    {
      company: "Startup C",
      position: "Junior Developer",
      period: "2019 - 2020",
      description: "Full stack development for SaaS platform",
      responsibilities: [
        "Assisted in developing new features",
        "Fixed bugs and improved application performance",
        "Participated in daily stand-ups and sprint planning",
        "Wrote unit tests and documentation"
      ],
      tech: ["JavaScript", "React", "PostgreSQL", "Docker"]
    }
  ];

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