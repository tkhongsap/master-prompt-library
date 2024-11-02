import React from 'react';
import { motion } from 'framer-motion';

const categoryBackgrounds = {
  'Marketing': 'https://images.unsplash.com/photo-1552664730-d307ca884978',
  'Sales': 'https://images.unsplash.com/photo-1521791136064-7986c2920216',
  'Writing': 'https://images.unsplash.com/photo-1542435503-956c469947f6',
  'Business': 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0',
  'Data Analytics': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
  'Productivity': 'https://images.unsplash.com/photo-1483058712412-4245e9b90334',
  'default': 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=2000&q=80'
};

const categoryGradients = {
  'Marketing': 'from-[#FF6B6B] to-[#FF4D4D]',
  'Sales': 'from-[#4158D0] to-[#C850C0]',
  'Writing': 'from-[#0093E9] to-[#80D0C7]',
  'Business': 'from-[#8E2DE2] to-[#4A00E0]',
  'Data Analytics': 'from-[#00B4DB] to-[#0083B0]',
  'Productivity': 'from-[#F6D365] to-[#FDA085]',
  'default': 'from-[#4A90E2] via-[#5C6BC0] to-[#7E57C2]'
};

const Hero = ({ title, subtitle, icon, category }) => {
  const style = {
    backgroundImage: `url(${category ? categoryBackgrounds[category] : categoryBackgrounds.default})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const gradientClass = category ? categoryGradients[category] : categoryGradients.default;

  return (
    <div 
      className={`relative overflow-hidden w-full bg-gray-900 text-white py-6 sm:py-8`}
      style={style}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-r ${gradientClass} ${
        category ? 'opacity-70' : 'opacity-85'
      } mix-blend-multiply`}></div>

      {/* Additional subtle patterns/effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_transparent_20%,_#000_140%)] opacity-30"></div>

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
            <h1 className="text-2xl sm:text-4xl font-normal tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>
              {title}
            </h1>
          </div>
          {subtitle && (
            <p className="text-sm sm:text-lg text-white/90 max-w-3xl mx-auto font-light tracking-wide">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;