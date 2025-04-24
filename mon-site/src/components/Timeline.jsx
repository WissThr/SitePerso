import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import simon from "../assets/simon.png";
import amazon from "../assets/amazon.svg";
import conway from "../assets/conway.gif";
import covoit from "../assets/covoit.png";
import VV155 from "../assets/VV155.png";

const imageMap = {
  simon,
  amazon,
  conway,
  covoit,
  VV155,
};

export default function Timeline({ events, h }) {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // valeur par défaut
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024, // tablettes ou petits laptops
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, // mobiles
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section style={styles.section}>
      <h4 style={styles.title}>{h}</h4>

      <div style={styles.sliderWrapper}>
        <Slider {...settings}>
          {events.map((event, index) => (
            <div key={index} style={styles.cardWrapper}>
              <div style={styles.card}>
                <div style={styles.icon}>
                  {imageMap[event.icon] ? (
                    <img
                      src={imageMap[event.icon]}
                      alt="icon"
                      style={{
                        height: 40,
                        width: "auto",
                        display: "block",
                        margin: "0 auto",
                      }}
                    />
                  ) : (
                    event.icon
                  )}
                </div>

                <div style={styles.year}>{event.year}</div>
                <h4 style={styles.cardTitle}>{event.title}</h4>
                <p style={styles.cardDesc}>{event.desc}</p>

                {event.key && (
                  <button
                    style={styles.button}
                    onClick={() => {
                      const section = document.getElementById(event.key);
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    Go to
                  </button>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "2rem 1rem",
    backgroundColor: "#f7f9fc",
  },
  title: {
    textAlign: "center",
    fontSize: "1.8rem",
    marginBottom: "2rem",
    color: "#222",
  },
  sliderWrapper: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 1rem",
  },
  cardWrapper: {
    padding: "0 20px",
    boxSizing: "border-box",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    padding: "1rem",
    textAlign: "center",
    height: "100%",
  },
  icon: {
    fontSize: "2rem",
    marginBottom: "0.5rem",
  },
  year: {
    fontWeight: "bold",
    color: "#007bff",
    fontSize: "1rem",
    marginBottom: "0.3rem",
  },
  cardTitle: {
    fontSize: "1.1rem",
    fontWeight: "600",
    marginBottom: "0.5rem",
  },
  cardDesc: {
    fontSize: "0.95rem",
    color: "#555",
  },
  button: {
    marginTop: "0.5rem",
    padding: "0.5rem 1rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
