import React from "react";
import Header from "components/Header/Header";
import styles from "./Home.module.css";
import "index.css";

function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={`${styles.text} fade-in`}>
        <p className={styles.textName}>Jenz Arsen <span className={styles.textHighlight}>Alabado</span></p>
        <p >Unity Game Developer </p>
      </div>
    </div>
  );
}

export default Home;
