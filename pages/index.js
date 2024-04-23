import React from 'react'
import About from '../components/about/About';
import Activities from '../components/activity/Activities';
import Education from '../components/education/Education';
import Footer from '../components/footer/Footer';
import Introduction from '../components/introduction/Intorduction';
import Projects from '../components/project/Projects';
import Skills from '../components/skill/Skills';
import Header from '../components/header';
import Navbar from "../components/navbar/Navbar"
export default function Home() {
  return (
    <>
    <Navbar/>
      <Header/>
      <div className='pt-5'></div>
      <Introduction/>
      <About/>
      <Skills />
      <Education/>
      <Projects/>
      <Footer/>
    </>
  )
}