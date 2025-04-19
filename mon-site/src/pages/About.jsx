import React from "react";
import Timeline from '../components/Timeline'

function About() {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>À propos de moi</h2>
      <div style={styles.content}>
        <h3>Qui suis-je ?</h3>
        <p>
          Je m'appelle <strong>Wissam Tahiri</strong>,{" "}
          <u>étudiant en ingénieur informatique</u> au sein de l'école
          d'ingénieurs <strong>Sup Galilée</strong>. <br />
          Passionné par le développement sous toutes ses formes, je suis
          également fasciné par le potentiel de l’
          <strong>intelligence artificielle</strong> : son impact sur les
          technologies actuelles et les possibilités immenses qu’elle ouvre pour
          l’avenir.
        </p>
        <h3>Ma vision</h3>
        <p>
          J’aime <strong>comprendre</strong> comment fonctionnent les choses et{" "}
          <u>explorer</u> les mécanismes qui les animent. <br />
          Mais ce que j’aime par-dessus tout, c’est les voir <u>
            prendre vie
          </u>{" "}
          : transformer une idée abstraite en réalité tangible grâce à un code
          fonctionnel. C’est là que réside{" "}
          <strong>ma véritable motivation</strong>.
        </p>
        <p>
          Pour moi, rien ne vaut la <strong>pratique</strong> : c’est en
          expérimentant qu’on apprend, qu’on progresse, et qu’on s’implique
          pleinement dans la conception d’un projet – tout en découvrant les{" "}
          <strong>technologies</strong> qui y sont liées.
        </p>
        <h3>Mon parcours</h3>
        <Timeline />
        <p>
          Après un <strong>Bac Scientifique</strong> <u>avec mention</u> et une
          tentative de concours de médecine <strong>infructueuse</strong>, j’ai
          décidé de me réorienter vers mon deuxième domaine de prédilection :{" "}
          <u>l'ingénierie</u>. Pour cela, je suis passé par la{" "}
          <strong>classe préparatoire intégrée</strong> de{" "}
          <u>l'école Sup Galilée</u>.
        </p>

        <p>
          Lors de cette prépa, j'ai été initié à plusieurs matières
          fondamentales :
        </p>

        <ul>
          <li>
            <strong>Mathématiques :</strong> Algèbre, Analyse, Probabilités,
            Statistiques
          </li>
          <li>
            <strong>Informatique :</strong> Algorithmique et Complexité,
            Programmation en C, Heuristique
          </li>
          <li>
            <strong>Physique :</strong> Mécanique du point, Électromagnétisme,
            Optique
          </li>
          <li>
            <strong>Chimie :</strong> Thermodynamique, Chimie organique,
            Réactions
          </li>
          <li>
            <strong>Anglais :</strong> Cours, expression orale et préparation au
            TOEIC
          </li>
          <li>
            <strong>Culture Ingénieur :</strong> Techniques d'expression et de
            communication, culture scientifique et éthique
          </li>
        </ul>

        <p>
          Après deux années de travail intensif, j'ai intégré la filière{" "}
          <strong>Ingénieur Informatique</strong> de l'école Sup Galilée.
        </p>

        <p>
          J’ai validé ma première année avec succès, en consolidant mes acquis
          de prépa et en découvrant de nouvelles disciplines :
        </p>

        <ul>
          <li>
            <strong>Aspects théoriques :</strong> Analyse de graphes, Complexité
            et Algorithmie, Logique, Intelligence Artificielle, Analyse de
            données
          </li>
          <li>
            <strong>Aspects pratiques :</strong> Programmation orientée objet,
            Développement Web, Systèmes d'exploitation, avec des projets
            concrets pour appliquer les connaissances
          </li>
          <li>
            <strong>Autres domaines :</strong> Réseaux, Bases de données,
            Circuits logiques et Administration Système Linux
          </li>
          <li>
            <strong>Transversalité :</strong> Économie, Droit du travail,
            Écologie, Éthique et Anglais (en continuité avec la prépa)
          </li>
        </ul>
        <h3>Et maintenant ?</h3>

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
          <u>apprendre de nouvelles technologies</u>{""} et{" "}
          <u>contribuer à des projets concrets</u>.
        </p>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "4rem 2rem",
    backgroundColor: "#f9f9fb",
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
};


export default About;
