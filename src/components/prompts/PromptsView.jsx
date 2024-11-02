import React from 'react';
import PromptCard from './PromptCard';

const PromptsView = ({ subcategory }) => {
  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        {subcategory.title}
      </h2>
      
      <div className="space-y-6">
        {subcategory.prompts.map((prompt) => (
          <PromptCard key={prompt.title} prompt={prompt} />
        ))}
      </div>
    </div>
  );
};

export default PromptsView; 