import React from "react";
import styles from "./CardImage.module.css";

function CardImage(props) {
  return (
    <div className={styles.projectImage}>
      <img
        src="https://utfs.io/f/LCcCDVgGE2AkQMqnZtF6sGCac8ZVfvypwhedAYzL32oEPjxK"
        alt={props.title}
      />
    </div>
  );
}

export default CardImage;
