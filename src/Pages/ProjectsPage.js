import React from "react";
import "./ProjectsPage.css";
import ProjectCard from "../components/ProjectCard";
import { projectsCardsData } from "../data/cardsData";

const ProjectsPage = () => {
  const projectsItems = projectsCardsData.map((item) => (
    <ProjectCard item={item} key={item.id} />
  ));
  return (
    <>
      <main id="projectsMain">{projectsItems}</main>
    </>
  );
};

export default ProjectsPage;
