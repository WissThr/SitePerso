import React from "react";
import { Link } from 'react-router-dom'

function Home() {
  return (
    <section style={styles.section}>
      <h2>Bienvenue sur mon site !</h2>
      <p>
        Je suis Wissam Tahiri, étudiant en ingénierie informatique à l'
        <a href="https://www.sup-galilee.univ-paris13.fr/">
          école d'Ingénieurs Sup Galilée
        </a>
        .
      </p>
      <p>
      Étudiant curieux et passionné, je m'intéresse à de nombreux domaines. <br />
      Créatif et déterminé, j'ai un vrai goût pour le développement. 
      J'aime donner vie à mes idées, et pourquoi pas aussi à celles des autres !
      </p>
      <Link to="/about" className="link_bouton" style={styles.link_bouton}>A propos de moi</Link>
      <Link to="/projects" className="link_bouton" style={styles.link_bouton}>Mes projets</Link>
      <Link to="/contact" className="link_bouton"style={styles.link_bouton}>Me contacter</Link>
    </section>
  );
}

const styles = {
  link_bouton: {
    display: "inline-block",
    padding: "0.5rem 1rem",
    margin: "1rem",
    backgroundColor: "#007bff",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
  },
  section: {
    padding: "4rem 2rem",
    textAlign: "center",
  }
}

export default Home;
