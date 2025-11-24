import React from 'react';

function ProductCard({ name, price, originalPrice, category, inStock, isOnSale }) {
  return (
    <div className="product-card">
      {/* TODO: Display product name in an h3 element */}
      
      {/* TODO: Display category with label "Category: " */}
      
      {/* TODO: Display current price with currency formatting */}
      
      {/* TODO: Show original price (crossed out) when product is on sale */}
      
      {/* TODO: Conditionally render sale badge when isOnSale is true */}
      {/* Badge should have className "sale-badge" and text "SALE" */}
      
      {/* TODO: Display stock status based on inStock prop */}
      {/* Show "In Stock" or "Out of Stock" with appropriate styling */}
      {/* Use className "stock-status" with additional "in-stock" or "out-stock" */}
    </div>
  );
}

export default ProductCard;