import React from "react";
import styles from "./Header.module.css";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? `${styles.button} ${styles.active}` : styles.button;
  };

  return (
    <header>
      <div className={styles.container}>
        <h1 className={styles.label}>JENZ ARSEN ALABADO</h1>
        <nav>
          <Link to="/" className={isActive("/")}>
            Home
          </Link>
          <Link to="/about" className={isActive("/about")}>
            About Us
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
