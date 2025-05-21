import React from 'react';
const About : React.FC = () => {
  return (
    <>
      <h1>&#xC0; propos de moi</h1>
      <p>
        Je suis VERBRUGGEN Lucas, un développeur backend, frontend et fullstack
      </p>
      <h1>Mes comp&eacute;tences</h1>
      <p>
        <span>Je maitr&icirc;se les langages suivants :</span>
        <ul>
          <li>
            <div class="flex space-x-2">
              <img class="w-auto h-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/1024px-Typescript.svg.png"/>
              <span>TypeScript</span>
            </div>
          </li>
          <li>
            <div class="flex space-x-2">
              <img class="w-auto h-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/250px-Unofficial_JavaScript_logo_2.svg.png"/>
              <span>JavaScript</span>
            </div>
          </li>
          <li>
            <div class="flex space-x-2">
              <img class="w-auto h-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/115px-Python-logo-notext.svg.png"/>
              <span>Python</span>
            </div>
          </li>
          <li>
            <div class="flex space-x-2">
              <img class="w-auto h-5" src="https://upload.wikimedia.org/wikipedia/fr/thumb/2/2e/Java_Logo.svg/250px-Java_Logo.svg.png"/>
              <span>Java</span>
            </div>
          </li>
          <li>
            <div class="flex space-x-2">
              <img class="w-auto h-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/330px-PHP-logo.svg.png"/>
              <span>PHP</span>
            </div>
          </li>
          <li>
            <div class="flex space-x-2">
              <img class="w-auto h-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Kotlin_Icon.svg/250px-Kotlin_Icon.svg.png"/>
              <span>Kotlin</span>
            </div>
          </li>
          <li>
            <div class="flex space-x-2">
              <img class="w-auto h-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/250px-ISO_C%2B%2B_Logo.svg.png"/>
              <span>C++</span>
            </div>
          </li>
          <li>
            <div class="flex space-x-2">
              <img class="w-auto h-5" src="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png"/>
              <span>C</span>
            </div>
          </li>
        </ul>
      </p>
      <p>
        <span>Je maitr&icirc;se les frameworks suivants :</span>
        <ul>
          <li>
            <div class="flex space-x-2">
              <img class="w-auto h-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/50px-Laravel.svg.png"/>
              <span>Laravel</span>
            </div>
          </li>
          <li>
            <div class="flex space-x-2">
              <img class="w-auto h-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/330px-React-icon.svg.png"/>
              <span>ReactJS</span>
            </div>
          </li>
        </ul>
      </p>
    </>
  )
}

export default About;
