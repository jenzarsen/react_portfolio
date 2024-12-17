import React from "react";
import Header from "components/Header/Header";
import styles from "./Contact.module.css";

function Contact() {
  const contactLinks = [
    {
      platform: "Email",
      link: "https://mail.google.com/",
      icon: "📧",
      text: "jenzarsen.alabado.gmail.com"
    },
    {
      platform: "LinkedIn",
      link: "https://www.linkedin.com/in/jenzarsen/",
      icon: "💼",
      text: "https://www.linkedin.com/in/jenzarsen/"
    },
    {
      platform: "GitHub",
      link: "https://github.com/jenzarsen",
      icon: "💻",
      text: "github.com/jenzarsen"
    }
  ];

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={`${styles.title} fade-in`}>
          Get in <span className={styles.highlight}>Touch</span>
        </h1>
        
        <div className={styles.content}>
          <div className={styles.introSection}>
            <p className={styles.description}>
              I'm currently open for new opportunities whether as Game Developer or a Web Developer. Contact me via 
            </p>
          </div>

          <div className={styles.contactGrid}>
            {contactLinks.map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.contactCard} fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className={styles.contactIcon}>{contact.icon}</span>
                <div className={styles.contactInfo}>
                  <h3 className={styles.contactPlatform}>{contact.platform}</h3>
                  <p className={styles.contactText}>{contact.text}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contact; 