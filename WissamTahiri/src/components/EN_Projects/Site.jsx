import { Link } from "react-router-dom";
import { projectBlockStyle as style } from "../../styles/styleConfig";

export default function Site() {
  return (
    <div id="site" style={style.container}>
      <h1 style={style.title}>My Personal Website</h1>

      <p style={style.text}>
        Inspired by some{" "}
        <a href="https://marina-gonzalezfigueroa.mds-lyon.yt/">friends</a>, I
        decided to create <strong>my own website</strong> to introduce myself
        and showcase my projects.
      </p>

      <p style={style.text}>
        I've been fascinated by the web since I was a kid — from <u>Youtube</u>{" "}
        to <u>Wikipedia</u>, I always wanted to understand{" "}
        <strong>how it all works</strong>.
      </p>

      <p style={style.text}>
        Through this project, I was able to{" "}
        <strong>
          answer childhood questions, but also tackle more technical ones
        </strong>
        : what technology should I use? How do you build a <u>carousel</u>? How
        do you make a site <strong>dynamic and interactive</strong>?
      </p>

      <p style={style.text}>
        This site is built using <strong>ReactJS</strong> with the{" "}
        <strong>Vite</strong> framework for fast and efficient development. It’s
        designed without a backend, with the main goal being to{" "}
        <u>showcase my profile</u> and my work.
      </p>

      <p style={style.text}>
        Thanks to <strong>forums</strong> and <strong>modern tools</strong>, I
        was able to deepen my skills and create a site that truly{" "}
        <u>reflects who I am</u>.
      </p>

      <p style={style.text}>
        I'm always looking to improve, so feel free to share your feedback via
        the <Link to="/en/contact">Contact</Link> page! 😁
      </p>
    </div>
  );
}
