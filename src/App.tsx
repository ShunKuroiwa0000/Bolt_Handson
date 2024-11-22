import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <div className="space-y-32 py-20">
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </main>
      <footer className="bg-[#F5F5F7] py-12 mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
          © 2024 黒岩舜. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;