import React, { useState } from 'react';
import PromptCard from './PromptCard';

const PromptsView = ({ subcategory }) => {
  // Track expanded cards in a Set
  const [expandedCards, setExpandedCards] = useState(new Set([0])); // Default first card expanded

  const toggleCard = (index) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <div className="mt-8">
      <div className="space-y-6">
        {subcategory.prompts.map((prompt, index) => (
          <PromptCard 
            key={prompt.title} 
            prompt={prompt}
            isExpanded={expandedCards.has(index)}
            onClick={() => toggleCard(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PromptsView; 