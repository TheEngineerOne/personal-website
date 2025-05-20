import React from 'react';
import FullScreenComponent from '../Components/FullScreenComponent'
import TopBar from '../Components/SimpleTopBar'

const About : React.FC = () => {
  return (
    <>
      <TopBar/>
      <FullScreenComponent>
        <h1>Test</h1>
      </FullScreenComponent>
    </>
  )
}

export default About;
