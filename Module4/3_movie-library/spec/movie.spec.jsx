import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import MovieCard from "../src/components/MovieCard";
import App from "../src/App";

describe("Movie Library Catalog Assessment", () => {

  describe("MovieCard Component Props", () => {

    it("should display movie title", () => {
      render(
        <MovieCard
          title="Inception"
          director="Christopher Nolan"
          year={2010}
          genre="Sci-Fi"
          isAvailable={true}
        />
      );
      expect(screen.getByText("Inception")).toBeInTheDocument();
    });

    it("should display director and year", () => {
      render(
        <MovieCard
          title="Interstellar"
          director="Christopher Nolan"
          year={2014}
          genre="Sci-Fi"
          isAvailable={false}
        />
      );
      expect(screen.getByText(/Director:/)).toBeInTheDocument();
      expect(screen.getByText(/Year:/)).toBeInTheDocument();
    });

    it("should display genre", () => {
      render(
        <MovieCard
          title="Avatar"
          director="James Cameron"
          year={2009}
          genre="Fantasy"
          isAvailable={true}
        />
      );
      expect(screen.getByText(/Genre:/)).toBeInTheDocument();
    });

    it("should show Available when isAvailable is true", () => {
      render(
        <MovieCard
          title="Available Movie"
          director="A Director"
          year={2000}
          genre="Drama"
          isAvailable={true}
        />
      );
      const status = screen.getByText("Available");
      expect(status).toHaveClass("status-available");
    });

  });

  describe("Conditional Rendering", () => {

    it("should show Unavailable when isAvailable is false", () => {
      render(
        <MovieCard
          title="Unavailable Movie"
          director="Test"
          year={2015}
          genre="Action"
          isAvailable={false}
        />
      );
      const status = screen.getByText("Unavailable");
      expect(status).toHaveClass("status-unavailable");
    });

  });

  describe("App Component List Rendering", () => {

    it("should render at least 5 movie cards", () => {
      render(<App />);
      const titles = screen.queryAllByRole("heading", { level: 3 });
      expect(titles.length).toBeGreaterThanOrEqual(5);
    });

    it("should show unique movie titles", () => {
      render(<App />);
      const titles = screen.queryAllByRole("heading", { level: 3 }).map(h => h.textContent);
      const unique = [...new Set(titles)];
      expect(unique.length).toBe(titles.length);
    });

    it("should show both Available and Unavailable movies", () => {
      render(<App />);
      const available = screen.queryAllByText("Available");
      const unavailable = screen.queryAllByText("Unavailable");

      expect(available.length).toBeGreaterThan(0);
      expect(unavailable.length).toBeGreaterThan(0);
    });

    it("should show multiple genres", () => {
      render(<App />);
      const genreElements = screen.queryAllByText(/Genre:/);
      const genres = genreElements.map(el => el.textContent.replace("Genre: ", ""));
      const unique = [...new Set(genres)];
      expect(unique.length).toBeGreaterThan(1);
    });

  });

});
