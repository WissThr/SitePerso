import React from "react";
import Timeline from "../components/Timeline";
import projects from "../constants/projects.json";
import Simon from "../components/Simon";

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
    </div>
  );
}

export default Projects;
