'use client';

import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NotFound from './pages/NotFound.tsx'
import About from './pages/About.tsx'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
