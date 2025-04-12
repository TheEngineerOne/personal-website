'use client';

import './App.css'
import {TopBar} from './Components/TopBar'
import {FullScreenComponent} from './Components/FullScreenComponent'
import {Paragraph} from './Components/Paragraph'

function App() {
  return (
    <>
      <TopBar/>
      <FullScreenComponent>
        <Paragraph title="How did I start programming" text=""/>
      </FullScreenComponent>
    </>
  )
}

export default App
