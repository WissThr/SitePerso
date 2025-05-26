import simon from "../../assets/SimonGif.gif";
import { projectBlockStyle as style } from "../../styles/styleConfig";

export default function Simon() {
  return (
    <div id="simon" style={style.container}>
      <h1 style={style.title}>Simon – My Very First Program</h1>

      <p style={style.text}>
        <strong>Simon</strong> is a memory game where you must{" "}
        <u>repeat increasingly long sequences of notes</u>.
      </p>

      <p style={style.text}>
        This was the <strong>very first project</strong> I built in{" "}
        <strong>C</strong>, using a graphics library provided by a professor.
      </p>

      <p style={style.text}>
        This project taught me how to <u>figure things out on my own</u>,
        understand programming logic, and most importantly, it's what first
        introduced me to the joy of coding and made me want to pursue it
        further.
      </p>

      <img src={simon} alt="Simon" style={style.image} />

      <p style={style.text}>
        🚧 Actually… why not <strong>rebuild it in React</strong>?
        <br />
        Work in progress! 😉
      </p>
    </div>
  );
}
