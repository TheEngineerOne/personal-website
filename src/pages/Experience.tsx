import React from "react";
import FullScreenComponent from '../Components/FullScreenComponent'
import TopBar from '../Components/SimpleTopBar'

const Experience : React.FC = () => {
  return (
    <>
      <TopBar/>
      <FullScreenComponent>
        <h1>Test Experience</h1>
      </FullScreenComponent>
    </>
  )
}

export default Experience;

