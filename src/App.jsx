import React, { useState } from 'react';
import Breadcrumb from './components/common/Breadcrumb';
import Hero from './components/layout/Hero';
import QuickActions from './components/layout/QuickActions';
import CategoriesGrid from './components/prompts/CategoriesGrid';
import SubcategoriesView from './components/prompts/SubcategoriesView';
import PromptsView from './components/prompts/PromptsView';
import { categories } from './data/categories';

function App() {
  const [navigationPath, setNavigationPath] = useState([]);
  const [currentView, setCurrentView] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const handleNavigation = (level, item) => {
    if (level === 'home') {
      setNavigationPath([]);
      setCurrentView('home');
      setSelectedCategory(null);
      setSelectedSubcategory(null);
    } else if (level === 'category') {
      setNavigationPath([item]);
      setCurrentView('category');
      setSelectedCategory(item);
      setSelectedSubcategory(null);
    } else if (level === 'subcategory') {
      setNavigationPath([selectedCategory, item]);
      setCurrentView('subcategory');
      setSelectedSubcategory(item);
    }
  };

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return (
          <>
            <Hero />
            <QuickActions />
            <CategoriesGrid 
              categories={categories} 
              onSelectCategory={(category) => handleNavigation('category', category)} 
            />
          </>
        );
      case 'category':
        return (
          <SubcategoriesView 
            category={selectedCategory} 
            onSelectSubcategory={(subcategory) => handleNavigation('subcategory', subcategory)} 
          />
        );
      case 'subcategory':
        return <PromptsView subcategory={selectedSubcategory} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Breadcrumb path={navigationPath} onNavigate={handleNavigation} />
        </div>
      </header>

      {renderView()}
    </div>
  );
}

export default App;
