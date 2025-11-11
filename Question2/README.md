# 📚 Digital Library Catalog System

## 🧩 Problem Statement
Create a **digital library catalog system** that displays a collection of books using React components.  
You’ll build a **BookCard** component that shows book details and integrate it with the main **App** component to render the entire library catalog using array mapping techniques.

---

## 🎯 Learning Objectives
- Implement **dynamic list rendering** using the `map()` method  
- Create components that handle different data types (strings, numbers, booleans)  
- Practice **conditional rendering** for availability status  
- Use proper **component structure** and **prop passing**

---

## ⚙️ Task Requirements

### Part 1: BookCard Component
Create a `BookCard` component that:
- Accepts props: `title`, `author`, `year`, `genre`, `isAvailable`
- Displays all book information in a structured card layout
- Shows an **"Available"** or **"Checked Out"** status based on `isAvailable`
- Uses appropriate HTML elements and CSS classes:
  - `className="book-card"` for the main container
  - `className="status-available"` or `className="status-unavailable"` for status indicators

---

### Part 2: App Component Integration
Update the `App` component to:
- Define an array of book objects with all required properties
- Use the **`map()` method** to render multiple `BookCard` components
- Pass a proper `key` prop using unique book IDs
- Display at least **5 different books** with varied data

---

## 🧱 Constraints
- Use **functional components** only  
- Each book must have a **unique id**  
- Component props must match exactly:  
  `title`, `author`, `year`, `genre`, `isAvailable`  
- Use **semantic HTML elements**

---

## 🧾 Sample Data Structure
```js
{
  id: 1,
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  genre: "Fiction",
  isAvailable: true
}
