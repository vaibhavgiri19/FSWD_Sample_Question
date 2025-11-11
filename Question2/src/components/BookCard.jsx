import React from 'react';

function BookCard({ title, author, year, genre, isAvailable }) {
  return (
    <div className="book-card">
      {/* TODO: Display book title in an h3 element */}

      {/* TODO: Display author prefixed with "by" */}

      {/* TODO: Display publication year in parentheses */}

      {/* TODO: Display genre prefixed with "Genre: " */}

      {/* TODO: Conditionally render status based on isAvailable */}
      {/* If true → show "Available" with className "status-available" */}
      {/* If false → show "Checked Out" with className "status-unavailable" */}
    </div>
  );
}

export default BookCard;
