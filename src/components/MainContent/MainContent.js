import React from 'react';
import './MainContent.css';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import ProductGrid from './ProductGrid/ProductGrid';

const MainContent = () => {
  return (
    <div className="main-content-container">
      <div className="container-fluid">
        <div className="row">
          {/* Featured Products Section */}
          <div className="col-12">
            <FeaturedProducts />
          </div>
          
          {/* Product Grid Section */}
          <div className="col-12">
            <ProductGrid />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent; 