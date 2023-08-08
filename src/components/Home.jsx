import React from 'react';
import NavBar from './NavBar';
import AboutMe from './AboutMe';
import Project from './Project';
import Contact from './Contacts';
function Home() {
  return (
    <>
      <NavBar/>
      
      <AboutMe/>
      <Project/>
      <Contact/>
    </>
  )
}

export default Home