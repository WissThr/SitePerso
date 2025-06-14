import React from "react";
import Timeline from "../components/Timeline";
import projects from "../constants/projects.json";
import Simon from "../components/Projects/Simon";
import BN from "../components/Projects/BN";
import TrainSimulator from "../components/Projects/TrainSimulator";
import JDV from "../components/Projects/JDV";
import VV155 from "../components/Projects/VV155";
import Covoit from "../components/Projects/Covoit";
import Site from "../components/Projects/Site";
import { projectBlockStyle } from "../styles/styleConfig";

function Projects() {
  return (
    <section
      style={{ padding: "2rem 1rem", width: "100%", boxSizing: "border-box" }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "3rem",
          marginBottom: "3rem",
          fontWeight: "700",
          color: "#F9F7F7",
        }}
      >
        Mes Projets
      </h2>

      <div style={projectBlockStyle.container}>
        <Timeline
          events={projects}
          h={
            <p style={projectBlockStyle.title}>
              Aperçu de mes projets
            </p>
          }
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <Site />
        <Covoit />
        <VV155 />
        <JDV />
        <TrainSimulator />
        <BN />
        <Simon />
      </div>
    </section>
  );
}

export default Projects;
