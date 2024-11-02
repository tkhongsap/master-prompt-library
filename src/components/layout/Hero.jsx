import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative min-h-[180px] bg-gradient-to-r from-pink-500 via-[#FF4D00] to-orange-500 overflow-hidden"
    >
      {/* Animated pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-64 h-64 bg-white rounded-full blur-3xl -top-32 -left-32 animate-pulse"></div>
        <div className="absolute w-64 h-64 bg-white rounded-full blur-3xl -bottom-32 -right-32 animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-10 sm:py-14 flex flex-col items-center justify-center text-center">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight"
        >
          Master Prompts
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-base sm:text-lg text-white/90 mb-5 max-w-2xl"
        >
          Discover proven prompt templates for better ChatGPT results
        </motion.p>

        <motion.button 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-[#FF4D00] px-6 py-2.5 rounded-lg text-base font-semibold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
        >
          Get Started Free
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Hero; 