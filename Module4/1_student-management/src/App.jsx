import React from 'react';
import StudentCard from './components/StudentCard';

function App() {
  // TODO: Define students array with at least 4 student objects
  // Each student should have: id, name, grade, subject, email, isHonorRoll
  const students = [
    // TODO: Add student objects here
  ];

  return (
    <div>
      <h1>Student Management</h1>
      <div className="student-grid">
        {/* TODO: Use map() to render StudentCard components */}
        {/* Remember to pass key prop and all required props */}
      </div>
    </div>
  );
}

export default App;
