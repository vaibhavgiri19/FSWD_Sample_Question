import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import StudentCard from "../src/components/StudentCard";
import App from "../src/App";

describe("Student Management System", () => {
  describe("StudentCard Component", () => {
    it("should display student name", () => {
      render(
        <StudentCard
          name="Alice Johnson"
          grade="A+"
          subject="Math"
          email="alice@school.edu"
          isHonorRoll={true}
        />
      );
      expect(screen.getByText("Alice Johnson")).toBeInTheDocument();
    });

    it("should display grade and subject correctly", () => {
      render(
        <StudentCard
          name="Bob Smith"
          grade="B"
          subject="Physics"
          email="bob@school.edu"
          isHonorRoll={false}
        />
      );
      expect(screen.getByText(/Grade: B/)).toBeInTheDocument();
      expect(screen.getByText(/Subject: Physics/)).toBeInTheDocument();
    });

    it("should display email properly", () => {
      render(
        <StudentCard
          name="Carol Davis"
          grade="A"
          subject="Chemistry"
          email="carol@school.edu"
          isHonorRoll={false}
        />
      );
      expect(screen.getByText("carol@school.edu")).toBeInTheDocument();
    });

    it("should show Honor Roll badge when applicable", () => {
      render(
        <StudentCard
          name="David Wilson"
          grade="A"
          subject="Biology"
          email="david@school.edu"
          isHonorRoll={true}
        />
      );
      expect(screen.getByText("Honor Roll")).toBeInTheDocument();
    });

    it("should not show Honor Roll badge when isHonorRoll is false", () => {
      render(
        <StudentCard
          name="Eve Brown"
          grade="B"
          subject="History"
          email="eve@school.edu"
          isHonorRoll={false}
        />
      );
      expect(screen.queryByText("Honor Roll")).not.toBeInTheDocument();
    });
  });

  describe("App Component Integration", () => {
    it("should render at least 4 StudentCard components", () => {
      render(<App />);
      const cards = screen.queryAllByRole("heading", { level: 3 });
      expect(cards.length).toBeGreaterThanOrEqual(4);
    });

    it("should display multiple unique student names", () => {
      render(<App />);
      const names = screen.getAllByRole("heading", { level: 3 }).map(h => h.textContent);
      const unique = [...new Set(names)];
      expect(unique.length).toBe(names.length);
    });
  });
});
