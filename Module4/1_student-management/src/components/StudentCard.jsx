import React from 'react';

function StudentCard({ name, grade, subject, email, isHonorRoll }) {
  return (
    <div className="student-card">
      {/* TODO: Display student name in an h3 element */}

      {/* TODO: Display subject with label "Subject: " */}

      {/* TODO: Display grade */}

      {/* TODO: Display email */}

      {/* TODO: Conditionally render Honor Roll badge when isHonorRoll is true */}
      {/* Badge should have className "honor-badge" and text "Honor Roll" */}
    </div>
  );
}

export default StudentCard;
