import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NotFound from './pages/NotFound.tsx'
import About from './pages/About.tsx'
import Projects from './pages/Projects.tsx'
import Experience from './pages/Experience.tsx'
import {useState} from 'react'
import TopBar from './Components/SimpleTopBar.tsx'

const initialNav = [
  { name: 'A propos de moi', href: '/about', current: false },
  { name: 'Projets', href: '/projects', current: false },
  { name: 'Experiences', href: '/experiences', current: false },
]

function App() {
  const [navigation, setNavigation] = useState(initialNav)
  return (
    <Router>
      <TopBar navigation={navigation} setNavigation={setNavigation} />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experiences" element={<Experience />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
