import React from "react";
import "../styles/Mosaique.css";
//hard
import html from "../assets/skills/html.avif";
import css from "../assets/skills/css.png";
import js from "../assets/skills/js.svg";
import c from "../assets/skills/c.svg";
import cpp from "../assets/skills/cpp.svg";
import react from "../assets/skills/react.svg";
import java from "../assets/skills/java.svg";
import python from "../assets/skills/python.svg";
import kotlin from "../assets/skills/kotlin.svg";
import sql from "../assets/skills/sql.png";
import ocaml from "../assets/skills/ocaml.svg";
import matlab from "../assets/skills/matlab.svg";
//tools
import android from "../assets/tools/android.svg";
import canva from "../assets/tools/canva.svg";
import eclipse from "../assets/tools/eclipse.svg";
import github from "../assets/tools/github.svg";
import google from "../assets/tools/google.svg";
import linux from "../assets/tools/linux.svg";
import office from "../assets/tools/office.svg";
import photoshop from "../assets/tools/photoshop.svg";
import pycharm from "../assets/tools/pycharm.svg";
import vscode from "../assets/tools/vscode.svg";
import windows from "../assets/tools/windows.svg";

const imageMap = {
  //hard
  html,
  css,
  js,
  c,
  cpp,
  react,
  java,
  python,
  kotlin,
  sql,
  ocaml,
  matlab,
  //tools
  android,
  canva,
  eclipse,
  github,
  google,
  linux,
  office,
  photoshop,
  pycharm,
  vscode,
  windows,
};

export default function SkillsList({ skills, title }) {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>{title}</h2>
      <div style={styles.grid}>
        {skills.map((skill, index) => (
          <div key={index} className="skill-item" style={styles.item}>
            {imageMap[skill.icon] ? (
              <img
                src={imageMap[skill.icon]}
                alt={skill.name}
                title={skill.name}
                style={styles.icon}
              />
            ) : (
              <span style={styles.emoji} title={skill.name}>
                {skill.icon}
              </span>
            )}

            <p style={styles.label}>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "2rem 1rem",
    backgroundColor: "#F9F7F7",
    textAlign: "center",
  },
  title: {
    fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
    marginBottom: "2rem",
    color: "#112D4E",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(90px, 1fr))",
    gap: "1rem",
    justifyItems: "center",
    alignItems: "center",
    maxWidth: "900px",
    margin: "0 auto",
  },
  item: {
    backgroundColor: "#DBE2EF",
    borderRadius: "10px",
    padding: "0.75rem",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.08)",
    textAlign: "center",
    width: "100%",
    maxWidth: "90px",
    height: "110px", // ✅ hauteur uniforme
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: "48px",
    height: "48px",
    objectFit: "contain",
  },
  label: {
    marginTop: "0.4rem",
    fontSize: "0.9rem",
    color: "#3F72AF",
  },
  emoji: {
    fontSize: "2.5rem",
    lineHeight: "1",
  },
};
