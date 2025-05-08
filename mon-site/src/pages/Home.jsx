import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

function Home() {
  const isMobile = window.innerWidth <= 768;

  return (
    <section style={styles.section}>
      <div
        style={{
          ...styles.content,
          flexDirection: isMobile ? "column" : "row",
          textAlign: isMobile ? "center" : "left",
        }}
      >
        <div
          style={{
            ...styles.textBlock,
            padding: isMobile ? "1.5rem" : styles.textBlock.padding,
            width: isMobile ? "100%" : "auto",
          }}
          data-aos="fade-right"
        >
          <h1 style={{ ...styles.title, fontSize: isMobile ? "2rem" : "3rem" }}>
            Bienvenue !
          </h1>
          <p
            style={{
              ...styles.subtitle,
              fontSize: isMobile ? "1rem" : "1.5rem",
              lineHeight: "1.6",
            }}
          >
            Je suis <strong>Wissam Tahiri</strong>, étudiant en{" "}
            <u>ingénierie informatique</u> passionné par le{" "}
            <strong>développement</strong> et l'<strong>innovation</strong>.
            <br />
            Curieux, créatif et déterminé, j'adore transformer des idées
            abstraites en <u>projets concrets</u>. Explorez mon univers et
            découvrez mes réalisations !
          </p>
          <div
            style={{
              ...styles.buttonGroup,
              justifyContent: isMobile ? "center" : "flex-start",
            }}
          >
            <Link to="/about" style={styles.button}>
              En savoir plus
            </Link>
            <Link to="/projects" style={styles.buttonAlt}>
              Voir mes projets
            </Link>
          </div>
        </div>

        {!isMobile && (
          <div style={styles.imageBlock} data-aos="fade-left">
            <img
              src={logo}
              alt="Wissam Tahiri - Home"
              style={styles.image}
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        )}
      </div>
    </section>
  );
}

const styles = {
  section: {
    minHeight: "100vh",
    width: "100%",
    padding: "2rem 1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
  },
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "2rem",
    width: "100%",
    maxWidth: "1100px",
  },
  textBlock: {
    flex: 1,
    backgroundColor: "#F9F7F7",
    borderRadius: "5%",
    padding: "2rem",
  },
  title: {
    fontWeight: "700",
    color: "#112D4E",
    marginBottom: "1rem",
  },
  subtitle: {
    marginBottom: "1.5rem",
    color: "#3F72AF",
  },
  buttonGroup: {
    marginTop: "2rem",
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
  },
  button: {
    padding: "0.7rem 1.4rem",
    backgroundColor: "#3F72AF",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    fontSize: "1rem",
  },
  buttonAlt: {
    padding: "0.7rem 1.4rem",
    backgroundColor: "#112D4E",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    fontSize: "1rem",
  },
  imageBlock: {
    flex: 1,
    textAlign: "center",
  },
  image: {
    width: "100%",
    maxWidth: "450px",
    borderRadius: "12px",
  },
};

export default Home;
