import React from "react";
import Timeline from "../components/Timeline";
import Wiss from "../assets/Wiss.png";
import HW from "../assets/hello-world.gif";
import BulletPoints from "../components/BulletPoints";
import cp2i from "../constants/cp2i.json";
import ing from "../constants/ing.json";
import timeline from "../constants/timeline.json";
import "../styles/About.css";

function About() {
  return (
    <section className="about-section">
      <h2 className="about-title">À propos de moi</h2>
      <div className="about-content">
        <div className="about-block" data-aos="fade-up">
          <h3>Qui suis-je ?</h3>
          <div className="flex-row">
            <div className="text-col">
              <p>
                Je m'appelle <strong>Wissam Tahiri</strong>,{" "}
                <u>étudiant en ingénieurie informatique</u> au sein de l'école
                d'ingénieurs <strong>Sup Galilée</strong>. <br />
                Passionné par le développement sous toutes ses formes, je suis
                également fasciné par le potentiel de l’
                <strong>intelligence artificielle</strong> : son impact sur les
                technologies actuelles et les possibilités immenses qu’elle
                ouvre pour l’avenir.
              </p>
            </div>
            <img
              src={Wiss}
              alt="Wissam Tahiri"
              className="about-image"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        </div>

        <div
          className="about-block-alt"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="heading-with-button">
            <h3>Avant de commencer</h3>
            <a href="/CV_WTahiri.pdf" download className="cv-button">
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
            <u>apprendre de nouvelles technologies</u> et{" "}
            <u>contribuer à des projets concrets</u>.
          </p>
        </div>

        <div
          className="about-block-alt"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3>Ma vision</h3>
          <div className="flex-row">
            <div className="text-col">
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
            <img src={HW} alt="Hello World" className="about-image" />
          </div>
        </div>

        <div className="about-block" data-aos="fade-up" data-aos-delay="300">
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
          <BulletPoints points={ing} />
        </div>
      </div>
    </section>
  );
}

export default About;
