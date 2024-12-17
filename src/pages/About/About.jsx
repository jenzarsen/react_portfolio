import React from "react";
import Header from "components/Header/Header";
import styles from "./About.module.css";

function About() {
  const gameDevSkills = [
    "Unity",
    "C#",
    "Javascript",
    "Photoshop",
    "JIRA",
    "Github Desktop",
    "Jenkins",
  ];
  const webSkills = [
    "JavaScript (ES6+)",
    "React",
    "Node.js",
    "PostgreSQL",
    "Git",
    "Express",
    "REST APIs",
  ];

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={`${styles.title} fade-in`}>
          About <span className={styles.highlight}>Me</span>
        </h1>

        <div className={styles.content}>
          <div className={styles.imageSection}>
            <div className={styles.imageContainer}>
              <img
                src="https://utfs.io/f/LCcCDVgGE2AkCCzA9j75ai3tfKbEqolPg4Qmrzw1XvS6y7eF"
                alt="Profile"
                className={styles.profileImage}
              />
              <div className={styles.imageOverlay} />
            </div>
          </div>

          <div className={styles.textSection}>
            <p className={styles.bio}>
              Hello! I'm Jenz Arsen, a passionate developer and hobbyist since
              2016, with 5 years of professional experience in the game
              development industry.
            </p>

            <p className={styles.bio}>
              I started coding in 2014, joining local school coding competitions
              out of fun. Eventually I built my first game in Unity way back in
              2016 for a school project.
            </p>

            <p className={styles.bio}>
              Fast-forward to the present, I've had the privilege of working
              with top Hidden Object Game Companies on mobile and PC such as Big
              Giant Games, Red Tower Games, and Boomzap Entertainment and have
              been credited in 20+ published games throughout Bigfish Games, IOS
              Store, Google Play Store, & Steam.
            </p>

            <div className={styles.skillsSection}>
              <h2 className={styles.skillsTitle}>
                Technologies I've been working with:
              </h2>

              <h3 className={styles.skillsTitle}>Game Development</h3>
              <ul className={styles.skillsList}>
                {gameDevSkills.map((skill, index) => (
                  <li
                    key={index}
                    className={`${styles.skillItem} fade-in`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </li>
                ))}
              </ul>

              <h3 className={styles.skillsTitle}>Web Development</h3>
              <ul className={styles.skillsList}>
                {webSkills.map((skill, index) => (
                  <li
                    key={index}
                    className={`${styles.skillItem} fade-in`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default About;
