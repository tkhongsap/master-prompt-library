import React from 'react';
import { motion } from 'framer-motion';

const categoryBackgrounds = {
  'Marketing': 'https://images.unsplash.com/photo-1552664730-d307ca884978',
  'Sales': 'https://images.unsplash.com/photo-1521791136064-7986c2920216',
  'Writing': 'https://images.unsplash.com/photo-1542435503-956c469947f6',
  'Business': 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0',
  'Data Analytics': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
  'Productivity': 'https://images.unsplash.com/photo-1483058712412-4245e9b90334',
};

const categoryGradients = {
  'Marketing': 'from-[#FF6B6B] to-[#FF4D4D]', // Vibrant coral red
  'Sales': 'from-[#4158D0] to-[#C850C0]', // Electric blue to magenta
  'Writing': 'from-[#0093E9] to-[#80D0C7]', // Ocean blue to turquoise
  'Business': 'from-[#8E2DE2] to-[#4A00E0]', // Royal purple
  'Data Analytics': 'from-[#00B4DB] to-[#0083B0]', // Bright cyan to azure
  'Productivity': 'from-[#F6D365] to-[#FDA085]', // Sunny yellow to peach
  'default': 'from-[#FF6B6B] to-[#FF4D4D]' // Default gradient for home page
};

const Hero = ({ title, subtitle, icon, category }) => {
  const style = category ? {
    backgroundImage: `url(${categoryBackgrounds[category]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  } : {};

  const gradientClass = category ? categoryGradients[category] : categoryGradients.default;

  return (
    <div 
      className={`relative overflow-hidden w-full ${
        category 
          ? 'bg-gray-900' 
          : 'bg-gradient-to-r ' + gradientClass
      } text-white py-6 sm:py-8`}
      style={style}
    >
      {/* Overlay for category backgrounds */}
      {category && (
        <div className="absolute inset-0 bg-black opacity-40"></div>
      )}

      {/* Main gradient overlay with reduced opacity */}
      <div className={`absolute inset-0 bg-gradient-to-r ${gradientClass} ${
        category ? 'opacity-70' : 'opacity-100'
      }`}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-3 mb-2">
            {icon && (
              <motion.span 
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-2xl sm:text-3xl"
              >
                {icon}
              </motion.span>
            )}
            <h1 className="text-2xl sm:text-4xl font-bold drop-shadow-lg">
              {title}
            </h1>
          </div>
          {subtitle && (
            <p className="text-sm sm:text-lg text-white/90 max-w-3xl mx-auto font-light">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;