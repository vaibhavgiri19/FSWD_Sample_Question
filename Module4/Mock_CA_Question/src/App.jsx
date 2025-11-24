import React from 'react';
import ProductCard from './components/ProductCard';

function App() {
  // TODO: Define products array with at least 4 product objects
  // Each product should have: id, name, price, originalPrice, category, inStock, isOnSale
  const products = [
    // TODO: Add product objects here
  ];

  return (
    <div>
      <h1>Product Showcase</h1>
      <div className="product-grid">
        {/* TODO: Use map() to render ProductCard components */}
        {/* Remember to pass key prop and all required props */}
      </div>
    </div>
  );
}

export default App;