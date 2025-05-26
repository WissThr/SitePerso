import { useEffect } from "react";
import "../../styles/train.css";
import "./train.js";
import { projectBlockStyle as style } from "../../styles/styleConfig.js";

export default function TrainSimulator() {
  useEffect(() => {
    if (typeof window.tchou === "function") {
      window.tchou();
    }
  }, []);

  return (
    <div id="train" style={style.container}>
      <h1 style={style.title}>Train Simulator</h1>

      <p style={style.text}>
        A fun project to learn <strong>JavaScript</strong> while building an
        interactive <u>train simulator</u>!
      </p>

      <p style={style.text}>
        Rails, locomotives, wagons... Just <strong>click the buttons</strong> to
        build your own rail network and watch your trains in action on the{" "}
        <u>canvas</u>.
      </p>

      <p style={style.text}>
        I slightly adapted this project to embed it into this site and to better
        understand how <strong>JavaScript events</strong> work.
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
        Train simulator (your browser does not support the canvas element)
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
            Clear Garbage
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
