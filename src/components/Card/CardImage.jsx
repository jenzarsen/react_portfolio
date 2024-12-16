import React from "react";
import styles from "./CardImage.module.css";

function CardImage(props) {
  return (
    <div className={styles.projectImage}>
      <img
        src={props.image}
        alt={props.title}
      />
    </div>
  );
}

export default CardImage;
