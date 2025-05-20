import React from 'react';
import FullScreenComponent from '../Components/FullScreenComponent'
import en_loc from "../assets/locales/en/about.json"
const About : React.FC = () => {
  return (
    <>
      <FullScreenComponent>
        <h1>{en_loc['About Me']}</h1>
        <p>{en_loc['Presentation']}</p>
      </FullScreenComponent>
    </>
  )
}

export default About;
