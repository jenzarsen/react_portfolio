import React from "react";
import Header from "components/Header/Header";
import styles from "./NoPage.module.css";

const NoPage = () => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1> Error 404 </h1>
        <h2> Page not found </h2>
      </div>
    </div>
  );
};

export default NoPage;
