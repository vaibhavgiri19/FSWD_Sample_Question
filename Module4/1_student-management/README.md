README
📘 Problem Statement

You need to create a Student Management System that displays a list of students using React components.
Your task is to build a StudentCard component and integrate it with the main App component to render multiple students dynamically using the map() method.

This assessment is designed to test your understanding of props, component structure, list rendering, and conditional rendering in React.

🎯 Learning Objectives

By completing this assignment, you will learn to:

Create reusable React components using props

Implement list rendering using JavaScript’s map()

Pass data between components

Use conditional rendering to show/hide UI elements

Apply proper key props for dynamic lists

Follow correct React component structure & organization

🧩 Task Requirements
Part 1: StudentCard Component

Create a StudentCard component that:

Accepts the following props:

name
grade
subject
email
isHonorRoll


Displays student information in a clean card layout

Shows an “Honor Roll” badge when isHonorRoll is true

Uses proper HTML structure with appropriate className values

Part 2: App Component Integration

Update the App component to:

Define an array of student objects, each containing:

id
name
grade
subject
email
isHonorRoll


Use the .map() method to render multiple StudentCard components

Pass all required props to each StudentCard

Use id as the key prop during list rendering

Ensure that the UI displays all student data correctly

📌 Constraints

Use functional components only

Each student must have a unique id for the key prop

The honor roll badge should appear only when:

isHonorRoll === true


Props must match exactly:

name, grade, subject, email, isHonorRoll


Use the following classNames:

"student-card" → main card container

"honor-badge" → honor roll badge

🧪 Sample Data Structure
{
  id: 1,
  name: "Alice Johnson",
  grade: "A",
  subject: "Mathematics",
  email: "alice@school.edu",
  isHonorRoll: true
}

📁 Files to Modify

You will complete the TODOs in:

src/components/StudentCard.jsx

src/App.jsx

Do not modify the test files.

📤 Submission Guidelines

Ensure all TODOs are completed

Your components should render without any errors

All test cases must pass

Follow React best practices for:

Component structure

Prop usage

List rendering

Your final UI should display all required student details correctly

📝 Evaluation Criteria (20 marks)
Category	Marks	Description
Component Structure	8 marks	Correct component definition and prop handling
List Rendering	6 marks	Proper use of map() and key props
Conditional Rendering	4 marks	Honor Roll badge displayed correctly
Integration	2 marks	App correctly renders all students