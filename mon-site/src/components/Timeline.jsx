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
  const isMobile = window.innerWidth <= 768;

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
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
        <style>
          {`
            .slick-prev, .slick-next {
              z-index: 10;
              top: 50%;
              transform: translateY(-50%);
            }

            .slick-prev {
              left: -35px;
            }

            .slick-next {
              right: -25px;
            }

            .slick-prev:before,
            .slick-next:before {
              color: black;
              font-size: 30px;
            }

            @media (hover: hover) {
              .timeline-btn:hover {
                background-color: #365f94;
              }
            }

            * {
                -webkit-tap-highlight-color: transparent;
              }

            .timeline-card {
              user-select: none;
              -webkit-user-select: none;
              -webkit-touch-callout: none;
              touch-action: pan-y;
            }
                
            .timeline-card:active {
              transform: none !important;
            }
      `}
        </style>

        <Slider {...settings}>
          {events.map((event, index) => (
            <div key={index} style={styles.cardWrapper}>
              <div className="timeline-card" style={styles.card}>
                <div style={styles.icon}>
                  {imageMap[event.icon] ? (
                    <img
                      src={imageMap[event.icon]}
                      alt="icon"
                      style={{
                        height: "70px",
                        width: "auto",
                        display: "block",
                        margin: "0 auto",
                      }}
                    />
                  ) : (
                    <span style={{ fontSize: isMobile ? "2.5rem" : "3rem" }}>
                      {event.icon}
                    </span>
                  )}
                </div>

                <div style={styles.year}>{event.year}</div>
                <h4
                  style={{
                    ...styles.cardTitle,
                    fontSize: isMobile ? "1.3rem" : "2rem",
                  }}
                >
                  {event.title}
                </h4>
                <p
                  style={{
                    ...styles.cardDesc,
                    fontSize: isMobile ? "1rem" : "1.5rem",
                  }}
                >
                  {event.desc}
                </p>

                {event.key && (
                  <button
                    className="timeline-btn"
                    style={{
                      ...styles.button,
                      fontSize: isMobile ? "1.1rem" : "2rem",
                    }}
                  >
                    Voir le projet
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
    width: "90%",
    minHeight: "300px",
    margin: "0 auto",
    padding: "0 1rem",
  },
  cardWrapper: {
    padding: "0",
    boxSizing: "border-box",
  },
  card: {
    backgroundColor: "#DBE2EF",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    padding: "1rem",
    textAlign: "center",
    height: "100%",
    minHeight: "400px",
    margin: "0 10px",
  },
  icon: {
    fontSize: "3rem",
    marginBottom: "0.5rem",
  },
  year: {
    fontWeight: "bold",
    color: "#112D4E",
    fontSize: "1.3rem",
    marginBottom: "0.3rem",
  },
  cardTitle: {
    fontWeight: "600",
    marginBottom: "0.5rem",
    color: "#112D4E",
  },
  cardDesc: {
    color: "black",
  },
  button: {
    marginTop: "0.5rem",
    padding: "0.5rem 1rem",
    backgroundColor: "#3F72AF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
