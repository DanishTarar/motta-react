import React, { useState } from 'react';
import './HeroBanner.css';

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const bannerData = [
    {
      id: 1,
      newArrivals: 'NEW ARRIVALS',
      title: 'Hot Right Now',
      subtitle: 'Retro Remixed For The Future',
      price: 'Starting at $110',
      backgroundImage: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 2,
      newArrivals: 'FEATURED',
      title: 'Summer Collection',
      subtitle: 'Fresh Styles for the Season',
      price: 'Starting at $89',
      backgroundImage: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 3,
      newArrivals: 'TRENDING',
      title: 'Limited Edition',
      subtitle: 'Exclusive Designs Available Now',
      price: 'Starting at $150',
      backgroundImage: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    }
  ];

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? bannerData.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === bannerData.length - 1 ? 0 : prev + 1));
  };

  const handleShopNow = () => {
    console.log('Shop Now clicked');
  };

  const currentBanner = bannerData[currentSlide];

  return (
    <div className="hero-banner">
      <div 
        className="banner-background"
        style={{ backgroundImage: `url(${currentBanner.backgroundImage})` }}
      >
        <div className="banner-overlay">
          <div className="banner-content">
            <div className="banner-text">
              <span className="new-arrivals">{currentBanner.newArrivals}</span>
              <h2 className="banner-title">{currentBanner.title}</h2>
              <p className="banner-subtitle">{currentBanner.subtitle}</p>
              <p className="banner-price">{currentBanner.price}</p>
              <button className="shop-now-button" onClick={handleShopNow}>
                Shop Now
              </button>
            </div>
          </div>
          
          <div className="banner-dots">
            {bannerData.map((_, index) => (
              <span 
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
              ></span>
            ))}
          </div>
          
          <div className="banner-navigation">
            <button className="nav-arrow prev" onClick={handlePrevSlide}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="nav-arrow next" onClick={handleNextSlide}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner; 