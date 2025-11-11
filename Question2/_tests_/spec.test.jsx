import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import BookCard from "../src/components/BookCard";
import App from "../src/App";

describe("Library Catalog System", () => {
  describe("BookCard Component", () => {
    it("should display book title and author", () => {
      render(<BookCard title="The Great Gatsby" author="F. Scott Fitzgerald" year={1925} genre="Fiction" isAvailable={true} />);
      expect(screen.getByText("The Great Gatsby")).toBeInTheDocument();
      expect(screen.getByText(/by F. Scott Fitzgerald/)).toBeInTheDocument();
    });

    it("should display year and genre correctly", () => {
      render(<BookCard title="1984" author="George Orwell" year={1949} genre="Dystopian" isAvailable={false} />);
      expect(screen.getByText("(1949)")).toBeInTheDocument();
      expect(screen.getByText(/Genre: Dystopian/)).toBeInTheDocument();
    });

    it("should show 'Available' when isAvailable is true", () => {
      render(<BookCard title="The Alchemist" author="Paulo Coelho" year={1988} genre="Adventure" isAvailable={true} />);
      expect(screen.getByText("Available")).toBeInTheDocument();
    });

    it("should show 'Checked Out' when isAvailable is false", () => {
      render(<BookCard title="The Hobbit" author="J.R.R. Tolkien" year={1937} genre="Fantasy" isAvailable={false} />);
      expect(screen.getByText("Checked Out")).toBeInTheDocument();
    });
  });

  describe("App Component Integration", () => {
    it("should render at least 5 BookCard components", () => {
      render(<App />);
      const books = screen.queryAllByRole("heading", { level: 3 });
      expect(books.length).toBeGreaterThanOrEqual(5);
    });

    it("should display unique book titles", () => {
      render(<App />);
      const titles = screen.getAllByRole("heading", { level: 3 }).map(h => h.textContent);
      const uniqueTitles = [...new Set(titles)];
      expect(uniqueTitles.length).toBe(titles.length);
    });
  });
});
