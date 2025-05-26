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
      <h1 style={style.title}>CoVoitUniv – My First Team Project</h1>

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
        This project was based on a <strong>university carpooling</strong> idea,
        proposed as part of a <u>Project Management</u> course.
      </p>

      <p style={style.text}>
        After responding to a <u>call for proposals</u>, we had{" "}
        <strong>5 months</strong> and <strong>5 sprints</strong> to deliver a
        working solution. I was mainly in charge of the{" "}
        <strong>frontend using ReactJS</strong>, connected to a{" "}
        <strong>Python Flask backend</strong>.
      </p>

      <p style={style.text}>
        This project taught me the importance of <u>teamwork</u>,{" "}
        <u>agile methodology</u>, and a{" "}
        <strong>well-structured schedule</strong>. Key features include route
        calculation, a customizable calendar, and user account management.
      </p>

      <p style={style.text}>
        You can check out the full project on{" "}
        <a
          href="https://github.com/gabsdou/CoVoitUniv"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        ! <br />
        The frontend documentation is also available below.
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
        {showPDF ? "Hide PDF" : "Show PDF: Frontend Documentation"}
      </button>

      {showPDF && (
        <iframe
          src={rapport}
          width="100%"
          height="600px"
          style={{ border: "none", marginTop: "1rem" }}
          title="CoVoit Documentation"
        ></iframe>
      )}
    </div>
  );
}
