import { useState } from "react";
import Slider from "react-slick";
import rapport from "../../assets/Covoit/rapport-covoit.pdf";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import accueil from "../../assets/Covoit/accueil.png";
import calendrier from "../../assets/Covoit/calendrier.png";
import map from "../../assets/Covoit/map.png";
import { projectBlockStyle as style } from "../../styles/styleConfig";

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
    <div id="covoit" style={style.container}>
      <h1 style={style.title}>CoVoitUniv - Mon premier projet de groupe</h1>

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

      <p style={style.text}>
        Ce projet est né d'une idée de{" "}
        <strong>covoiturage universitaire</strong>, proposée dans le cadre d'un
        cours de <u>Gestion de Projets</u>.
      </p>

      <p style={style.text}>
        Après avoir répondu à un <u>appel d'offre</u>, nous avions{" "}
        <strong>5 mois</strong> et <strong>5 sprints</strong> pour livrer une
        solution fonctionnelle. Je me suis principalement chargé du{" "}
        <strong>frontend</strong> en ReactJS, connecté à un{" "}
        <strong>backend Flask</strong> en Python.
      </p>

      <p style={style.text}>
        Ce projet m'a permis de découvrir le <u>travail en équipe</u>, la{" "}
        <u>discipline agile</u> et de comprendre l'importance d'un{" "}
        <strong>planning rigoureux</strong>. Parmi nos fonctionnalités : calcul
        de trajets, calendrier personnalisable, création d'utilisateurs...
      </p>

      <p style={style.text}>
        Retrouvez le projet complet sur{" "}
        <a
          href="https://github.com/gabsdou/CoVoitUniv"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        ! <br />
        Vous retrouverez également la doc du frontend en cliquant sur le bouton
        ci-dessous.
      </p>

      <button
        onClick={togglePDF}
        style={{
          marginTop: "2rem",
          padding: "10px 20px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#3F72AF",
          color: "white",
          cursor: "pointer",
          fontSize: "1rem",
        }}
      >
        {showPDF
          ? "Masquer le PDF"
          : "Afficher le PDF : Documentation Frontend"}
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
