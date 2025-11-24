Q2. Problem Statement — Movie Library Catalog System

You are required to build a Movie Library Catalog System that displays a list of movies using React components.
Your task is to create a reusable MovieCard component that displays movie details and integrate it with the main App component to render the movie catalog dynamically using the map() method.

This assignment will help you practice props, component composition, list rendering, and conditional UI rendering in React.

🎯 Learning Objectives

By completing this task, you will:

Practice rendering dynamic lists using JavaScript’s map()

Work with different data types (string, number, boolean) as props

Apply conditional rendering to show movie availability status

Write clean, modular, and reusable functional components

Strengthen your understanding of prop passing and component hierarchy

🧩 Task Requirements
Part 1: MovieCard Component

Create a MovieCard component that:

Accepts the following props:

title
director
year
genre
isAvailable


Displays all movie details in a well-structured card format

Shows:

"Available" (green) when isAvailable is true

"Unavailable" (red) when isAvailable is false

Uses the class:

"movie-card" for the main card wrapper

"status-available" for available status

"status-unavailable" for unavailable status

Part 2: App Component Integration

Update the App component to:

Create an array of at least 5 movie objects

Each object must include:

id
title
director
year
genre
isAvailable


Use the map() method to render multiple MovieCard components

Pass all props correctly from the array to each MovieCard

Use key={movie.id} for each list item

Ensure a mix of available and unavailable movies

📌 Constraints

Use functional components only

Each movie must have a unique id

Prop names must match EXACTLY:

title, director, year, genre, isAvailable


Use semantic HTML elements (h3, p, etc.)

Follow the required classNames:

"movie-card"

"status-available"

"status-unavailable"

🎬 Sample Data Structure
{
  id: 1,
  title: "Inception",
  director: "Christopher Nolan",
  year: 2010,
  genre: "Sci-Fi",
  isAvailable: true
}
