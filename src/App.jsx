import React, { useState } from 'react';
import { categories } from './data/categories/index';
import CategoriesGrid from './components/prompts/CategoriesGrid';
import SubcategoriesView from './components/prompts/SubcategoriesView';
import PromptsView from './components/prompts/PromptsView';
import Breadcrumb from './components/common/Breadcrumb';
import Hero from './components/layout/Hero';
import ImageShowcase from './components/showcase/ImageShowcase';
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [navigationPath, setNavigationPath] = useState([]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null);
    setNavigationPath([category]);
  };

  const handleSubcategorySelect = (subcategory) => {
    setSelectedSubcategory(subcategory);
    setNavigationPath([selectedCategory, subcategory]);
  };

  const handleNavigate = (level, item) => {
    if (level === 'home') {
      setSelectedCategory(null);
      setSelectedSubcategory(null);
      setNavigationPath([]);
    } else if (level === 'category') {
      setSelectedCategory(item);
      setSelectedSubcategory(null);
      setNavigationPath([item]);
    }
  };

  const renderHero = () => {
    if (selectedCategory && selectedSubcategory) {
      return (
        <Hero
          title={selectedSubcategory.title}
          subtitle={`Explore ${selectedSubcategory.prompts.length} prompts for ${selectedCategory.title}`}
          icon={selectedCategory.icon}
          category={selectedCategory.title}
        />
      );
    } else if (selectedCategory) {
      return (
        <Hero
          title={selectedCategory.title}
          subtitle={`Explore ${selectedCategory.subcategories.length} subcategories of ${selectedCategory.title} prompts`}
          icon={selectedCategory.icon}
          category={selectedCategory.title}
        />
      );
    }
    return (
      <Hero
        title="Master Prompts"
        subtitle="Explore our curated collection of professional prompt templates"
        icon="✨"
      />
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {renderHero()}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb path={navigationPath} onNavigate={handleNavigate} />
        
        {!selectedCategory && (
          <CategoriesGrid 
            categories={categories} 
            onSelectCategory={handleCategorySelect} 
          />
        )}

        {selectedCategory && !selectedSubcategory && (
          <SubcategoriesView 
            category={selectedCategory} 
            onSelectSubcategory={handleSubcategorySelect}
          />
        )}

        {selectedCategory && selectedSubcategory && (
          <PromptsView 
            subcategory={selectedSubcategory}
          />
        )}
      </div>
      <ImageShowcase />
    </div>
  );
}

export default App;
