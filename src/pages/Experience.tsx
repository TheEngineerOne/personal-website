import React from "react";
import ProjectCard from "../Components/ProjectCard.tsx"

const Experience : React.FC = () => {
  return (
    <>
      <div>
        <ProjectCard
          href="https://www.lisn.upsaclay.fr/"
          imageUrl="https://www.lisn.upsaclay.fr/app/uploads/2022/01/logo.svg"
          text="Stagiaire Développeur au LISN (Janvier 2025 - Mai 2025)"
        />
      </div> 
      <div>
        <ProjectCard
          href="https://citypassenger.com/"
          imageUrl="https://citypassenger.com/wp-content/uploads/2022/06/Logo_CP_72dpi.jpg"
          text="Stagiaire Concepteur de test (Avril 2024 - Juin 2024)"
        />
      </div> 

    </>
  )
}

export default Experience;

