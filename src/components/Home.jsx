import React from 'react';
import NavBar from './NavBar';
import AboutMe from './AboutMe';
import Project from './Project';
import Contact from './Contacts';
function Home() {
  return (
    <>
      <NavBar/>
      <main>
        <AboutMe/>
        <Project/>
        <Contact/>
      </main>
      
    </>
  )
}

export default Home