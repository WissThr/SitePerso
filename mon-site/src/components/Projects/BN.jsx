import BNmp4 from "../../assets/BNWeb.mp4";
import { projectBlockStyle as style } from "../../styles/styleConfig";

export default function BN() {
  return (
    <div id="naval" style={style.container}>
      <h1 style={style.title}>Bataille Navale</h1>

      <p style={style.text}>
        Qui ne connaît pas ce <strong>grand classique</strong> ? Deux joueurs
        tentent de couler la flotte adverse pour remporter la victoire.
      </p>

      <p style={style.text}>
        Ce projet consistait à créer une <u>interface graphique</u> avec{" "}
        <strong>GTK</strong> et à <u>réajuster la logique du jeu</u> à partir
        d'un code existant. Nous avons également développé une petite{" "}
        <strong>intelligence artificielle</strong> très simple pour jouer en
        solo.
      </p>

      <p style={style.text}>
        Ce travail a été une vraie <u>leçon de patience</u> : comprendre un
        projet mal documenté, identifier les variables utiles et naviguer dans
        du code complexe nous a appris l'importance de la{" "}
        <strong>documentation</strong> et de la <strong>communication</strong>.
      </p>

      <video
        width="400"
        height="300"
        controls
        preload="none"
        style={style.image}
      >
        <source src={BNmp4} type="video/mp4" />
        Votre navigateur ne supporte pas la lecture vidéo.
      </video>

      <p style={style.text}>
        🔥 Petit conseil : regardez la vidéo en <strong>vitesse 2x</strong> pour
        un meilleur aperçu !
      </p>
    </div>
  );
}
