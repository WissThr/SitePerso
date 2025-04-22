import React from "react";
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
  return (
    <section style={styles.section}>
      <h4 style={styles.title}>{h}</h4>
      <div style={styles.timelineContainer}>
        <div style={styles.timeline}>
          {events.map((event, index) => (
            <div key={index} style={styles.card}>
              <div style={styles.icon}>
                {imageMap[event.icon] ? (
                  <img
                    src={imageMap[event.icon]}
                    alt="icon"
                    style={{ width: "auto", height: 40 }}
                  />
                ) : (
                  event.icon
                )}
              </div>

              <div style={styles.year}>{event.year}</div>
              <h4 style={styles.cardTitle}>{event.title}</h4>
              <p style={styles.cardDesc}>{event.desc}</p>
              {event.key ? (
                <button
                  style={{
                    marginTop: "0.5rem",
                    padding: "0.5rem 1rem",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    const section = document.getElementById(event.key);
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Go to
                </button>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "0rem 1rem",
    backgroundColor: "#f7f9fc",
  },
  title: {
    textAlign: "center",
    fontSize: "1.8rem",
    marginBottom: "2rem",
    color: "#222",
  },
  timelineContainer: {
    overflowX: "auto",
    paddingBottom: "1rem",
  },
  timeline: {
    display: "flex",
    gap: "2rem",
    minWidth: "700px",
    padding: "0 2rem",
  },
  card: {
    flex: "0 0 200px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    padding: "1rem",
    textAlign: "center",
    transition: "transform 0.2s",
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
};
