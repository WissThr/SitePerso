import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Wissam Tahiri</h1>
      <nav>
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive ? { ...styles.link, ...styles.activeLink } : styles.link
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) =>
            isActive ? { ...styles.link, ...styles.activeLink } : styles.link
          }
        >
          À propos
        </NavLink>
        <NavLink
          to="/projects"
          style={({ isActive }) =>
            isActive ? { ...styles.link, ...styles.activeLink } : styles.link
          }
        >
          Projets
        </NavLink>
        <NavLink
          to="/contact"
          style={({ isActive }) =>
            isActive ? { ...styles.link, ...styles.activeLink } : styles.link
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    backgroundColor: "#112D4E",
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    flexWrap: "wrap", // AJOUT pour que ça s'adapte
  },
  title: {
    margin: 0,
    fontSize: "3rem", // DIMINUÉ
    fontFamily: "Protest Riot, sans-serif",
    fontWeight: "400",
    fontStyle: "normal",
    flex: "1 0 100%", // le titre prend toute la largeur sur petit écran
    textAlign: "center", // centré si mobile
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  link: {
    color: "white",
    fontSize: "1.5rem",
    marginLeft: "2rem",
    textDecoration: "none",
    display: "inline-block",
    marginTop: "1rem",
    padding: "0.5rem 1rem", // pour mieux voir l'effet
    borderRadius: "8px",
    transition: "background-color 0.3s ease",
  },
  activeLink: {
    backgroundColor: "#3F72AF",
    fontWeight: "bold",
  },
};

export default Header;
