import React from 'react';
import './PromoBanner.css';

const PromoBanner = () => {
  return (
    <div className="promo-banner">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <span className="promo-text">Limited Time Only: Up to 60% off Dining Furniture</span>
          </div>
          <div className="col-md-4 text-end">
            <a href="#" className="shop-now-btn">Shop Now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner; 