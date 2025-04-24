import audio from "../assets/audio.png";
import help from "../assets/help.png";
export default function VV155() {
  return (
    <div id="VV155">
      <h1>VV155, mon 1er bot personnel</h1>
      <p>
        C'est mon premier projet personnel que j'ai fait afin de répondre à un
        besoin. En effet, j'ai un groupe d'amis dans ma promo avec qui on
        discute énormément sur discord et avec lequel on joue à de nombreux de
        jeux. Sauf que souvent on voulait écouter de la musique ensemble mais on
        ne savait pas trop comment faire. J'ai alors eu l'idée de créer ce bot
        afin de répondre à ce besoin et même plus encore.
        <br />
        <img
          src={audio}
          alt="audio"
          style={{ width: "200px", height: "300px" }}
        />
        <br />
        Au final en plus de pouvoir venir faire lancer des musiques en vocal
        avec un système de playlist et autres, il pouvait faire des pendus, un
        chifoumi contre un bot ou une personne, mettre des gifs ou encore
        d'autres jeux ou petits trucs sympas.
        <br />
        <img
          src={help}
          alt="help"
          style={{ width: "200px", height: "300px" }}
        />
        <br />
        C'était assez sympa pour apprendre python et surtout comment faire pour
        monter un cahier des charges et tout faire pour le respecter tout en
        prenant des libertés. Il reste très personnel avec des "private jokes"
        et autre mais il m'a appris énormément et il est fonctionnel et adapté à
        toutes sortes de situation.
        <br />
        J'avais même prévu de lui intégrer un système de data pour obtenir nos
        performances dans certains jeux vidéos mais malheureusement les API des
        jeux concernés ont été modifiées et je n'ai pas pu aboutir ce projet dû
        à un manque d'accès à certaines données.
        <br />
        Un mini-RPG inclus est toujours en cours de développement.
      </p>
    </div>
  );
}
