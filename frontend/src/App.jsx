import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import BackgroundBubbles from './components/BackgroundBubbles';
import Preloader from './components/Preloader';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <>
      <CustomCursor />
      {loading && <Preloader onLoadingComplete={() => setLoading(false)} />}
      
      <div className={`min-h-screen bg-lightGray dark:bg-darkNavy text-gray-900 dark:text-gray-100 transition-colors duration-300 relative ${loading ? 'h-screen overflow-hidden' : ''}`}>
        <BackgroundBubbles />
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="relative z-10">
          <Hero />
          <About />
          <Education />
          <Skills />
          <Experience />
          <Projects />
          <Reviews />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
