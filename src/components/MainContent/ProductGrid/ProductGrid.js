import React, { useState } from 'react';
import './ProductGrid.css';
import ProductCard from '../ProductCard/ProductCard';

const ProductGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  const categories = ['All', 'Electronics', 'Fashion', 'Home & Garden', 'Sports', 'Health'];

  const products = [
    {
      id: 1,
      name: 'Wireless Bluetooth Headphones',
      price: 89.99,
      originalPrice: 129.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Electronics',
      rating: 4.7,
      reviews: 342,
      onSale: true
    },
    {
      id: 2,
      name: 'Premium Cotton T-Shirt',
      price: 29.99,
      originalPrice: 29.99,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Fashion',
      rating: 4.5,
      reviews: 156
    },
    {
      id: 3,
      name: 'Smart LED Desk Lamp',
      price: 45.00,
      originalPrice: 45.00,
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Home & Garden',
      rating: 4.8,
      reviews: 89
    },
    {
      id: 4,
      name: 'Professional Yoga Mat',
      price: 34.99,
      originalPrice: 49.99,
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Sports',
      rating: 4.6,
      reviews: 203,
      onSale: true
    },
    {
      id: 5,
      name: 'Digital Kitchen Scale',
      price: 24.99,
      originalPrice: 24.99,
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Home & Garden',
      rating: 4.4,
      reviews: 67
    },
    {
      id: 6,
      name: 'Fitness Tracker Watch',
      price: 79.99,
      originalPrice: 99.99,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Health',
      rating: 4.9,
      reviews: 445,
      onSale: true
    }
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'reviews':
        return b.reviews - a.reviews;
      default:
        return 0;
    }
  });

  return (
    <div className="product-grid-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle">Discover amazing products at great prices</p>
        </div>
        
        {/* Filters and Sort */}
        <div className="filters-section">
          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-filter ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="sort-section">
            <label htmlFor="sort-select">Sort by:</label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="reviews">Most Reviews</option>
            </select>
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="products-grid">
          {sortedProducts.map((product) => (
            <div key={product.id} className="product-item">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        
        {sortedProducts.length === 0 && (
          <div className="no-products">
            <p>No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductGrid; 