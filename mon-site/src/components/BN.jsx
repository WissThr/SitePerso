import BNmp4 from "../assets/BNWeb.mp4";

export default function BN() {
  return (
    <div id="naval">
      <h1>Bataille Navale</h1>
      <p>
        Vous connaissez forcément ce grandclassique qu'est la bataille navale. 2
        joueurs essayent de couler tous les bateaux de leurs adversaires pour
        espérer la victoire.
        <br />
        Pour ce projet, on a du faire une interface graphique pour le jeu grâce
        à GTK. On a également dû comprendre et réajuster le code fourni pour la
        logique du jeu afin de l'adapter et de faire tourner correctement notre
        jeu. Par la suite nous devions également ajouter l'IA adverse pour
        rendre le jeu jouable seul.
        <br /> Ce fut une expérience assez éprouvante car ne pas savoir quelles
        variables envoyer au controleur, ne pas savoir si telle ou telle feature
        était déjà présente et d'autres nous on bien fait comprendre
        l'importance d'une bonne documentation et appris à dialoguer et faire
        avec ce qu'on a pour évoluer.
      </p>
      <video
        width="400"
        height="300"
        controls
        preload="none"
        style={{ borderRadius: "8px" }}
      >
        <source src={BNmp4} type="video/mp4" />
        Votre navigateur ne supporte pas la lecture vidéo.
      </video>
    </div>
  );
}
