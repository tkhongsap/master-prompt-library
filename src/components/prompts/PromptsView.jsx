import React from 'react';
import { motion } from 'framer-motion';
import CopyButton from '../common/CopyButton';

const PromptsView = ({ subcategory }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold text-gray-800 mb-6"
      >
        {subcategory.title} Prompts
      </motion.h2>

      <div className="space-y-6">
        {subcategory.prompts.map((prompt, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            key={prompt.title}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
          >
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-gray-800 text-xl">
                  {prompt.title}
                </h3>
                <CopyButton text={prompt.template} />
              </div>
              <p className="text-gray-600">{prompt.description}</p>
            </div>
            
            <div className="bg-gray-50 p-6">
              <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono bg-gray-100 p-4 rounded-lg">
                {prompt.template}
              </pre>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PromptsView; 