import React from "react";
import styles from "./Card.module.css";
import CardImage from "./CardImage.jsx";
import CardInfo from "./CardInfo.jsx";
import CardLink from "./CardLink.jsx";

function ProjectCard(props) {
  return (
    <div
      key={props.id}
      className={`${styles.card} ${styles.cardFade}`}
      style={{ animationDelay: `${props.id * 0.1}s` }}
    >
      <CardImage className={styles.projectLinks} links={props.links} />
      <div className={styles.projectLinks}>
        {props.links?.map((item, index) => {
          return (
            <CardLink key={index} platform={item.platform} link={item.link} />
          );
        })}
      </div>
      <CardInfo
        title={props.title}
        description={props.description}
        tech={props.tech}
      />
    </div>
  );
}

export default ProjectCard;
