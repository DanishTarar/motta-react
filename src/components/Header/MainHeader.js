import React, { useState } from 'react';
import './MainHeader.css';

const MainHeader = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(`Searching for: ${searchTerm} in category: ${selectedCategory}`);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="main-header">
      <div className="container">
        {/* Mobile Header */}
        <div className="d-md-none mobile-header">
          <div className="row align-items-center">
            <div className="col-2">
              <button className="hamburger-menu" onClick={toggleMobileMenu}>
                <i className="fas fa-bars"></i>
              </button>
            </div>
            <div className="col-8">
              <div className="logo-section">
                <h1 className="logo">TrendZone</h1>
                <div className="logo-tagline">
                  <div className="color-squares">
                    <span className="square red"></span>
                    <span className="square blue"></span>
                    <span className="square yellow"></span>
                    <span className="square green"></span>
                  </div>
                  <span className="tagline">Best For Shopping</span>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="mobile-user-actions">
                <a href="#" className="user-action"><i className="fas fa-user"></i></a>
                <a href="#" className="user-action"><i className="fas fa-shopping-cart"></i> <span className="cart-count">0</span></a>
              </div>
            </div>
          </div>
          
          {/* Mobile Search Bar */}
          <div className="mobile-search-section">
            <form onSubmit={handleSearch} className="mobile-search-container">
              <input 
                type="text" 
                className="mobile-search-input" 
                placeholder="Search for anything"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="submit" className="mobile-search-btn">
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>
        </div>

        {/* Desktop Header */}
        <div className="d-none d-md-block">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-4">
              <div className="logo-section">
                <h1 className="logo">TrendZone</h1>
                <div className="logo-tagline">
                  <div className="color-squares">
                    <span className="square red"></span>
                    <span className="square blue"></span>
                    <span className="square yellow"></span>
                    <span className="square green"></span>
                  </div>
                  <span className="tagline">Best For Shopping</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-5">
              <div className="search-section">
                <form onSubmit={handleSearch} className="search-container">
                  <input 
                    type="text" 
                    className="search-input" 
                    placeholder="Search for anything"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <select 
                    className="category-dropdown"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <option>All Categories</option>
                    <option>Electronics</option>
                    <option>Fashion</option>
                    <option>Home & Garden</option>
                  </select>
                  <button type="submit" className="search-btn">
                    <i className="fas fa-search"></i>
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="user-actions">
                <a href="#" className="user-action"><i className="fas fa-user"></i> Account</a>
                <a href="#" className="user-action"><i className="fas fa-shopping-cart"></i> Cart <span className="cart-count">0</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader; 