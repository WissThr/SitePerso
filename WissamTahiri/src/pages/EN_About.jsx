import React from "react";
import Timeline from "../components/Timeline";
import Wiss from "../assets/Wiss.jpg";
import HW from "../assets/hello-world.gif";
import BulletPoints from "../components/BulletPoints";
import cp2i from "../constants/EN_cp2i.json";
import ing from "../constants/EN_ing.json";
import timeline from "../constants/EN_timeline.json";
import "../styles/About.css";

function About() {
  return (
    <section className="about-section">
      <h2 className="about-title">About me</h2>
      <div className="about-content">
        <div className="about-block" data-aos="fade-up">
          <h3>Who am I ?</h3>
          <div className="flex-row">
            <div className="text-col">
              <p>
                Let me introduce myself : I'm <strong>Wissam Tahiri</strong>, a{" "}
                <u>Computer Science Engineering student</u> at the engineering
                school <strong>Sup Galilée</strong>. <br />
                Passionate about development in all its forms, I am also
                fascinated by the potential of{" "}
                <strong>artificial intelligence</strong>: its impact on current
                technologies and the huge possibilities it opens for the future.
              </p>
            </div>
            <img
              src={Wiss}
              alt="Wissam Tahiri"
              className="about-image"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        </div>

        <div
          className="about-block-alt"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="heading-with-button">
            <h3>Before we begin</h3>
            <a href="/CV_WTahiri.pdf" download className="cv-button">
              📄 Download my resume!
            </a>
          </div>

          <p>
            I am currently in the <u>second year</u> of my{" "}
            <strong>engineering program</strong>{" "}
            <em>(equivalent to a Master's level / Bac+4)</em> at Sup Galilée. I
            am actively looking for a <strong>2 to 4-month internship</strong>{" "}
            or a <strong>work-study opportunity</strong> to further develop my
            practical skills in the field.
          </p>

          <p>
            Throughout my studies, I have particularly enjoyed the fields of{" "}
            <strong>Web development</strong>,{" "}
            <strong>software development</strong>, and{" "}
            <strong>system administration</strong>, which I would like to
            explore further in a professional context.
          </p>

          <p>
            Curious, rigorous, and motivated, I am eager to join a dynamic team
            where I can <u>apply my knowledge</u>, <u>learn new technologies</u>
            , and <u>contribute to concrete projects</u>.
          </p>
        </div>

        <div
          className="about-block-alt"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3>My philosophy</h3>
          <div className="flex-row">
            <div className="text-col">
              <p>
                I'm mostly looking for <strong>understanding</strong> how things
                work and <u>exploring</u> the mechanisms behind them. <br />
                But what I like the most is seeing them <u>come to life</u>:
                transforming an abstract idea into a real and working system
                through functional code. That is where{" "}
                <strong>my true motivation</strong>
                lies.
              </p>
              <p>
                For me, nothing beats <strong>hands-on experience</strong>: it’s
                by experimenting that we learn, progress, and fully engage in
                the design of a project – all while discovering the{" "}
                <strong>technologies</strong> related to it.
              </p>
            </div>
            <img src={HW} alt="Hello World" className="about-image" />
          </div>
        </div>

        <div className="about-block" data-aos="fade-up" data-aos-delay="300">
          <h3>My scholar cursus</h3>
          <Timeline
            events={timeline}
            h={"A summary of my academic background"}
          />
          <p>
            After a <strong>Scientific Baccalaureate</strong> with honors and an
            unsuccessful year in medicine, I decided to redirect myself towards
            my second area of interest: <u>engineering</u>. To do this, I went
            through the <strong>"Classe Prépa"</strong> of <u>Sup Galilée</u>{" "}
            which is a special 2 years course in France to warm us up to the
            engineering classes.
          </p>

          <p>
            Throughout these two years, I have developed a solid foundation in :{" "}
          </p>

          <BulletPoints points={cp2i} />

          <p>
            After those 2 years, I joined the{" "}
            <strong>Computer Science Engineering Classes</strong> of Sup Galilée
            , where I am currently in my second year out of three.
          </p>

          <p>
            I suceeded in my first year, consolidating my knowledge and by
            discovering new subjects :
          </p>
          <BulletPoints points={ing} />
        </div>
      </div>
    </section>
  );
}

export default About;
