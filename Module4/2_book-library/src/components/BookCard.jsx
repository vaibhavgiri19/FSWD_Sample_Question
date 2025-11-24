import React from "react";

function BookCard({ title, author, year, genre, isAvailable }) {
  return (
    <div className="book-card">

      {/* TODO: Display the book title inside an h3 element */}

      {/* TODO: Display author with label: "Author: " */}

      {/* TODO: Display year with label: "Year: " */}

      {/* TODO: Display genre with label: "Genre: " */}

      {/* TODO: Conditionally render availability status */}
      {/* If isAvailable is true → show <p className="status-available">Available</p> */}
      {/* If isAvailable is false → show <p className="status-unavailable">Checked Out</p> */}

    </div>
  );
}

export default BookCard;
