
Welcome, Kalvian!

In this **mock assessment**, you'll implement **advanced component reusability**, **complex array mapping**, **conditional rendering**, and **data filtering** by creating a comprehensive e-commerce product catalog system. This assessment is designed to be more challenging than your actual module assessment, so consider it excellent preparation!

You've been given a React app setup that needs a reusable ProductCard component with advanced features like dynamic pricing, stock management, category filtering, and rating displays. Your job is to build the ProductCard component and complete the App component by implementing sophisticated data mapping, filtering, and sorting functionality.

---

## Overview

You have a Vite-React project with components that need to display product information with advanced features:

- **App.jsx** - Main component that needs filtering, sorting, and mapping functionality
- **ProductCard.jsx** - Advanced component with conditional pricing, stock status, and rating displays
- **CategoryFilter.jsx** - Filter component to be built for category selection

Your task is to create a dynamic product catalog that demonstrates mastery of React fundamentals with added complexity.

---

## Tasks

### Part 1: ProductCard Component (12 points)
- [ ] **Component Structure**: Create a functional component accepting all required props
- [ ] **Product Name**: Display product name in an h3 element
- [ ] **Price Display**: Show current price with currency formatting ($XX.XX)
- [ ] **Original Price**: Display crossed-out original price when there's a discount
- [ ] **Discount Badge**: Show percentage discount when originalPrice > currentPrice
- [ ] **Category Display**: Show product category with proper formatting
- [ ] **Stock Status**: Display "In Stock" (green) or "Out of Stock" (red) based on stock count
- [ ] **Rating Display**: Show star rating (★★★☆☆) based on numerical rating
- [ ] **Description**: Display product description with text truncation (max 100 chars)
- [ ] **CSS Classes**: Use specific className requirements for styling

### Part 2: CategoryFilter Component (8 points)
- [ ] **Filter Structure**: Create component that renders category buttons
- [ ] **Dynamic Categories**: Extract unique categories from products array
- [ ] **Active State**: Highlight selected category button
- [ ] **All Categories**: Include "All" option to show all products
- [ ] **Click Handling**: Proper event handling for category selection

### Part 3: App Component Advanced Integration (10 points)
- [ ] **Products Array**: Define array with at least 6 diverse product objects
- [ ] **State Management**: Use useState for category filtering and sorting
- [ ] **Category Filtering**: Filter products based on selected category
- [ ] **Price Sorting**: Implement sort by price (low to high, high to low)
- [ ] **Stock Filtering**: Toggle to show/hide out-of-stock items
- [ ] **Search Functionality**: Filter products by name/description
- [ ] **Complex Mapping**: Render filtered and sorted products
- [ ] **Performance**: Proper key props and efficient re-rendering

---

## Component Design Philosophy

**What makes an Advanced Product Catalog?**

- Handles complex data structures with multiple properties
- Implements real-world e-commerce features (discounts, stock, ratings)
- Provides multiple filtering and sorting options
- Maintains performance with efficient data operations
- Demonstrates advanced conditional rendering patterns
- Uses proper state management for interactive features

**Real-World Application:**
Think Amazon, eBay, or any modern e-commerce site - they handle complex product data, multiple filters, dynamic pricing, stock management, and user interactions seamlessly.

---

## Assessment Criteria

| Skill Category                        | Specific Criteria                                           | Points |
| ------------------------------------- | ---------------------------------------------------------- | ------ |
| **ProductCard Advanced Features**     | Should display product name correctly                     | 1      |
|                                       | Should show formatted current price                       | 1      |
|                                       | Should display crossed-out original price when discounted | 2      |
|                                       | Should show discount percentage badge                     | 2      |
|                                       | Should display category information                       | 1      |
|                                       | Should show dynamic stock status with color coding       | 2      |
|                                       | Should render star rating based on numerical value       | 2      |
|                                       | Should truncate long descriptions properly               | 1      |
| **CategoryFilter Component**          | Should render category filter buttons                     | 2      |
|                                       | Should extract unique categories from products           | 2      |
|                                       | Should handle category selection                         | 2      |
|                                       | Should highlight active category                         | 2      |
| **App Component Advanced Logic**      | Should filter products by selected category              | 2      |
|                                       | Should implement price sorting functionality             | 2      |
|                                       | Should handle stock filtering toggle                     | 2      |
|                                       | Should implement search functionality                    | 2      |
|                                       | Should render filtered results with proper keys         | 2      |

**Total Marks: 30**

---

## Complex Data Structure

Your components need to work with this advanced product data structure:

```javascript
// Sample product object - more complex than basic student data
{
  id: 1,
  name: "Wireless Bluetooth Headphones",
  currentPrice: 79.99,
  originalPrice: 99.99,
  category: "Electronics",
  description: "High-quality wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
  rating: 4.5,
  stock: 15,
  image: "headphones.jpg",
  featured: true
}

// Complete products array should contain:
- At least 6 different products
- Multiple categories (Electronics, Clothing, Books, Home, Sports, etc.)
- Mix of discounted and regular-priced items
- Various stock levels (including out-of-stock items)
- Different rating values (1-5 stars)
- Products with both short and long descriptions
- Mix of featured and regular products
```

**Required Prop Structure:**
- **id**: Unique identifier (number)
- **name**: Product name (string)
- **currentPrice**: Current selling price (number)
- **originalPrice**: Original price before discount (number)
- **category**: Product category (string)
- **description**: Product description (string)
- **rating**: Star rating 1-5 (number)
- **stock**: Available quantity (number)
- **image**: Image filename (string)
- **featured**: Featured product status (boolean)

---

## Advanced Success Criteria

### ProductCard Component Advanced Features:

1. **Price Display Logic**:
   ```jsx
   // Current price always shown
   <span className="current-price">${currentPrice.toFixed(2)}</span>
   
   // Original price only if different from current
   {originalPrice > currentPrice && 
     <span className="original-price">${originalPrice.toFixed(2)}</span>
   }
   
   // Discount percentage calculation
   {originalPrice > currentPrice && 
     <span className="discount-badge">{Math.round((1 - currentPrice/originalPrice) * 100)}% OFF</span>
   }
   ```

2. **Stock Status Logic**:
   ```jsx
   <span className={`stock-status ${stock > 0 ? 'in-stock' : 'out-of-stock'}`}>
     {stock > 0 ? `In Stock (${stock})` : 'Out of Stock'}
   </span>
   ```

3. **Rating Display**:
   ```jsx
   <div className="rating">
     {'★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating))}
     <span className="rating-number">({rating})</span>
   </div>
   ```

4. **Description Truncation**:
   ```jsx
   <p className="description">
     {description.length > 100 ? description.substring(0, 100) + '...' : description}
   </p>
   ```

### App Component Advanced State Management:

1. **Multiple State Variables**:
   ```jsx
   const [selectedCategory, setSelectedCategory] = useState('All');
   const [sortOrder, setSortOrder] = useState('name');
   const [showOutOfStock, setShowOutOfStock] = useState(true);
   const [searchTerm, setSearchTerm] = useState('');
   ```

2. **Complex Filtering Logic**:
   ```jsx
   const filteredProducts = products
     .filter(product => selectedCategory === 'All' || product.category === selectedCategory)
     .filter(product => showOutOfStock || product.stock > 0)
     .filter(product => 
       product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       product.description.toLowerCase().includes(searchTerm.toLowerCase())
     )
     .sort((a, b) => {
       switch(sortOrder) {
         case 'price-low': return a.currentPrice - b.currentPrice;
         case 'price-high': return b.currentPrice - a.currentPrice;
         case 'rating': return b.rating - a.rating;
         default: return a.name.localeCompare(b.name);
       }
     });
   ```

### CategoryFilter Component Logic:

1. **Dynamic Category Extraction**:
   ```jsx
   const categories = ['All', ...new Set(products.map(p => p.category))];
   ```

2. **Active State Management**:
   ```jsx
   <button 
     className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
     onClick={() => onCategoryChange(category)}
   >
     {category}
   </button>
   ```

---

## Expected Complex Output

When completed correctly, you should see a sophisticated product catalog:

```
Advanced Product Catalog

[Search: ________] [Sort: Price ▼] [☑ Show Out of Stock]

[All] [Electronics] [Clothing] [Books] [Home] [Sports]

┌─────────────────────────────┐  ┌─────────────────────────────┐  ┌─────────────────────────────┐
│ Wireless Headphones         │  │ Gaming Laptop              │  │ Cotton T-Shirt              │
│ Electronics                 │  │ Electronics                │  │ Clothing                    │
│ ★★★★☆ (4.5)               │  │ ★★★★★ (5.0)               │  │ ★★★☆☆ (3.5)               │
│ $79.99 $99.99              │  │ $1299.99                   │  │ $19.99 $29.99              │
│ [20% OFF]                  │  │                            │  │ [33% OFF]                  │
│ High-quality wireless...    │  │ Gaming laptop with RTX...   │  │ Comfortable cotton shirt... │
│ In Stock (15)              │  │ In Stock (3)               │  │ Out of Stock               │
└─────────────────────────────┘  └─────────────────────────────┘  └─────────────────────────────┘
```

**Advanced Success Indicators:**

- At least 6 products with complete, complex information
- Dynamic category filtering with active states
- Price sorting (low to high, high to low)
- Stock filtering toggle functionality
- Search functionality across name and description
- Proper discount calculations and badge displays
- Color-coded stock status indicators
- Star rating displays based on numerical values
- Description truncation for long text
- No console errors about missing keys or props
- Smooth interactions and state updates

---

## Submission Instructions

### ProductCard Component:
- Implement all advanced display features
- Handle complex conditional rendering for discounts, stock, ratings
- Use proper price formatting and calculations
- Implement description truncation logic
- Apply correct CSS class names for styling

### CategoryFilter Component:
- Build dynamic category extraction from products
- Implement active state management
- Handle category selection events
- Include "All" option for showing all products

### App Component:
- Define comprehensive products array (minimum 6 products)
- Implement multiple state variables for filtering/sorting
- Create complex filtering and sorting logic
- Handle search functionality
- Manage category selection integration
- Render filtered results with proper keys

---

## Advanced Testing Guidelines

**Development Workflow:**

1. **Start with ProductCard**: Implement basic display first, then add advanced features
2. **Build CategoryFilter**: Focus on dynamic category extraction and state management
3. **Implement App Logic**: Add state management, then filtering/sorting logic
4. **Test Interactions**: Verify all filtering, sorting, and search functionality
5. **Refine UI**: Ensure proper styling and responsive behavior
6. **Performance Check**: Verify efficient re-rendering and no unnecessary updates

**Testing Checklist:**

- [ ] All products display with complete information
- [ ] Price formatting shows currency symbols
- [ ] Discount badges appear only when applicable
- [ ] Stock status shows correct colors and quantities
- [ ] Rating stars display correctly for all rating values
- [ ] Long descriptions are properly truncated
- [ ] Category filtering works for all categories
- [ ] "All" category shows all products
- [ ] Price sorting works in both directions
- [ ] Stock toggle properly shows/hides out-of-stock items
- [ ] Search functionality works across names and descriptions
- [ ] No console errors or warnings

---

## Technical Constraints & Advanced Requirements

### Enhanced Technical Constraints:
- Must use functional components with hooks
- Implement proper state management with useState
- Handle complex filtering with multiple conditions
- Use efficient array methods (filter, map, sort)
- Implement proper event handling for user interactions
- Apply conditional rendering for dynamic content
- Use template literals for dynamic className assignment

### Advanced Data Requirements:
- Minimum 6 product objects with all properties
- At least 4 different categories
- Mix of discounted and regular-priced products
- Various stock levels (including 0 stock items)
- Different rating values across products
- Mix of short and long product descriptions
- Products with different featured status

### Performance Requirements:
- Efficient filtering and sorting operations
- Proper key props for all mapped elements
- Minimal unnecessary re-renders
- Clean and readable code structure
- Proper separation of concerns