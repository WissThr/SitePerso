import { useEffect } from "react";
import "../styles/train.css";
import "../components/train.js";

export default function TrainSimulator() {
  useEffect(() => {
    if (typeof window.tchou === "function") {
      window.tchou();
    }
  }, []);

  return (
    <div id="train">
      <h1>Simulateur de trains</h1>
      <p>
        Un simulateur de trains en JavaScript, avec des rails et des trains
        animés. Projet pour apprendre à utiliser Java Script que j'ai un petit
        peu modifié pour l'implémenter sur mon site.
        <br />
        Profitez-en!
      </p>

      <canvas id="simulateur" width="1050" height="600">
        Simulateur ferroviaire (votre navigateur ne prend pas en charge canvas)
      </canvas>

      <div id="boutons">
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
          />
        ))}

        <button
          type="button"
          id="bouton_pause"
          onClick={() => window.togglePause()}
        >
          Pause
        </button>

        <button
          type="button"
          id="bouton_clear_trains"
          onClick={() => window.clearTrains()}
        >
          Clear trains
        </button>

        <button type="button" id="bouton_clear">
          Clear débris
        </button>
      </div>
    </div>
  );
}
