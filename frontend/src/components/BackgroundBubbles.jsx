import React from 'react';
import { motion } from 'framer-motion';

const BackgroundBubbles = () => {
  // Generate random bubbles
  const bubbles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    size: Math.random() * 150 + 50,
    x: -20, // Start slightly off-screen left
    y: Math.random() * 100,
    duration: Math.random() * 30 + 20, // Slower, elegant drift
    delay: Math.random() * 10,
    isPrimary: Math.random() > 0.5
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className={`absolute rounded-full mix-blend-screen filter blur-[40px] opacity-20 dark:opacity-30 ${bubble.isPrimary ? 'bg-primary' : 'bg-purple-500'}`}
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
          }}
          animate={{
            x: ['0vw', '120vw'], // Float horizontally across the entire screen
            y: [0, (Math.random() - 0.5) * 50, 0], // Gentle vertical bobbing
            scale: [1, Math.random() * 0.5 + 1, 1],
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            delay: bubble.delay,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundBubbles;
