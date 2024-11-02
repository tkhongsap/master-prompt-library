import React from 'react';
import { Home } from 'lucide-react';

const Breadcrumb = ({ path, onNavigate }) => (
  <div className="flex items-center space-x-2 text-base font-medium">
    <button 
      onClick={() => onNavigate('home')}
      className="flex items-center text-[#FF4D00] hover:text-[#FF6B4D] transition-colors"
    >
      <Home className="w-5 h-5 mr-1" />
      Home
    </button>
    {path.map((item, index) => (
      <React.Fragment key={index}>
        <span className="text-[#FF4D00] font-bold">/</span>
        <button 
          onClick={() => onNavigate(item.level, item)}
          className="text-[#2B3945] hover:text-[#FF4D00] transition-colors font-semibold"
        >
          {item.title}
        </button>
      </React.Fragment>
    ))}
  </div>
);

export default Breadcrumb; 