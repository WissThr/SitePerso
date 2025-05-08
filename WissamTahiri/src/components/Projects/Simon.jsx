import simon from "../../assets/SimonGif.gif";
import { projectBlockStyle as style } from "../../styles/styleConfig";

export default function Simon() {
  return (
    <div id="simon" style={style.container}>
      <h1 style={style.title}>Simon - Mon tout premier programme</h1>

      <p style={style.text}>
        <strong>Simon</strong> est un jeu de mémoire où il faut{" "}
        <u>reproduire des séquences de notes</u> de plus en plus longues.
      </p>

      <p style={style.text}>
        C'est le <strong>tout premier projet</strong> que j'ai réalisé en{" "}
        <strong>C</strong> à l'aide d'une librairie graphique fournie par un
        professeur.
      </p>

      <p style={style.text}>
        Ce projet m'a appris à <u>me débrouiller seul</u>, à comprendre la
        logique de la programmation, et surtout c'est celui qui m'a introduit
        aux joies du code et qui m'a vraiment donné envie de suivre cette voie.
      </p>

      <img src={simon} alt="Simon" style={style.image} />

      <p style={style.text}>
        🚧 D'ailleurs, pourquoi ne pas <strong>le recréer en React</strong> ?
        <br />
        Travaux en cours ! 😉
      </p>
    </div>
  );
}
