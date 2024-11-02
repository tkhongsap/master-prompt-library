import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const SubcategoriesView = ({ category, onSelectSubcategory }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold text-gray-800 mb-6"
      >
        {category.title} Templates
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {category.subcategories.map((subcategory, index) => (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            key={subcategory.title}
            onClick={() => onSelectSubcategory(subcategory)}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-100 group"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium text-gray-800 text-xl mb-2 group-hover:text-[#FF4D00]">
                  {subcategory.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {subcategory.prompts.length} prompts available
                </p>
              </div>
              <ChevronRight className="text-gray-400 group-hover:text-[#FF4D00] group-hover:transform group-hover:translate-x-1 transition-all" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SubcategoriesView; 