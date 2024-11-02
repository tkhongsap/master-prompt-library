import React from 'react';
import { motion } from 'framer-motion';

const SubcategoriesView = ({ category, onSelectSubcategory }) => {
  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.subcategories.map((subcategory, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ 
              y: -8,
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            transition={{ delay: index * 0.1 }}
            key={subcategory.title}
            onClick={() => onSelectSubcategory(subcategory)}
            className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
          >
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative p-6">
              <motion.div 
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#FF4D00] transition-colors duration-300 mb-2">
                    {subcategory.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <span className="group-hover:text-[#FF4D00] transition-colors duration-300">
                      {subcategory.prompts.length} prompts
                    </span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-500 group-hover:translate-x-1 transition-transform duration-300">
                      Click to explore →
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Hover border effect */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#FF4D00]/10 to-transparent"></div>
            </div>

            {/* Corner accent */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-[#FF4D00]/20 to-transparent transform rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SubcategoriesView; 