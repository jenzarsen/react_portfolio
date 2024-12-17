import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => {
    if (location.pathname === "/" || location.pathname === "/react_portfolio/") {
      if ("/" === path || "/react_portfolio/" === path) {
        //active
        return `${styles.navLink} ${styles.active}`;
      }
    }

    return location.pathname === path
      ? `${styles.navLink} ${styles.active}`
      : styles.navLink;
  };

  return (
    <header
      className={`${styles.container} ${isScrolled ? styles.scrolled : ""}`}
    >
      <Link to="/" className={styles.logo}>
        Jenz Arsen<span className={styles.logoHighlight}>Alabado</span>
      </Link>

      <button
        className={styles.mobileMenuButton}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? "✕" : "☰"}
      </button>

      <nav className={isMobileMenuOpen ? styles.open : ""}>
        <Link to="/" className={isActive("/")}>
          Home
        </Link>
        <Link to="/projects" className={isActive("/projects")}>
          Projects
        </Link>
        <Link to="/experience" className={isActive("/experience")}>
          Experience
        </Link>
        <Link to="/about" className={isActive("/about")}>
          About
        </Link>
        <Link to="/contact" className={isActive("/contact")}>
          Contact
        </Link>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.resumeButton}
        >
          Resume
        </a>
      </nav>
    </header>
  );
}

export default Header;
