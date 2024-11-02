import React from 'react';
import { motion } from 'framer-motion';

const showcaseImages = {
  row1: [
    // Marketing & Ads
    'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=400&q=80', // "Start now" text overlay
    'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?auto=format&fit=crop&w=400&q=80', // "Sale" sign
    'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=400&q=80', // "Open" neon sign
    // Added: More Marketing Content
    'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=400&q=80', // Marketing campaign
    'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=400&q=80', // Social media post template
    'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=400&q=80', // Instagram style post
    'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=400&q=80', // Social media stats
    'https://images.unsplash.com/photo-1585247226801-bc613c441316?auto=format&fit=crop&w=400&q=80', // Instagram workspace
    // Duplicate first few for seamless loop
    'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?auto=format&fit=crop&w=400&q=80',
  ],
  row2: [
    'https://images.unsplash.com/photo-1621839673705-6617adf9e890?auto=format&fit=crop&w=400&q=80', // "Join Now"
    // Added: More Marketing Content
    'https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=400&q=80', // Digital marketing dashboard
    'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=400&q=80', // Marketing strategy
    'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=400&q=80', // Social media content
    'https://images.unsplash.com/photo-1552598911-e3b72c148679?auto=format&fit=crop&w=400&q=80', // Analytics dashboard
    'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=400&q=80', // "New Arrival"
    // Brand Messages
    'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=400&q=80', // "Be Creative"
    'https://images.unsplash.com/photo-1591522811280-a8759970b03f?auto=format&fit=crop&w=400&q=80', // "Stay Positive"
    // Duplicate first few for seamless loop
    'https://images.unsplash.com/photo-1621839673705-6617adf9e890?auto=format&fit=crop&w=400&q=80',
  ]
};

const ImageRow = ({ images, direction = 'left', speed = 60 }) => {
  return (
    <div className="flex overflow-hidden relative w-screen">
      <motion.div
        className="flex gap-4 min-w-max"
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%']
        }}
        transition={{
          duration: speed,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-[200px] h-[133px] rounded-lg overflow-hidden"
          >
            <img
              src={image}
              alt={`Showcase ${index}`}
              className="w-full h-full object-cover transform transition-all duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition-colors duration-300" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const ImageShowcase = () => {
  return (
    <div className="w-full overflow-hidden mt-8">
      <div className="space-y-4">
        <ImageRow images={showcaseImages.row1} direction="left" speed={60} />
        <ImageRow images={showcaseImages.row2} direction="right" speed={55} />
      </div>
    </div>
  );
};

export default ImageShowcase; 