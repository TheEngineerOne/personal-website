'use client';

import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NotFound from './pages/NotFound.tsx'
import About from './pages/About.tsx'
import Projects from './pages/Projects.tsx'
import Experience from './pages/Experience.tsx'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<About/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/experiences" element={<Experience/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
