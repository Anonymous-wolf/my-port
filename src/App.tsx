import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Patents from './components/Patents';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Leadership from './components/Leadership';
import Volunteering from './components/Volunteering';
import Sports from './components/Sports';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-900 text-white overflow-x-hidden">
      <Header />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Patents />
      <Achievements />
      <Certifications />
      <Leadership />
      <Volunteering />
      <Sports />
      <Footer />
    </div>
  );
}

export default App;