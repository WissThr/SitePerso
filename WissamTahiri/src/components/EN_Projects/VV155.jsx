import audio from "../../assets/audio.png";
import help from "../../assets/help.png";
import { projectBlockStyle as style } from "../../styles/styleConfig";

export default function VV155() {
  return (
    <div id="VV155" style={style.container}>
      <h1 style={style.title}>VV155 – My First Discord Bot</h1>

      <div style={styles.flexContainer}>
        <div style={styles.textCol}>
          <p style={style.text}>
            <strong>VV155</strong> was my <u>first personal project</u> — a
            Discord bot created to solve a real need within my friend group.
          </p>

          <p style={style.text}>
            Originally designed for <strong>shared music streaming</strong>,
            VV155 quickly expanded with features like <u>games</u>, <u>GIFs</u>,{" "}
            <u>hangman</u>, <u>rock-paper-scissors</u>... It became a true{" "}
            <strong>server companion</strong>!
          </p>

          <p style={style.text}>
            This project allowed me to learn <strong>Python</strong> and get
            started with <u>personal project management</u>. A <u>mini-RPG</u>{" "}
            is currently in development!
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
    flexWrap: "wrap", // for mobile
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
