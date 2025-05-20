import React from "react";
import FullScreenComponent from '../Components/FullScreenComponent'
import TopBar from '../Components/SimpleTopBar'

const Projects : React.FC = () => {
  return (
    <>
      <TopBar/>
      <FullScreenComponent>
        <h1>Test Projects</h1>
      </FullScreenComponent>
    </>
  )
}

export default Projects;

