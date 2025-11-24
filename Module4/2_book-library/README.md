Q1. Problem Statement — Book Library Catalog System

Create a digital library catalog system that displays a collection of books using React components.
Your task is to build a reusable BookCard component that shows book details and integrate it with the main App component to render the entire catalog using array mapping.

This task will assess your understanding of props, component structure, conditional rendering, and list rendering techniques in React.

🎯 Learning Objectives

By completing this assignment, you will learn to:

Implement dynamic list rendering using the map() method

Create components that handle strings, numbers, and boolean data

Use conditional rendering for availability status

Follow proper component structure and prop passing

Build clean, reusable functional components

🧩 Task Requirements
Part 1: BookCard Component

Create a BookCard component that:

Accepts these props:

title
author
year
genre
isAvailable


Displays all book details in a structured card layout

Shows:

"Available" (green) when isAvailable is true

"Checked Out" (red) when isAvailable is false

Uses correct HTML structure (h3, p, etc.)

Uses CSS class:

"book-card" → main card container

"status-available" → available text

"status-unavailable" → checked-out text

Part 2: App Component Integration

Update the App component to:

Define an array of at least 5 book objects, each containing:

id
title
author
year
genre
isAvailable


Render a list of BookCard components using .map()

Pass all props correctly to each BookCard

Use key={book.id} for each rendered card

Ensure all book information is displayed properly

📌 Constraints

Use functional components only

Each book must have a unique id

Props must match EXACT names:

title, author, year, genre, isAvailable


Use semantic HTML elements throughout

Use the classNames exactly as specified:

"book-card"

"status-available"

"status-unavailable"

📘 Sample Book Object
{
  id: 1,
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  genre: "Fiction",
  isAvailable: true
}

📤 Submission Guidelines

Complete all TODOs in:

src/components/BookCard.jsx

src/App.jsx

Ensure your project runs without errors

All provided test cases must pass

Follow React best practices for component structure and list rendering

Maintain readable and clean code format

📊 Evaluation Criteria (20 marks)
Category	Marks	Description
Component Structure	8 marks	Correct BookCard implementation with props
List Rendering	6 marks	Proper usage of map() and key props
Conditional Logic	4 marks	Correct availability status rendering
Data Display	2 marks	All properties rendered correctly
Total	20 marks	—