import triangle from "../assets/triangle.png";

export default function JDV() {
  return (
    <div id="conway">
      <h1>Un automate cellulaire</h1>
      <p>
        Surement LE projet le plus difficile de cette liste! <br />
        On devait faire un automate cellulaire en Java via l'IDE Eclipse. <br />
        Chose qui parait simple au premier abord mais qui s'est révélée être un
        vrai carnage au vu de la liste de choses à faire et notre temps
        disponible mais qui a été plutôt fonctionnel à quelques détails prêts.
        <br />
        Le projet en soi était simple si l'on s'en tenait seulement à la forme
        la plus pure du jeu de la vie avec les règles de Conway. Cependant, il
        nous a fallu le coder en n-dimensions à l'aide d'Itérateurs, faits
        maison (que j'espère ne plus jamais revoir), de tableaux
        multidimensionnels, faits maison également mais ceux-ci étaient assez
        simples, et enfin d'un parseur de fichier xml afin que notre programme
        puisse lire la règle et les différents paramètres rentrés en texte, la
        décrypter et l'appliquer à chaque case de notre super matrice. Par
        exemple, notre belle règle de Conway s'écrivait:{" "}
        <span>Ou(Si(Eq(3,Compter(G8)),1,0),Si(Eq(3,Compter(G8E)),1,0))</span>
        <br />
        Bien que l'exercice fut difficile, le résultat en valait la peine.
      </p>
      <img
        src={triangle}
        alt="triangle de Sierpinski"
        style={{ width: "400px", height: "300px" }}
      />
    </div>
  );
}
