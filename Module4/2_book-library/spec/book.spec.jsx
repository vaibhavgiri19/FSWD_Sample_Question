import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import BookCard from "../src/components/BookCard";
import App from "../src/App";

describe("Book Library Catalog Assessment", () => {
  describe("BookCard Component Props", () => {
    it("should accept and display book title prop", () => {
      render(
        <BookCard
          title="The Great Gatsby"
          author="F. Scott Fitzgerald"
          year={1925}
          genre="Fiction"
          isAvailable={true}
        />
      );
      expect(screen.getByText("The Great Gatsby")).toBeInTheDocument();
    });

    // ✅ FINAL FIXED VERSION — handles split text correctly
    it("should display author and year properly", () => {
      render(
        <BookCard
          title="1984"
          author="George Orwell"
          year={1949}
          genre="Dystopian"
          isAvailable={false}
        />
      );

      // Match "by George Orwell" even though it's split across nodes
      expect(
        screen.getByText((content) =>
          content.replace(/\s+/g, " ").trim() === "by George Orwell"
        )
      ).toBeInTheDocument();

      // Match "(1949)" even though parentheses may be split
      expect(
        screen.getByText((content) =>
          content.replace(/\s+/g, " ").trim() === "(1949)"
        )
      ).toBeInTheDocument();
    });

    it("should display genre", () => {
      render(
        <BookCard
          title="The Hobbit"
          author="J.R.R. Tolkien"
          year={1937}
          genre="Fantasy"
          isAvailable={true}
        />
      );
      expect(screen.getByText(/Genre:\s*Fantasy/)).toBeInTheDocument();
    });

    it("should show Available status when isAvailable is true", () => {
      render(
        <BookCard
          title="Available Book"
          author="Author"
          year={2000}
          genre="Non-fiction"
          isAvailable={true}
        />
      );
      const status = screen.getByText("Available");
      expect(status).toBeInTheDocument();
      expect(status).toHaveClass("status-available");
    });
  });

  describe("Conditional Rendering Features", () => {
    it("should show Checked Out when isAvailable is false", () => {
      render(
        <BookCard
          title="Checked Out Book"
          author="Author"
          year={2010}
          genre="History"
          isAvailable={false}
        />
      );
      const status = screen.getByText("Checked Out");
      expect(status).toBeInTheDocument();
      expect(status).toHaveClass("status-unavailable");
    });
  });

  describe("App Component List Rendering", () => {
    it("should render at least 5 book cards", () => {
      render(<App />);
      const cards = screen.getAllByRole("heading", { level: 3 });
      expect(cards.length).toBeGreaterThanOrEqual(5);
    });

    it("should display unique book titles", () => {
      render(<App />);
      const headings = screen.getAllByRole("heading", { level: 3 });
      const titles = headings.map((h) => h.textContent);
      const unique = [...new Set(titles)];
      expect(unique.length).toBe(titles.length);
    });

    it("should show both Available and Checked Out statuses", () => {
      render(<App />);
      const available = screen.queryAllByText("Available");
      const checkedOut = screen.queryAllByText("Checked Out");
      expect(available.length).toBeGreaterThan(0);
      expect(checkedOut.length).toBeGreaterThan(0);
    });

    it("should display various genres across books", () => {
      render(<App />);
      const genreElements = screen.getAllByText(/Genre:/);
      expect(genreElements.length).toBeGreaterThanOrEqual(5);
      const genres = genreElements.map((el) =>
        el.textContent.replace("Genre: ", "")
      );
      const uniqueGenres = [...new Set(genres)];
      expect(uniqueGenres.length).toBeGreaterThan(1);
    });
  });
});
