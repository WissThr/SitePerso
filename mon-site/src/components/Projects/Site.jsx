import { Link } from "react-router-dom";
import { projectBlockStyle as style } from "../../styles/styleConfig";

export default function Site() {
  return (
    <div id="site" style={style.container}>
      <h1 style={style.title}>Mon site personnel</h1>

      <p style={style.text}>
        Inspiré par des amis développeurs, j'ai décidé de créer{" "}
        <strong>mon propre site web</strong> pour me présenter et partager mes
        projets.
      </p>

      <p style={style.text}>
        Depuis petit, le web me passionne : de <u>Youtube</u> à <u>Wikipédia</u>
        , je voulais comprendre <strong>comment ça marche</strong>.
      </p>

      <p style={style.text}>
        Avec ce projet, j'ai pu{" "}
        <strong>
          répondre à mes questions d'enfance, mais également des questions plus
          techniques
        </strong>{" "}
        : quelle technologie utiliser ? Comment créer des <u>carrousels</u> ?
        Comment rendre un site <strong>vivant et interactif</strong> ?
      </p>

      <p style={style.text}>
        Ce site est développé en <strong>ReactJS</strong> avec le framework{" "}
        <strong>Vite</strong> pour un développement rapide et dynamique. Il est
        conçu sans backend, l'objectif étant de <u>présenter mon profil</u> et
        mes réalisations.
      </p>

      <p style={style.text}>
        Grâce à des forums et à l'aide d'outils comme Chat GPT ou Copilot
        ChatGPT, j'ai pu approfondir mes compétences et réaliser un site qui{" "}
        <u>me ressemble</u>.
      </p>

      <p style={style.text}>
        Étant soucieux de m'améliorer, vos retours sont les bienvenus via la
        section <Link to="/contact">Contact</Link> ! 😁
      </p>
    </div>
  );
}
