import React from 'react';
import { Home } from 'lucide-react';

const Breadcrumb = ({ path, onNavigate }) => (
  <div className="flex items-center space-x-2 text-sm">
    <button 
      onClick={() => onNavigate('home')}
      className="flex items-center text-gray-600 hover:text-[#FF4D00]"
    >
      <Home className="w-4 h-4 mr-1" />
      Home
    </button>
    {path.map((item, index) => (
      <React.Fragment key={index}>
        <span className="text-gray-400">/</span>
        <button 
          onClick={() => onNavigate(item.level, item)}
          className="text-gray-600 hover:text-[#FF4D00]"
        >
          {item.title}
        </button>
      </React.Fragment>
    ))}
  </div>
);

export default Breadcrumb; 