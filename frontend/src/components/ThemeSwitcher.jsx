import React, { useState } from 'react';
import { Settings, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    { name: 'Default Blue', value: '#2563EB' },
    { name: 'Deep Purple', value: '#9333EA' },
    { name: 'Emerald Green', value: '#10B981' },
    { name: 'Vibrant Rose', value: '#E11D48' },
    { name: 'Warm Amber', value: '#D97706' },
    { name: 'Electric Cyan', value: '#06B6D4' },
    { name: 'Royal Indigo', value: '#4F46E5' },
    { name: 'Neon Fuchsia', value: '#C026D3' },
    { name: 'Acid Lime', value: '#84CC16' },
    { name: 'Hot Pink', value: '#FF1493' },
  ];

  const changeTheme = (color) => {
    document.documentElement.style.setProperty('--color-primary', color);
    window.dispatchEvent(new Event('themeChanged'));
  };

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[100] flex items-center">
      
      {/* Settings Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary text-white p-3 rounded-l-xl shadow-lg shadow-primary/30 hover:bg-opacity-90 transition-all flex items-center justify-center"
      >
        <Settings size={24} className={isOpen ? "" : "animate-[spin_3s_linear_infinite]"} />
      </button>

      {/* Theme Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="glass absolute right-0 top-1/2 -translate-y-1/2 mr-14 p-5 rounded-2xl w-64 shadow-2xl border border-gray-200 dark:border-slate-700"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-poppins font-semibold text-gray-900 dark:text-white">Theme Colors</h3>
              <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-red-500 transition-colors">
                <X size={20} />
              </button>
            </div>
            
            <div className="grid grid-cols-5 gap-3">
              {themes.map((theme) => (
                <button
                  key={theme.name}
                  onClick={() => changeTheme(theme.value)}
                  className="w-8 h-8 rounded-full border-2 border-transparent hover:scale-110 hover:border-gray-900 dark:hover:border-white transition-all shadow-md"
                  style={{ backgroundColor: theme.value }}
                  title={theme.name}
                />
              ))}
            </div>
            <p className="text-xs text-center text-gray-500 mt-4">
              Select a color to instantly update the UI and Glass Orb cursor!
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSwitcher;
