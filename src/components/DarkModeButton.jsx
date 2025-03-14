// DarkModeButton.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { FiMoon, FiSun } from 'react-icons/fi';

const TOGGLE_CLASSES =
  'flex items-center justify-center px-2 py-2 transition-colors relative z-10 rounded-full';

const DarkModeButton = ({ darkMode, toggleDarkMode }) => {
  return (
    <button
      className={`${TOGGLE_CLASSES} ${
        darkMode 
          ? 'text-[#F5F1ED] bg-gradient-to-r from-teal-500 to-teal-800' 
          : 'text-[#F5F1ED] bg-gradient-to-l from-teal-500 to-teal-800 '
      }`}
      onClick={toggleDarkMode}
    >
      <motion.div
        animate={{ rotate: darkMode ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {darkMode ? (
          <FiMoon className="text-lg md:text-sm" />
        ) : (
          <FiSun className="text-lg md:text-sm" />
        )}
      </motion.div>
    </button>
  );
};

export default DarkModeButton;