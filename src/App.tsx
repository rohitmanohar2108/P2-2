import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Skills2 } from './components/Skills2';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';

function App() {
  return (
    <div className="bg-gray-900">
      <Navigation />
      <Hero />
     
      <Skills2 />
      <Experience />
      <Education />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;