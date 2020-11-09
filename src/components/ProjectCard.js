import React from "react";
import "./ProjectCard.css";

const ProjectCard = (props) => (
  <a href={props.item.link} target="_blank">
    <div
      className="project-card"
      style={{
        background: `url(${props.item.image}) no-repeat  center `,
        backgroundSize: "cover",
      }}></div>
  </a>
);

export default ProjectCard;
