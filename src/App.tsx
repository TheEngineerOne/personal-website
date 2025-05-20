'use client';

import './App.css'
import {TopBar} from './Components/SimpleTopBar'
import {FullScreenComponent} from './Components/FullScreenComponent'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NotFound from './pages/NotFound.tsx'
import About from './pages/About.tsx'

function App() {
  return (
    <>
      <Router>
      <TopBar/>
      <FullScreenComponent>
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </FullScreenComponent>
      </Router>
    </>
  )
}

export default App
