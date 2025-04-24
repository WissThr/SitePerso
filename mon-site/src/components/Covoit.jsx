import { useState } from "react";
import Slider from "react-slick";
import rapport from "../assets/Covoit/rapport-covoit.pdf";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import accueil from "../assets/Covoit/accueil.png";
import calendrier from "../assets/Covoit/calendrier.png";
import map from "../assets/Covoit/map.png";
export default function Covoit() {
  const [showPDF, setShowPDF] = useState(false);

  const togglePDF = () => {
    setShowPDF((prev) => !prev);
  };

  const images = [accueil, calendrier, map];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div id="covoit">
      <h1>Covoit, mon 1er projet de groupe</h1>
      <style>
        {`
    .slick-prev, .slick-next {
      z-index: 10;
    }

    .slick-prev:before,
    .slick-next:before {
      color: black;
      font-size: 30px;
    }
  `}
      </style>

      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <Slider {...sliderSettings}>
          {images.map((src, index) => (
            <div key={index}>
              <img
                src={src}
                alt={`screenshot ${index + 1}`}
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "400px",
                  objectFit: "contain",
                  borderRadius: "10px",
                }}
              />
            </div>
          ))}
        </Slider>
      </div>
      <p>
        C'est mon premier projet de groupe que j'ai fait avec des amis. Le sujet
        a été donné par 2 professeurs de notre école, soucieux de l'empreinte
        écologique de chacuns, qui voyaient bien à l'avenir un système de
        covoiturage pour le personnel de l'université. Ainsi ils ont proposé
        leur idée dans le cadre de notre cours "Gestion de Projets".
        <br />
        On a alors eu une soudaine inspiration pour l'ensemble du projet et nous
        avons dû alors répondre à un appel d'offre afin de pouvoir être
        sélectionnés et s'étaler sur le sujet.
        <br />
        Nous avions alors un délai de 5 mois, séparés en 5 sprints, pour
        concrétiser au maximum ce projet selon les attentes des clients avec qui
        nous évoluions constamment. Pour cela on a du se répartir les tâches et
        je me suis principalement occupé du frontend.
        <br />
        Nous avons donc réalisé une application web, avec un frontend en ReactJS
        et un backend avec Python reliés tous 2 par Flask. Ce projet a été très
        formateur pour moi car j'ai pu découvrir le travail en équipe, la
        discipline et la régularité nécessaire pour aboutir un tel projet. Au
        final nous étions plutôt content du résultat final avec diverses
        fonctionnalités comme un calcul de temps et de trajectoire, un
        calendrier personnalisable, un système de créations d'utilisateurs que
        l'on voyait partout mais dont on ne savait quasiment rien en pratique.
        Vous trouverez{" "}
        <a href="https://github.com/gabsdou/CoVoitUniv">
          le lien vers le projet sur GitHub
        </a>
        , avec les rapports, la documentation, etc... Mais voilà déjà un apercu
        de mon travail.
      </p>
      <button
        onClick={togglePDF}
        style={{
          marginTop: "2rem",
          padding: "10px 20px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#007BFF",
          color: "white",
          cursor: "pointer",
          fontSize: "1rem",
        }}
      >
        {showPDF ? "Masquer le PDF" : "Afficher le PDF"}
      </button>

      {showPDF && (
        <iframe
          src={rapport}
          width="100%"
          height="600px"
          style={{ border: "none", marginTop: "1rem" }}
          title="Rapport Covoit"
        ></iframe>
      )}
    </div>
  );
}
