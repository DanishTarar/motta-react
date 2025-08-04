import React from 'react';
import './FeaturedProducts.css';
import ProductCard from '../ProductCard/ProductCard';

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Wilson Ultra Power XL 112 Tennis Racket',
      price: 179.00,
      originalPrice: 179.00,
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Sports',
      rating: 4.5,
      reviews: 128
    },
    {
      id: 2,
      name: 'Wilson Evolution Official Game Basketball',
      price: 49.00,
      originalPrice: 49.00,
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Sports',
      rating: 4.8,
      reviews: 95
    },
    {
      id: 3,
      name: 'Professional Handheld Percussive Therapy Device',
      price: 100.00,
      originalPrice: 199.00,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Health',
      rating: 4.6,
      reviews: 203,
      onSale: true
    },
    {
      id: 4,
      name: 'NFL "The Duke" Replica Composite Football',
      price: 29.00,
      originalPrice: 45.00,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Sports',
      rating: 4.7,
      reviews: 156,
      onSale: true
    },
    {
      id: 5,
      name: 'Soft spot solar lamp 24.5 cm (anthracite)',
      price: 100.00,
      originalPrice: 100.00,
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Home & Garden',
      rating: 4.4,
      reviews: 89
    },
    {
      id: 6,
      name: 'KettlebellConnect 2.0 - Adjustable Kettlebell',
      price: 119.00,
      originalPrice: 119.00,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Sports',
      rating: 4.9,
      reviews: 234
    },
    {
      id: 7,
      name: 'Lex Black Dome USB Desk Lamp',
      price: 24.35,
      originalPrice: 24.35,
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Home & Garden',
      rating: 4.3,
      reviews: 67
    },
    {
      id: 8,
      name: 'Carrie Table Lamp',
      price: 200.00,
      originalPrice: 200.00,
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Home & Garden',
      rating: 4.6,
      reviews: 112
    }
  ];

  return (
    <div className="featured-products">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">You may also like</h2>
          <p className="section-subtitle">Discover our handpicked selection of premium products</p>
        </div>
        
        <div className="products-grid">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-item">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts; 