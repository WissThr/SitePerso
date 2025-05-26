import React from "react";
import Mosaique from "../components/Mosaique";
import hard from "../constants/EN_skills.json";
import soft from "../constants/EN_soft.json";
import tools from "../constants/EN_tools.json";

export default function Skills() {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Skills</h2>
      <Mosaique skills={hard} title={"Hard Skills"} />
      <Mosaique skills={soft} title={"Soft Skills"} />
      <Mosaique skills={tools} title={"Tools"} />
    </section>
  );
}

const styles = {
  section: {
    padding: "2rem 1rem",
    minHeight: "100vh",
    margin: "0 auto",
    width: "100%",
    maxWidth: "1000px",
    boxSizing: "border-box",
  },
  title: {
    textAlign: "center",
    fontSize: "clamp(2rem, 5vw, 3.5rem)",
    marginBottom: "3rem",
    fontWeight: "700",
    color: "#F9F7F7",
  },
};
