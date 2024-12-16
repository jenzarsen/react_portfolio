import React from "react";
import styles from './CardInfo.module.css';

function CardInfo(props) {
  return (
    <div className={styles.cardInfo}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <div className={styles.tagStack}>
        {props.tech.map((tech, i) => (
          <span key={i} className={styles.tag}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default CardInfo;
