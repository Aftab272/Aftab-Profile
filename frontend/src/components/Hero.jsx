import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, ArrowRight } from 'lucide-react';
import profileImg from '../image/Aftab.jpeg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-12 relative overflow-hidden">
      {/* Background blobs for modern look */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <h2 className="text-sm md:text-base font-semibold text-primary tracking-wider uppercase mb-2">
              BS Computer Science Student | 5th Semester
            </h2>
            <h1 className="text-4xl md:text-6xl font-poppins font-bold leading-tight mb-4">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                Muhammad Aftab Akram
              </span>
            </h1>
            <h3 className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-6">
              MERN Stack Developer | Graphic Designer | YouTube Automation Expert
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              I enjoy building modern, scalable, and user-friendly web applications while continuously learning new technologies. Passionate about delivering high-quality digital solutions that combine creativity with functionality.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="#contact" className="px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-primary/30 flex items-center gap-2 w-full sm:w-auto justify-center">
                <Mail size={18} />
                Contact Me
              </a>
              <a href="/cv.pdf" target="_blank" className="px-8 py-3 rounded-full glass font-medium hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center">
                <Download size={18} />
                Download CV
              </a>
              <a href="#projects" className="px-8 py-3 rounded-full text-primary font-medium hover:underline flex items-center gap-2 w-full sm:w-auto justify-center">
                View Projects
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-300 rounded-full blur-2xl opacity-40 animate-pulse"></div>
              <img 
                src={profileImg} 
                alt="Muhammad Aftab Akram" 
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-2xl"
                onError={(e) => {
                  e.target.src = "https://ui-avatars.com/api/?name=Muhammad+Aftab+Akram&size=512&background=2563EB&color=fff";
                }}
              />
              
              {/* Floating Badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -left-6 glass px-4 py-2 rounded-lg flex items-center gap-2 z-20"
              >
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-sm font-medium">Available for Work</span>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 -right-6 glass px-4 py-2 rounded-lg flex items-center gap-2 z-20"
              >
                <span className="text-sm font-medium">MERN Expert</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
