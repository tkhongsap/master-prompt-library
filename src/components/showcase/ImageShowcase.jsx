import React from 'react';
import { motion } from 'framer-motion';

const showcaseImages = {
  row1: [
    // Urban & City Life
    'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=400&q=80', // City sunset
    'https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=400&q=80', // City lights
    'https://images.unsplash.com/photo-1465447142348-e9952c393450?auto=format&fit=crop&w=400&q=80', // Modern architecture
    // Art & Creativity
    'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=400&q=80', // Paint splash
    'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=400&q=80', // Art supplies
    // Happiness & People
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=400&q=80', // Jumping for joy
    'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=400&q=80', // Friends laughing
    // Nature & Inspiration
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=400&q=80', // Mountain sunrise
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=400&q=80', // Forest light
    // Technology & Work
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80', // Clean workspace
    // Duplicate first few for seamless loop
    'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=400&q=80',
  ],
  row2: [
    // Coffee & Lifestyle
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=400&q=80', // Coffee art
    'https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=400&q=80', // Cozy reading
    // Travel & Adventure
    'https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?auto=format&fit=crop&w=400&q=80', // Adventure
    'https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&w=400&q=80', // Travel
    // Music & Arts
    'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=400&q=80', // Music studio
    'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=400&q=80', // Concert
    // Innovation & Design
    'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&w=400&q=80', // Design thinking
    'https://images.unsplash.com/photo-1496065187959-7f07b8353c55?auto=format&fit=crop&w=400&q=80', // Innovation
    // Mindfulness & Wellness
    'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=400&q=80', // Meditation
    'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=400&q=80', // Yoga
    // Duplicate first few for seamless loop
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=400&q=80',
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
    <div className="w-full overflow-hidden">
      <div className="space-y-4">
        <ImageRow images={showcaseImages.row1} direction="left" speed={60} />
        <ImageRow images={showcaseImages.row2} direction="right" speed={55} />
      </div>
    </div>
  );
};

export default ImageShowcase; 