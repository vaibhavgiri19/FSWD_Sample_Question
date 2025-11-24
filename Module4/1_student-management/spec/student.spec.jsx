import React from "react";
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import StudentCard from '../src/components/StudentCard';
import App from '../src/App';

describe('Student Management System Assessment', () => {
  
  // -------------------------
  //   STUDENTCARD PROPS TESTS
  // -------------------------
  describe('StudentCard Component Props', () => {

    it('should accept and display student name prop', () => {
      render(
        <StudentCard 
          name="Alice Johnson" 
          grade="A" 
          subject="Mathematics" 
          email="alice@school.edu"
          isHonorRoll={true} 
        />
      );
      expect(screen.getByText('Alice Johnson')).toBeInTheDocument();
    });

    it('should display subject with proper formatting', () => {
      render(
        <StudentCard 
          name="Bob Lee" 
          grade="B" 
          subject="History" 
          email="bob@school.edu"
          isHonorRoll={false} 
        />
      );
      expect(screen.getByText(/Subject:\s*History/)).toBeInTheDocument();
    });

    // ⭐ FIXED TEST — no duplicate match
    it('should display grade correctly', () => {
      render(
        <StudentCard 
          name="Cathy" 
          grade="A+" 
          subject="Physics" 
          email="cathy@school.edu"
          isHonorRoll={true} 
        />
      );
      expect(screen.getByText(/Grade:\s*A\+/)).toBeInTheDocument();
    });

    it('should show email', () => {
      render(
        <StudentCard 
          name="Dan" 
          grade="C" 
          subject="Chemistry" 
          email="dan@school.edu"
          isHonorRoll={false} 
        />
      );
      expect(screen.getByText(/@school\.edu/)).toBeInTheDocument();
    });
  });

  // -------------------------
  //   HONOR BADGE TESTS
  // -------------------------
  describe('Conditional Rendering Features', () => {

    it('should show honor badge when isHonorRoll is true', () => {
      render(
        <StudentCard 
          name="Honored" 
          grade="A" 
          subject="Biology" 
          email="honor@school.edu"
          isHonorRoll={true} 
        />
      );
      expect(screen.getByText('Honor Roll')).toBeInTheDocument();
    });

    it('should not show honor badge when isHonorRoll is false', () => {
      render(
        <StudentCard 
          name="Regular" 
          grade="B" 
          subject="Arts" 
          email="reg@school.edu"
          isHonorRoll={false} 
        />
      );
      expect(screen.queryByText('Honor Roll')).not.toBeInTheDocument();
    });
  });

  // -------------------------
  //   APP COMPONENT TESTS
  // -------------------------
  describe('App Component List Rendering', () => {

    it('should render multiple student cards', () => {
      render(<App />);
      
      const studentCards = screen.getAllByText(/Subject:/);
      expect(studentCards.length).toBeGreaterThanOrEqual(4);
    });

    it('should display different student names', () => {
      render(<App />);
      
      const headings = screen.getAllByRole('heading', { level: 3 });
      expect(headings.length).toBeGreaterThanOrEqual(4);
      
      const names = headings.map(h => h.textContent);
      const uniqueNames = [...new Set(names)];
      expect(uniqueNames.length).toBe(names.length);
    });

    it('should show honor badges for appropriate students', () => {
      render(<App />);
      
      const honorBadges = screen.queryAllByText('Honor Roll');
      expect(honorBadges.length).toBeGreaterThan(0);
      expect(honorBadges.length).toBeLessThan(4);
    });

    it('should display various subjects across students', () => {
      render(<App />);
      
      const subjectElements = screen.getAllByText(/Subject:/);
      expect(subjectElements.length).toBeGreaterThanOrEqual(4);
      
      const subjects = subjectElements.map(el => el.textContent.replace('Subject: ', ''));
      const uniqueSubjects = [...new Set(subjects)];
      expect(uniqueSubjects.length).toBeGreaterThan(1);
    });
  });
});
