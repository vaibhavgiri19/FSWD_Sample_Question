import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProductCard from '../src/components/ProductCard';
import App from '../src/App';

describe('Product Showcase System Assessment', () => {
  
  describe('ProductCard Component Props', () => {
    it('should accept and display product name prop', () => {
      render(
        <ProductCard 
          name="Wireless Mouse" 
          price={29.99} 
          originalPrice={39.99}
          category="Electronics" 
          inStock={true} 
          isOnSale={true} 
        />
      );
      expect(screen.getByText('Wireless Mouse')).toBeInTheDocument();
    });

    it('should display category with proper formatting', () => {
      render(
        <ProductCard 
          name="Coffee Mug" 
          price={12.99} 
          originalPrice={12.99}
          category="Home" 
          inStock={true} 
          isOnSale={false} 
        />
      );
      expect(screen.getByText(/Category:.*Home/)).toBeInTheDocument();
    });

    it('should display current price correctly', () => {
      render(
        <ProductCard 
          name="Notebook" 
          price={5.99} 
          originalPrice={7.99}
          category="Stationery" 
          inStock={false} 
          isOnSale={true} 
        />
      );
      expect(screen.getByText(/\$5\.99/)).toBeInTheDocument();
    });

    it('should show original price when on sale', () => {
      render(
        <ProductCard 
          name="T-Shirt" 
          price={15.99} 
          originalPrice={25.99}
          category="Clothing" 
          inStock={true} 
          isOnSale={true} 
        />
      );
      expect(screen.getByText(/\$25\.99/)).toBeInTheDocument();
    });
  });

  describe('Conditional Rendering Features', () => {
    it('should show sale badge when isOnSale is true', () => {
      render(
        <ProductCard 
          name="Sale Product" 
          price={19.99} 
          originalPrice={29.99}
          category="Electronics" 
          inStock={true} 
          isOnSale={true} 
        />
      );
      expect(screen.getByText('SALE')).toBeInTheDocument();
    });

    it('should not show sale badge when isOnSale is false', () => {
      render(
        <ProductCard 
          name="Regular Product" 
          price={19.99} 
          originalPrice={19.99}
          category="Electronics" 
          inStock={true} 
          isOnSale={false} 
        />
      );
      expect(screen.queryByText('SALE')).not.toBeInTheDocument();
    });

    it('should show "In Stock" when inStock is true', () => {
      render(
        <ProductCard 
          name="Available Product" 
          price={29.99} 
          originalPrice={29.99}
          category="Books" 
          inStock={true} 
          isOnSale={false} 
        />
      );
      expect(screen.getByText('In Stock')).toBeInTheDocument();
    });

    it('should show "Out of Stock" when inStock is false', () => {
      render(
        <ProductCard 
          name="Unavailable Product" 
          price={39.99} 
          originalPrice={39.99}
          category="Sports" 
          inStock={false} 
          isOnSale={false} 
        />
      );
      expect(screen.getByText('Out of Stock')).toBeInTheDocument();
    });
  });

  describe('App Component List Rendering', () => {
    it('should render multiple product cards', () => {
      render(<App />);
      
      const productCards = screen.getAllByText(/Category:/);
      expect(productCards.length).toBeGreaterThanOrEqual(4);
    });

    it('should display different product names', () => {
      render(<App />);
      
      const headings = screen.getAllByRole('heading', { level: 3 });
      expect(headings.length).toBeGreaterThanOrEqual(4);
      
      const names = headings.map(h => h.textContent);
      const uniqueNames = [...new Set(names)];
      expect(uniqueNames.length).toBe(names.length);
    });

    it('should show sale badges for appropriate products', () => {
      render(<App />);
      
      const saleBadges = screen.queryAllByText('SALE');
      expect(saleBadges.length).toBeGreaterThan(0);
      expect(saleBadges.length).toBeLessThan(4);
    });

    it('should display various categories across products', () => {
      render(<App />);
      
      const categoryElements = screen.getAllByText(/Category:/);
      expect(categoryElements.length).toBeGreaterThanOrEqual(4);
      
      const categories = categoryElements.map(el => el.textContent.replace('Category: ', ''));
      const uniqueCategories = [...new Set(categories)];
      expect(uniqueCategories.length).toBeGreaterThan(1);
    });
  });
});