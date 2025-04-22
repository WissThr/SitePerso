import React from "react";
import Timeline from "../components/Timeline";
import Wiss from "../assets/Wiss.png";
import HW from "../assets/hello-world.gif";
import BulletPoints from "../components/BulletPoints";
import cp2i from "../constants/cp2i.json";
import ing from "../constants/ing.json";
import timeline from "../constants/timeline.json";

function About() {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>À propos de moi</h2>
      <div style={styles.content}>
        <div style={styles.block} data-aos="fade-up">
          <h3>Qui suis-je ?</h3>
          <div style={styles.flexRow}>
            <div style={styles.textCol}>
              <p>
                Je m'appelle <strong>Wissam Tahiri</strong>,{" "}
                <u>étudiant en ingénieur informatique</u> au sein de l'école
                d'ingénieurs <strong>Sup Galilée</strong>. <br />
                Passionné par le développement sous toutes ses formes, je suis
                également fasciné par le potentiel de l’
                <strong>intelligence artificielle</strong> : son impact sur les
                technologies actuelles et les possibilités immenses qu’elle
                ouvre pour l’avenir.
              </p>
            </div>
            <img src={Wiss} alt="Wissam Tahiri" style={styles.image} />
          </div>
        </div>

        <div style={styles.blockAlt} data-aos="fade-up" data-aos-delay="100">
          <h3>Ma vision</h3>
          <div style={styles.flexRow}>
            <div style={styles.textCol}>
              <p>
                J’aime <strong>comprendre</strong> comment fonctionnent les
                choses et <u>explorer</u> les mécanismes qui les animent. <br />
                Mais ce que j’aime par-dessus tout, c’est les voir{" "}
                <u>prendre vie</u> : transformer une idée abstraite en réalité
                tangible grâce à un code fonctionnel. C’est là que réside{" "}
                <strong>ma véritable motivation</strong>.
              </p>
              <p>
                Pour moi, rien ne vaut la <strong>pratique</strong> : c’est en
                expérimentant qu’on apprend, qu’on progresse, et qu’on
                s’implique pleinement dans la conception d’un projet – tout en
                découvrant les <strong>technologies</strong> qui y sont liées.
              </p>
            </div>
            <img src={HW} alt="Hello World" style={styles.image} />
          </div>
        </div>
        <div style={styles.block} data-aos="fade-up" data-aos-delay="200">
          <h3>Mon parcours</h3>
          <Timeline events={timeline} h={"Mon parcours résumé"} />
          <p>
            Après un <strong>Bac Scientifique</strong> <u>avec mention</u> et
            une année en médecine infructueuse, j’ai décidé de me réorienter
            vers mon deuxième domaine de prédilection : <u>l'ingénierie</u>.
            Pour cela, je suis passé par la{" "}
            <strong>classe préparatoire intégrée</strong> de{" "}
            <u>l'école Sup Galilée</u>.
          </p>

          <p>
            Lors de cette prépa, j'ai été initié à plusieurs matières
            fondamentales :
          </p>

          <BulletPoints points={cp2i} />

          <p>
            Après deux années de travail intensif, j'ai intégré la filière{" "}
            <strong>Ingénieur Informatique</strong> de l'école Sup Galilée.
          </p>

          <p>
            J’ai validé ma première année avec succès, en consolidant mes acquis
            de prépa et en découvrant de nouvelles disciplines :
          </p>
          <BulletPoints points={ing}></BulletPoints>
        </div>

        <div style={styles.blockAlt} data-aos="fade-up" data-aos-delay="300">
          <div style={styles.headingWithButton}>
            <h3 style={styles.h3}>Et maintenant ?</h3>
            <a href="/CV_WTahiri.pdf" download style={styles.cvButton}>
              📄 Télécharger mon CV
            </a>
          </div>

          <p>
            Actuellement en <strong>deuxième année de cycle ingénieur</strong> (
            <u>Niveau Bac+4 / Master 1</u>) à l'école Sup Galilée, je suis à la
            recherche d’un <strong>stage</strong> <u>de 2 à 4 mois</u> ou d’une{" "}
            <strong>opportunité d’alternance</strong> pour approfondir mes
            compétences sur le terrain.
          </p>

          <p>
            Au fil de mon cursus, j’ai particulièrement apprécié les domaines du{" "}
            <strong>développement Web</strong>, du{" "}
            <strong>développement logiciel</strong> ainsi que de l’
            <strong>administration système</strong>, que j’aimerais explorer
            davantage dans un contexte professionnel.
          </p>

          <p>
            Curieux, rigoureux et motivé, je souhaite intégrer une équipe
            dynamique où je pourrai <u>mettre en pratique mes acquis</u>,{" "}
            <u>apprendre de nouvelles technologies</u>
            {""} et <u>contribuer à des projets concrets</u>.
          </p>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "4rem 2rem",
    backgroundImage: "linear-gradient(#b5c6e0,#ebf4f5)",
    minHeight: "100vh",
  },
  title: {
    textAlign: "center",
    fontSize: "2.5rem",
    marginBottom: "3rem",
    fontWeight: "700",
    color: "#222",
    position: "relative",
  },
  content: {
    maxWidth: "850px",
    margin: "0 auto",
    fontSize: "1.05rem",
    lineHeight: "1.8",
    color: "#333",
  },
  block: {
    padding: "2.5rem 0",
    paddingLeft: "10px",
    paddingTop: "1px",
    backgroundColor: "#f9f9fb",
    borderRadius: "10px",
    margin: "2rem 0",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
    maxWidth: "800px",
  },
  blockAlt: {
    padding: "2.5rem 0",
    paddingLeft: "10px",
    paddingTop: "1px",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    margin: "2rem 0",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
    maxWidth: "800px",
  },
  flexRow: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "2rem",
    flexWrap: "wrap",
    marginTop: "1rem",
  },
  textCol: {
    flex: 1,
    minWidth: "250px",
  },
  image: {
    height: "100%", // prendre toute la hauteur du conteneur
    maxHeight: "200px", // limite visuelle raisonnable
    objectFit: "cover",
    borderRadius: "8px",
    flexShrink: 0,
  },
  headingWithButton: {
    paddingTop: "1rem",
    paddingRight: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "1rem",
    marginBottom: "1rem",
  },
  h3: {
    fontSize: "1.4rem",
    fontWeight: "600",
    color: "#0056b3",
    margin: 0,
  },
  cvButton: {
    padding: "0.6rem 1.2rem",
    backgroundColor: "#0056b3",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    fontSize: "0.95rem",
    transition: "background-color 0.3s ease",
    whiteSpace: "nowrap",
  },
};

export default About;
