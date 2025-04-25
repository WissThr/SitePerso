import { useEffect } from "react";
import "../../styles/train.css";
import "./train.js";
import { projectBlockStyle as style } from "../../styles/styleConfig";

export default function TrainSimulator() {
  useEffect(() => {
    if (typeof window.tchou === "function") {
      window.tchou();
    }
  }, []);

  return (
    <div id="train" style={style.container}>
      <h1 style={style.title}>Simulateur de trains</h1>

      <p style={style.text}>
        Un projet amusant pour apprendre <strong>JavaScript</strong> tout en
        créant un <u>simulateur ferroviaire</u> interactif !
      </p>

      <p style={style.text}>
        Rails, locomotives, wagons... Il suffit de{" "}
        <strong>cliquer sur les boutons</strong> pour construire votre propre
        réseau et voir vos trains en action sur le <u>canvas</u>.
      </p>

      <p style={style.text}>
        J'ai légèrement adapté ce projet pour l'implémenter sur ce site, et
        mieux comprendre <strong>le fonctionnement des événements en JS</strong>
        .
      </p>

      <canvas
        id="simulateur"
        width="1050"
        height="600"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          margin: "1rem auto",
          maxWidth: "1000px",
          borderRadius: "10px",
        }}
      >
        Simulateur ferroviaire (votre navigateur ne prend pas en charge canvas)
      </canvas>

      <div
        id="boutons"
        style={{
          textAlign: "center",
          marginTop: "2rem",
          backgroundColor: "#DBE2EF",
        }}
      >
        {[
          "foret",
          "eau",
          "rail-horizontal",
          "rail-vertical",
          "rail-droite-vers-haut",
          "rail-haut-vers-droite",
          "rail-droite-vers-bas",
          "rail-bas-vers-droite",
        ].map((item) => (
          <input
            key={item}
            type="image"
            id={`bouton_${item.replace(/-/g, "_")}`}
            alt={item}
            src={`/images/${item}.png`}
            style={{ margin: "0.5rem" }}
          />
        ))}

        {[
          ["train_1", "locomotive"],
          ["train_2", "loco-1-wagon"],
          ["train_4", "loco-3-wagons"],
          ["train_6", "loco-5-wagons"],
        ].map(([id, src]) => (
          <input
            key={id}
            type="image"
            id={`bouton_${id}`}
            alt={id}
            src={`/images/${src}.png`}
            style={{ margin: "0.5rem" }}
          />
        ))}

        <div style={{ marginTop: "1rem", backgroundColor: "#DBE2EF" }}>
          <button
            type="button"
            id="bouton_pause"
            onClick={() => window.togglePause()}
            style={buttonStyle}
          >
            Pause
          </button>
          <button
            type="button"
            id="bouton_clear_trains"
            onClick={() => window.clearTrains()}
            style={buttonStyle}
          >
            Clear Trains
          </button>
          <button type="button" id="bouton_clear" style={buttonStyle}>
            Clear Débris
          </button>
        </div>
      </div>
    </div>
  );
}

const buttonStyle = {
  margin: "0.5rem",
  padding: "10px 15px",
  fontSize: "1rem",
  backgroundColor: "#3F72AF",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};
