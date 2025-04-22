import simon from "../assets/SimonGif.gif";
export default function Simon() {
  return (
    <div id="simon">
      <h4>Simon</h4>
      <p>
        Simon est un jeu de mémoire où le système effectue une séquence de notes
        à reproduire dans l'ordre qui se complexifie de manche en manche.
        C'était mon tout premier programme que j'ai fait de A à Z et c'est celui
        qui m'a donné envie de me lancer dans la programmation.
        <br />
        <img
          src={simon}
          alt="Simon"
          style={{ width: "400px", height: "300px" }}
        />
        <br />
        D'ailleurs pourquoi ne pas le refaire en React ?
      </p>
      <p>Travaux en cours!</p>
    </div>
  );
}
