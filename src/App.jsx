import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import TechnicalProficiency from './sections/TechnicalProficiency'
import AboutMe from './sections/Aboutme'
import MyProjects from './sections/MyProjects'
import ContactMe from './sections/ContactMe'
import Footer from './sections/Footer'


const App = () => {
  return (
    <div className=''>
      <Navbar/>
      <Hero/>  
      <TechnicalProficiency/>
      <AboutMe/>
      <MyProjects/>
      <ContactMe/>
      <Footer/>
    </div>
  )
}

export default App
