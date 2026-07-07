import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-[#050816] text-white min-h-screen relative overflow-hidden selection:bg-blue-500/30">
      {/* Background Animated Blobs */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] bg-cyan-500/10 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <Navbar />
      <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-32 pb-20">
        <Hero />
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </div>
    </div>
  );
}

export default App;