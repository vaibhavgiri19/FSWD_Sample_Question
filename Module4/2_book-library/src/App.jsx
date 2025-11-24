import React from "react";
import BookCard from "./components/BookCard";

function App() {
  // TODO: Create an array named 'books' with at least 5 book objects
  // Each object should include: id, title, author, year, genre, isAvailable

  const books = [
    // TODO: Add book objects here
  ];

  return (
    <div>
      <h1>Library Catalog</h1>

      <div className="book-catalog">
        {/* TODO: Use map() to render BookCard components */}
        {/* Pass props: title, author, year, genre, isAvailable */}
        {/* Include key={book.id} */}
      </div>
    </div>
  );
}

export default App;
