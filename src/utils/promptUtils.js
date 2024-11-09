import { categories } from '../data/categories/index';
import { categorySchema } from '../data/schema/categorySchema';

export const promptUtils = {
  findPromptById: (id) => {
    for (const category of categories) {
      for (const subcategory of category.subcategories) {
        const prompt = subcategory.prompts.find(p => p.id === id);
        if (prompt) return prompt;
      }
    }
    return null;
  },
  
  updatePrompt: (id, newData) => {
    for (const category of categories) {
      for (const subcategory of category.subcategories) {
        const promptIndex = subcategory.prompts.findIndex(p => p.id === id);
        if (promptIndex !== -1) {
          subcategory.prompts[promptIndex] = {
            ...subcategory.prompts[promptIndex],
            ...newData,
            lastUpdated: new Date().toISOString()
          };
          return true;
        }
      }
    }
    return false;
  },
  
  validatePrompt: (promptData) => {
    const requiredFields = ['id', 'title', 'description', 'template'];
    const missingFields = requiredFields.filter(field => !promptData[field]);
    
    if (missingFields.length > 0) {
      throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
    }
    
    return true;
  }
}; 