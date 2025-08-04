import React from 'react';
import './SecondaryHeader.css';

const SecondaryHeader = () => {
  return (
    <div className="secondary-header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="language-currency">
              <span className="language"><i className="fas fa-globe"></i> English</span>
              <span className="currency"><i className="fas fa-dollar-sign"></i> USD</span>
            </div>
          </div>
          <div className="col-md-6">
            <div className="utility-links">
              <a href="#" className="utility-link"><i className="fas fa-box"></i> Track Order</a>
              <a href="#" className="utility-link"><i className="fas fa-clock"></i> Help Center</a>
              <a href="#" className="utility-link"><i className="fas fa-exchange-alt"></i> Compare</a>
              <a href="#" className="utility-link"><i className="fas fa-heart"></i> Wishlist</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryHeader; 