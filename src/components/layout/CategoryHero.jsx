import React from 'react';
import { motion } from 'framer-motion';

const categoryImages = {
  'Marketing': {
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2000&q=80',
    color: 'from-pink-500 to-orange-400'
  },
  'Sales': {
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2000&q=80',
    color: 'from-blue-400 to-indigo-500'
  },
  'Writing': {
    image: 'https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&w=2000&q=80',
    color: 'from-teal-400 to-emerald-500'
  },
  'Business': {
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=2000&q=80',
    color: 'from-purple-400 to-indigo-500'
  },
  'Data Analytics': {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80',
    color: 'from-blue-500 to-cyan-400'
  },
  'Productivity': {
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=2000&q=80',
    color: 'from-orange-400 to-amber-500'
  }
};

const CategoryHero = ({ category }) => {
  const config = categoryImages[category.title];
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative min-h-[180px] overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={config.image}
          alt={category.title}
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${config.color} opacity-90`}></div>
      </div>

      {/* Animated pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-64 h-64 bg-white rounded-full blur-3xl -top-32 -left-32 animate-pulse"></div>
        <div className="absolute w-64 h-64 bg-white rounded-full blur-3xl -bottom-32 -right-32 animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-10 sm:py-14">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight"
        >
          {category.title} Templates
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-base sm:text-lg text-white/90 mb-5 max-w-2xl"
        >
          Discover proven {category.title.toLowerCase()} prompts for better results
        </motion.p>
      </div>
    </motion.div>
  );
};

export default CategoryHero;