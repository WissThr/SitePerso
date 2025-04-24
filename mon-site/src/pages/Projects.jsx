import React from "react";
import Timeline from "../components/Timeline";
import projects from "../constants/projects.json";
import Simon from "../components/Simon";
import BN from "../components/BN";
import TrainSimulator from "../components/TrainSimulator";
import JDV from "../components/JDV";
import VV155 from "../components/VV155";
import Covoit from "../components/Covoit";

function Projects() {
  return (
    <div>
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

      <Simon />
      <BN />
      <TrainSimulator />
      <JDV />
      <VV155 />
      <Covoit />
    </div>
  );
}

export default Projects;
