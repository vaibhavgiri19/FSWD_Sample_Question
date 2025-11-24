import React from 'react';

function MovieCard({ title, director, year, genre, isAvailable }) {
  return (
    <div className="movie-card">
      {/* TODO: Display movie title in an h3 */}

      {/* TODO: Display director with label "Director: " */}

      {/* TODO: Display year with label "Year: " */}

      {/* TODO: Display genre with label "Genre: " */}

      {/* TODO: Conditionally render status */}
      {/* If isAvailable === true -> <p className="status-available">Available</p> */}
      {/* If isAvailable === false -> <p className="status-unavailable">Unavailable</p> */}
    </div>
  );
}

export default MovieCard;
