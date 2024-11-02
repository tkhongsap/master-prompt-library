import React from 'react';
import { motion } from 'framer-motion';
import CopyButton from '../common/CopyButton';

const PromptCard = ({ prompt }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {prompt.title}
          </h3>
          <p className="text-gray-600">
            {prompt.description}
          </p>
        </div>
        <CopyButton text={prompt.template} />
      </div>
      
      <div className="bg-gray-50 rounded-lg p-4 mt-4">
        <pre className="whitespace-pre-wrap text-sm text-gray-700">
          {prompt.template}
        </pre>
      </div>
    </motion.div>
  );
};

export default PromptCard; 