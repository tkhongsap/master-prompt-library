import React from 'react';
import { motion } from 'framer-motion';

const SubcategoriesView = ({ category, onSelectSubcategory }) => {
  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        {category.title} {category.icon}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.subcategories.map((subcategory, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            key={subcategory.title}
            onClick={() => onSelectSubcategory(subcategory)}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer p-6"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {subcategory.title}
            </h3>
            <p className="text-gray-600">
              {subcategory.prompts.length} prompts available
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SubcategoriesView; 