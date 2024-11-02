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
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              transition={{ delay: index * 0.1 }}
              key={category.title}
              onClick={() => onSelectCategory(category)}
              className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative bg-white rounded-xl overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <motion.img 
                    src={cardConfig.image}
                    alt={category.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-75 transition-all duration-300 from-transparent to-black/50"></div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${cardConfig.color} opacity-0 group-hover:opacity-40 transition-all duration-300 mix-blend-overlay`}></div>
                </div>
                
                <div className="relative p-4">
                  <motion.div 
                    className="flex items-center space-x-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-xl text-gray-500 group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </span>
                    <h3 className="text-lg font-normal text-gray-600 group-hover:text-[#FF4D00] transition-all duration-300">
                      {category.title}
                    </h3>
                  </motion.div>
                </div>
              </div>

              {/* Hover overlay with subtle border glow */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 to-white/0 mix-blend-overlay"></div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesGrid;