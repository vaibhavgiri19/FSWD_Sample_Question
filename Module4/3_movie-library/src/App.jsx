import React from 'react';
import MovieCard from './components/MovieCard';

function App() {

  // TODO: Define an array named movies with at least 5 objects
  // Each movie must have id, title, director, year, genre, isAvailable
  const movies = [
    // TODO: Add movie objects here
  ];

  return (
    <div>
      <h1>Movie Library Catalog</h1>

      <div className="movie-grid">
        {/* TODO: map over movies and render <MovieCard /> */}
        {/* Pass all props and include key={movie.id} */}
      </div>
    </div>
  );
}

export default App;
