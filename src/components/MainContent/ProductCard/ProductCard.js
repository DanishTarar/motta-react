import React, { useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlistToggle = () => {
    setIsWishlisted(!isWishlisted);
  };

  const handleAddToCart = () => {
    console.log(`Added ${product.name} to cart`);
  };

  const handleQuickView = () => {
    console.log(`Quick view for ${product.name}`);
  };

  const discountPercentage = product.onSale 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
        
        {/* Sale Badge */}
        {product.onSale && (
          <div className="sale-badge">
            -{discountPercentage}%
          </div>
        )}
        
        {/* Wishlist Button */}
        <button 
          className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
          onClick={handleWishlistToggle}
        >
          <i className={`fas fa-heart ${isWishlisted ? 'fas' : 'far'}`}></i>
        </button>
        
        {/* Quick Actions */}
        <div className="quick-actions">
          <button className="quick-action-btn" onClick={handleQuickView}>
            <i className="fas fa-eye"></i>
          </button>
          <button className="quick-action-btn" onClick={handleAddToCart}>
            <i className="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
      
      <div className="product-info">
        <div className="product-category">{product.category}</div>
        <h3 className="product-name">{product.name}</h3>
        
        <div className="product-rating">
          <div className="stars">
            {[...Array(5)].map((_, index) => (
              <i 
                key={index}
                className={`fas fa-star ${index < Math.floor(product.rating) ? 'filled' : ''}`}
              ></i>
            ))}
          </div>
          <span className="rating-text">({product.reviews} reviews)</span>
        </div>
        
        <div className="product-price">
          {product.onSale ? (
            <>
              <span className="current-price">${product.price}</span>
              <span className="original-price">${product.originalPrice}</span>
            </>
          ) : (
            <span className="current-price">${product.price}</span>
          )}
        </div>
        
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard; 