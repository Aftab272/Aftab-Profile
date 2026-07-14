import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../image/logo copy.jpeg';

const Preloader = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 3 seconds total loading time for the full animation sequence
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(onLoadingComplete, 1000); // Wait for the exit animation to finish
    }, 3000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.2, filter: "blur(20px)" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-darkNavy backdrop-blur-xl overflow-hidden"
        >
          {/* Outer glowing rings */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.5, scale: 1, rotate: 360 }}
            transition={{ opacity: { duration: 1 }, scale: { type: "spring", duration: 1.5, bounce: 0.4 }, rotate: { duration: 8, repeat: Infinity, ease: "linear" } }}
            className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full border-t-2 border-r-2 border-primary"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.3, scale: 1, rotate: -360 }}
            transition={{ opacity: { duration: 1, delay: 0.2 }, scale: { type: "spring", duration: 1.5, bounce: 0.4, delay: 0.2 }, rotate: { duration: 12, repeat: Infinity, ease: "linear" } }}
            className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full border-b-2 border-l-2 border-blue-400"
          />
          
          {/* Core Image Container */}
          <motion.div
            initial={{ scale: 0, opacity: 0, rotate: -180 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.6, delay: 0.4 }}
            className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary shadow-[0_0_80px_rgba(37,99,235,0.8)] z-10 bg-black flex items-center justify-center"
          >
            <motion.img 
              initial={{ scale: 1.8, filter: "blur(15px)" }}
              animate={{ scale: 1.1, filter: "blur(0px)" }}
              transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
              src={logoImg} 
              alt="Aftab Akram Logo" 
              className="w-full h-full object-cover"
              onError={(e) => {
                 e.target.src = "https://ui-avatars.com/api/?name=Aftab+Akram&size=512&background=2563EB&color=fff";
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
