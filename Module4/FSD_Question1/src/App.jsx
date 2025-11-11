



import React from "react";
import StudentCard from "./components/StudentCard";

function App() {
  // TODO: Define an array of students with required fields:
  // id, name, grade, subject, email, isHonorRoll
  const students = [
    // Example:
    // { id: 1, name: "Alice Johnson", grade: "A", subject: "Math", email: "alice@school.edu", isHonorRoll: true }
  ];

  return (
    <div>
      <h1>Student Directory</h1>
      <div className="student-grid">
        {/* TODO: Use map() to render StudentCard components */}
        {/* Remember to pass 'key' and all props correctly */}
      </div>
    </div>
  );
}

export default App;
