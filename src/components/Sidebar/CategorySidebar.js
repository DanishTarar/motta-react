import React, { useState } from 'react';
import './CategorySidebar.css';

const CategorySidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const categories = [
    { id: 1, name: 'Home & Garden', icon: 'fas fa-home' },
    { id: 2, name: 'Electronics', icon: 'fas fa-tablet-alt' },
    { id: 3, name: 'Fashion', icon: 'fas fa-tshirt' },
    { id: 4, name: 'Jewelry & Accessories', icon: 'fas fa-ring' },
    { id: 5, name: 'Sports & Entertainment', icon: 'fas fa-baseball-ball' },
    { id: 6, name: 'Mother & Kids', icon: 'fas fa-baby-carriage' },
    { id: 7, name: 'Beauty & Health', icon: 'fas fa-search' },
    { id: 8, name: 'Toys & Games', icon: 'fas fa-teddy-bear' },
    { id: 9, name: 'Automobiles & Motorcycles', icon: 'fas fa-car' },
    { id: 10, name: 'Collectibles & Art', icon: 'fas fa-palette' },
    { id: 11, name: 'Tools & Home Improvement', icon: 'fas fa-wrench' }
  ];

  const handleCategoryClick = (categoryName) => {
    console.log(`Selected category: ${categoryName}`);
    // Here you would typically navigate to the category page
  };

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="category-sidebar">
      <div className="sidebar-header" onClick={toggleSidebar}>
        <h3><i className="fas fa-th-large"></i> Shop by Category</h3>
        <i className={`fas fa-chevron-${isExpanded ? 'up' : 'down'}`}></i>
      </div>
      <ul className={`category-list ${isExpanded ? 'expanded' : 'collapsed'}`}>
        {categories.map((category) => (
          <li 
            key={category.id} 
            className="category-item"
            onClick={() => handleCategoryClick(category.name)}
          >
            <i className={category.icon}></i>
            <span>{category.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySidebar; 