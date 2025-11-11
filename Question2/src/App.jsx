import React from 'react';
import BookCard from './components/BookCard';

function App() {
  // TODO: Define an array of book objects with properties: id, title, author, year, genre, isAvailable
  const books = [
    // TODO: Add at least 5 books with varied data
  ];

  return (
    <div>
      <h1>Library Catalog</h1>
      <div className="book-catalog">
        {/* TODO: Use map() to render BookCard components */}
        {/* Pass key prop and all required props correctly */}
      </div>
    </div>
  );
}

export default App;
