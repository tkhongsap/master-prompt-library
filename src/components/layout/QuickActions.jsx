import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Clock, Star } from 'lucide-react';

const QuickActions = () => {
  const actions = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Professional Templates',
      description: 'Curated by experts'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Time-Saving',
      description: 'Ready to use instantly'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Expert-Crafted',
      description: 'Proven effectiveness'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="relative -mt-10 bg-white rounded-xl shadow-lg p-6 sm:p-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {actions.map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
              className="flex items-center p-4 rounded-lg hover:bg-gray-50 transition-all group cursor-pointer"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-[#FF4D00] group-hover:scale-110 transition-transform">
                {action.icon}
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {action.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {action.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default QuickActions; 