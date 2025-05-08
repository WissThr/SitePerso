import audio from "../../assets/audio.png";
import help from "../../assets/help.png";
import { projectBlockStyle as style } from "../../styles/styleConfig";

export default function VV155() {
  return (
    <div id="VV155" style={style.container}>
      <h1 style={style.title}>VV155 - Mon premier bot Discord</h1>

      <div style={styles.flexContainer}>
        <div style={styles.textCol}>
          <p style={style.text}>
            <strong>VV155</strong> est mon <u>premier projet personnel</u> : un
            bot Discord créé pour répondre à un besoin concret au sein de mon
            groupe d'amis.
          </p>

          <p style={style.text}>
            Initialement pensé pour écouter de la{" "}
            <strong>musique en commun</strong>, VV155 s'est rapidement étoffé :
            <u>jeux</u>, <u>gifs</u>, <u>pendus</u>, <u>chifoumi</u>... Il est
            devenu un véritable <strong>compagnon de serveur</strong> !
          </p>

          <p style={style.text}>
            Ce projet m'a permis d'apprendre <strong>Python</strong> et de
            m'initier à la <u>gestion de projets personnels</u>. Un{" "}
            <u>mini-RPG</u> est d'ailleurs en cours de développement !
          </p>
        </div>

        <div style={styles.imageCol}>
          <img src={audio} alt="Audio command" style={styles.image} />
          <img src={help} alt="Help menu" style={styles.image} />
        </div>
      </div>
    </div>
  );
}

const styles = {
  flexContainer: {
    display: "flex",
    gap: "2rem",
    alignItems: "flex-start",
    flexWrap: "wrap", // pour mobile
    marginTop: "1.5rem",
  },
  textCol: {
    flex: "2",
    minWidth: "250px",
  },
  imageCol: {
    flex: "1",
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    minWidth: "200px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  image: {
    width: "250px",
    height: "auto",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
};
