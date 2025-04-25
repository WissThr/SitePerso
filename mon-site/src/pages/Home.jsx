import React from "react";
import { Link } from "react-router-dom";
import HomeImg from "../assets/home.jpg";
import logo from "../assets/logo.jpg";
function Home() {
  return (
    <section style={styles.section}>
      <div style={styles.content}>
        <div style={styles.textBlock} data-aos="fade-right">
          <h1 style={styles.title}>Bienvenue !</h1>
          <p style={styles.subtitle}>
            Je suis <strong>Wissam Tahiri</strong>, étudiant en{" "}
            <u>ingénierie informatique</u> passionné par le{" "}
            <strong>développement</strong> et l'<strong>innovation</strong>.
            <br />
            Curieux, créatif et déterminé, j'adore transformer des idées
            abstraites en <u>projets concrets</u>. Explorez mon univers et
            découvrez mes réalisations !
          </p>
          <div style={styles.buttonGroup}>
            <Link to="/about" style={styles.button}>
              En savoir plus
            </Link>
            <Link to="/projects" style={styles.buttonAlt}>
              Voir mes projets
            </Link>
          </div>
        </div>
        <div style={styles.imageBlock} data-aos="fade-left">
          <img
            src={logo}
            alt="Wissam Tahiri - Home"
            style={styles.image}
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    height: "100svh", // au lieu de minHeight
    margin: "0",
    padding: "0 2rem", // padding horizontal uniquement
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden", // empêcher du scroll inutile
  },

  content: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "3rem",
    width: "90%",
    maxWidth: "1200px",
  },
  textBlock: {
    flex: 1,
    minWidth: "280px",
    backgroundColor: " #F9F7F7",
    borderRadius: "5%",
    padding: "2rem",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "700",
    color: "#112D4E",
    marginBottom: "1rem",
  },
  subtitle: {
    fontSize: "1.5rem",
    marginBottom: "1.5rem",
    color: "#3F72AF",
  },
  buttonGroup: {
    marginTop: "2rem",
    display: "flex",
    gap: "1.5rem",
    flexWrap: "wrap",
  },
  button: {
    padding: "0.8rem 1.6rem",
    backgroundColor: "#3F72AF",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    fontSize: "1.2rem",
    transition: "background-color 0.3s ease",
  },
  buttonAlt: {
    padding: "0.8rem 1.6rem",
    backgroundColor: "#112D4E",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    fontSize: "1.2rem",
    transition: "background-color 0.3s ease",
  },
  imageBlock: {
    flex: 1,
    textAlign: "center",
    minWidth: "280px",
  },
  image: {
    width: "100%",
    maxWidth: "450px",
    borderRadius: "12px",
  },
};

export default Home;
