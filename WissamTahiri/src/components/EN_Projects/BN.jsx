import BNmp4 from "../../assets/BNWeb.mp4";
import { projectBlockStyle as style } from "../../styles/styleConfig";

export default function BN() {
  return (
    <div id="naval" style={style.container}>
      <h1 style={style.title}>Battleship</h1>

      <p style={style.text}>
        Who doesn’t know this <strong>classic game</strong>? Two players try to
        sink each other’s fleet to claim victory.
      </p>

      <p style={style.text}>
        This project involved building a <u>graphical interface</u> using{" "}
        <strong>GTK</strong> and <u>adapting the game logic</u> from an existing
        codebase. We also implemented a basic{" "}
        <strong>artificial intelligence</strong> to allow solo play.
      </p>

      <p style={style.text}>
        This task was a real <u>lesson in patience</u>: understanding an
        undocumented project, identifying the relevant variables, and navigating
        through complex logic taught us the value of{" "}
        <strong>documentation</strong> and <strong>clear communication</strong>.
      </p>

      <video
        width="400"
        height="300"
        controls
        preload="none"
        style={style.image}
      >
        <source src={BNmp4} type="video/mp4" />
        Your browser does not support video playback.
      </video>

      <p style={style.text}>
        🔥 Pro tip: watch the video at <strong>2x speed</strong> for a better
        overview!
      </p>
    </div>
  );
}
