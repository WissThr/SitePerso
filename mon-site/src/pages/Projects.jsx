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

function Projects() {
  return (
    <div>
      <section
        style={{
          padding: "4rem 2rem",
          margin: "2rem auto",
          width: "90%",
          boxSizing: "border-box",
        }}
      >
        <Timeline
          events={projects}
          h={
            <p>
              Courte liste de tous mes projets
              <br />
              <em>({projects.length} pour l'instant)</em>
            </p>
          }
        />
      </section>

      <Simon />
      <BN />
      <TrainSimulator />
      <JDV />
      <VV155 />
      <Covoit />
      <Site />
    </div>
  );
}

export default Projects;
