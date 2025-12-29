import { useState } from 'react'
import Navbar from './components/navbar'
import Intro from './components/ui/intro'
import About from './components/ui/about'
import Skills from './components/ui/skill'
import Certification from './components/ui/certification'
import Project from './components/ui/project'
import Contact from './components/ui/contact'
import Footer from './components/footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let name = "Kaivan Koshti";
  return (
    <>
    <Navbar name={name}/>
      <Intro name={name}/>
      <About />
      <Skills />
      <Certification />
      <Project />
      <Certification />
      <Contact />
      <Footer name={name}/>
    </>
  )
}

export default App
