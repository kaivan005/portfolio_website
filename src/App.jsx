import Navbar from './components/navbar'
import Intro from './components/ui/intro'
import About from './components/ui/about'
import Skills from './components/ui/skill'
import Certification from './components/ui/certification'
import Project from './components/ui/project'
import Contact from './components/ui/contact'
import Footer from './components/footer'
import './App.css'
import React from 'react'

function App() {
  let name = "Kaivan Koshti";
  return (
    <>
    <Navbar name={name}/>
      <Intro name={name}/>
      <About />
      <Skills />
      <Certification />
      <Project />
      <Contact />
      <Footer name={name}/>
    </>
  )
}

export default App
