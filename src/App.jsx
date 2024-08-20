import ParticlesComponent from './components/particles'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./components/layout/NavBar"
import Sobre from "./components/Sobre"
import Projetos from "./components/Projetos"

function App() {

  return (
    <Router>
      <NavBar />

      <Routes>
            <Route exact path="/" element={<ParticlesComponent />} />
            <Route exact path="/sobre" element={<Sobre />} />
            <Route exact path="/projects" element={<Projetos />} />
      </Routes>
      
      
    
    </Router>
  )
}

export default App
