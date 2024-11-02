import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, ChevronDown, ChevronUp } from 'lucide-react';

const PromptCard = ({ prompt, isExpanded, onClick }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(prompt.template);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy text:', error);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
      onClick={onClick}
      className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 group cursor-pointer"
    >
      <div className="flex justify-between items-start gap-4">
        <div className="text-left flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#FF4D00] transition-colors duration-300">
              {prompt.title}
            </h3>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="bg-gray-100 p-1 rounded-full group-hover:bg-gray-200"
            >
              {isExpanded ? (
                <ChevronUp className="w-5 h-5 text-[#FF4D00]" />
              ) : (
                <ChevronDown className="w-5 h-5 text-[#FF4D00]" />
              )}
            </motion.div>
            <span className="text-sm text-gray-500">
              {isExpanded ? 'Click to collapse' : 'Click to expand'}
            </span>
          </div>
          <p className="text-gray-600 mt-1">
            {prompt.description}
          </p>
        </div>
        <motion.button 
          onClick={handleCopy}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            copied 
              ? 'bg-green-500 text-white' 
              : 'bg-[#FF4D00] text-white hover:bg-[#FF6B6B]'
          }`}
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 mr-2" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 mr-2" />
              Copy
            </>
          )}
        </motion.button>
      </div>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="bg-gray-50 rounded-lg p-4 mt-4 text-left group-hover:bg-gray-100 transition-colors duration-300">
              <pre className="whitespace-pre-wrap text-sm text-gray-700">
                {prompt.template}
              </pre>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PromptCard;