import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="main-nav">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <ul className="nav-links">
              <li><a href="#" className="nav-link">Home</a></li>
              <li><a href="#" className="nav-link">Shop</a></li>
              <li><a href="#" className="nav-link">Features</a></li>
              <li><a href="#" className="nav-link">Pages</a></li>
              <li><a href="#" className="nav-link">Blog</a></li>
            </ul>
          </div>
          <div className="col-md-4 text-end">
            <a href="#" className="deals-link">Shop Today's Deals</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 