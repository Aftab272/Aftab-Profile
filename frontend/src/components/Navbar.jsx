import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const themes = [
    { name: 'Blue', value: '#2563EB' },
    { name: 'Purple', value: '#9333EA' },
    { name: 'Emerald', value: '#10B981' },
    { name: 'Rose', value: '#E11D48' },
    { name: 'Amber', value: '#D97706' },
    { name: 'Cyan', value: '#06B6D4' },
    { name: 'Fuchsia', value: '#C026D3' },
    { name: 'Lime', value: '#84CC16' },
  ];

  const changeTheme = (color) => {
    document.documentElement.style.setProperty('--color-primary', color);
    // Dispatch an event so Canvas cursor can update if necessary
    window.dispatchEvent(new Event('themeChanged'));
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-2xl font-poppins font-bold text-primary">
            MA<span className="text-gray-900 dark:text-white">.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            
            <div className="flex items-center gap-2 border-l border-gray-300 dark:border-slate-700 pl-6 ml-2">
              <div className="group relative flex items-center">
                <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-800 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-primary border-2 border-white dark:border-slate-800"></div>
                </button>
                {/* Palette Dropdown */}
                <div className="absolute top-full right-0 mt-2 p-3 glass rounded-xl flex flex-wrap w-40 gap-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right scale-95 group-hover:scale-100 shadow-xl">
                  {themes.map(t => (
                    <button
                      key={t.name}
                      onClick={() => changeTheme(t.value)}
                      className="w-6 h-6 rounded-full border border-gray-200 dark:border-slate-700 hover:scale-110 transition-transform"
                      style={{ backgroundColor: t.value }}
                      title={t.name}
                    />
                  ))}
                </div>
              </div>

              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-800 transition-colors"
                title="Toggle Dark/Light Mode"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button onClick={toggleDarkMode} className="p-2">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-900 dark:text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full glass flex flex-col items-center py-4 gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium hover:text-primary transition-colors w-full text-center py-2"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
