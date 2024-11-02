import React from 'react';
import { motion } from 'framer-motion';

const PromptHero = ({ subcategory, category }) => {
  const categoryImages = {
    'Marketing': {
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2000&q=80',
      color: 'from-pink-500 to-orange-400'
    },
    'Sales': {
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2000&q=80',
      color: 'from-blue-400 to-indigo-500'
    },
    // ... other categories remain the same
  };

  const config = categoryImages[category.title];
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative min-h-[180px] overflow-hidden"
    >
      <div className="absolute inset-0">
        <img 
          src={config.image}
          alt={category.title}
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${config.color} opacity-90`}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-10 sm:py-14">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight"
        >
          {subcategory.title} Prompts
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-base sm:text-lg text-white/90 mb-5 max-w-2xl"
        >
          {subcategory.description || `Discover proven ${subcategory.title.toLowerCase()} prompts for better results`}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default PromptHero; 