import React from "react";
import ProjectCard from "../Components/ProjectCard.tsx";
import tanquestImage from "../assets/tanquest.png";
const Projects : React.FC = () => {
  return (
    <>
        <ProjectCard
        href="https://github.com/marcroussel/TanQuest"
        altText="TanQuest Image"
        imageUrl={tanquestImage}
        text="TanQuest"
        />
    </>
  )
}

export default Projects;

