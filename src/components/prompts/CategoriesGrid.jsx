import React from 'react';
import { motion } from 'framer-motion';

const categoryCards = {
  'Marketing': {
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
    color: 'from-pink-500 to-orange-400'
  },
  'Sales': {
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80',
    color: 'from-blue-400 to-indigo-500'
  },
  'Writing': {
    image: 'https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&w=800&q=80',
    color: 'from-teal-400 to-emerald-500'
  },
  'Business': {
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80',
    color: 'from-purple-400 to-indigo-500'
  },
  'Data Analytics': {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    color: 'from-blue-500 to-cyan-400'
  },
  'Productivity': {
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=800&q=80',
    color: 'from-orange-400 to-amber-500'
  }
};

const CategoriesGrid = ({ categories, onSelectCategory }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => {
          const cardConfig = categoryCards[category.title];
          return (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              key={category.title}
              onClick={() => onSelectCategory(category)}
              className="group relative bg-white rounded-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:scale-105"
            >
              {/* Glowing border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 rounded-xl blur transition duration-300 group-hover:duration-200 animate-tilt bg-gradient-to-r from-[#FF4D00] to-orange-300"></div>
              
              {/* Card content */}
              <div className="relative bg-white rounded-xl overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={cardConfig.image}
                    alt={category.title}
                    className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-75 transition-opacity duration-300 from-transparent to-black/50"></div>
                  
                  {/* Animated gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${cardConfig.color} opacity-0 group-hover:opacity-30 transition-opacity duration-300 mix-blend-overlay`}></div>
                </div>
                
                <div className="relative p-6 bg-white">
                  <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 group-hover:to-orange-50 transition-colors duration-300"></div>
                  <div className="relative">
                    <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-[#FF4D00] transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2 group-hover:text-gray-700">
                      {category.subcategories.length} templates available
                    </p>
                    
                    {/* Animated arrow */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-4 transition-all duration-300">
                      <svg className="w-6 h-6 text-[#FF4D00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesGrid;