import triangle from "../../assets/triangle.png";
import { projectBlockStyle as style } from "../../styles/styleConfig";

export default function JDV() {
  return (
    <div id="conway" style={style.container}>
      <h1 style={style.title}>A Cellular Automaton – Game of Life</h1>

      <p style={style.text}>
        Probably the <strong>most complex project</strong> I’ve worked on!
      </p>

      <p style={style.text}>
        The goal was to develop a <u>cellular automaton in Java</u> using
        Eclipse, capable of running in <strong>n-dimensions</strong> and reading{" "}
        <u>XML files</u> to configure the game rules.
      </p>

      <p style={style.text}>
        While the idea behind <strong>Conway’s Game of Life</strong> is simple,
        implementing it required building <u>custom parsers</u>,{" "}
        <u>multidimensional arrays</u>, and <strong>custom iterators</strong>.
      </p>

      <p style={style.text}>
        Example of Conway’s rule written in XML format: <br />
        <strong>
          Ou(Si(Eq(3,Compter(G8)),1,0),Si(Eq(3,Compter(G8E)),1,0))
        </strong>
      </p>

      <p style={style.text}>
        A highly instructive challenge that taught me how to{" "}
        <strong>structure complex code</strong> and{" "}
        <u>manage a demanding technical project</u>.
      </p>

      <img src={triangle} alt="Sierpinski triangle" style={style.image} />
    </div>
  );
}
