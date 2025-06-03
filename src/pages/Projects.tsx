import React from "react";
import ProjectCard from "../Components/ProjectCard.tsx";
import tanquestImage from "../assets/tanquest.png";
const Projects : React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <ProjectCard
        href="https://github.com/marcroussel/TanQuest"
        altText="TanQuest Image"
        imageUrl={tanquestImage}
        text="TanQuest"
        />
        </div>
    </>
  )
}

export default Projects;

