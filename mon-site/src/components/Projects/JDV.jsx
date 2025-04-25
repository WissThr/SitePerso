import triangle from "../../assets/triangle.png";
import { projectBlockStyle as style } from "../../styles/styleConfig";

export default function JDV() {
  return (
    <div id="conway" style={style.container}>
      <h1 style={style.title}>Un automate cellulaire - Jeu de la Vie</h1>

      <p style={style.text}>
        Sans doute le projet <strong>le plus complexe</strong> que j'ai eu à
        réaliser !
      </p>

      <p style={style.text}>
        Le but : développer un <u>automate cellulaire en Java</u> sous Eclipse,
        capable de fonctionner en <strong>n-dimensions</strong> et de lire des{" "}
        <u>fichiers XML</u> pour paramétrer les règles du jeu.
      </p>

      <p style={style.text}>
        Bien que l'idée du <strong>Jeu de la Vie de Conway</strong> soit simple,
        sa mise en œuvre demandait la création de <u>parseurs maison</u>, de{" "}
        <u>tableaux multidimensionnels</u> et d'
        <strong>itérateurs personnalisés</strong>.
      </p>

      <p style={style.text}>
        Exemple de la règle du <u>Jeu de la Vie de Conway</u> formatée en XML :{" "}
        <br />
        <strong>
          Ou(Si(Eq(3,Compter(G8)),1,0),Si(Eq(3,Compter(G8E)),1,0))
        </strong>
      </p>

      <p style={style.text}>
        Un défi très formateur, qui m'a appris à{" "}
        <strong>structurer un code complexe</strong> et à{" "}
        <u>gérer un projet technique exigeant</u>.
      </p>

      <img src={triangle} alt="Triangle de Sierpinski" style={style.image} />
    </div>
  );
}
