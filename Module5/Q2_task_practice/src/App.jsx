import React, { useState } from 'react';

const initialTasks = [
  { id: 1, title: 'Finish React homework' },
  { id: 2, title: 'Buy groceries' },
  { id: 3, title: 'Prepare for presentation' },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [editingTask, setEditingTask] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [taskToDelete, setTaskToDelete] = useState(null);

  // TODO: Implement edit click handler
  const handleEditClick = (task) => {
    // Your code here
  };

  // TODO: Implement save after editing (with validation)
  const handleSave = () => {
    // Your code here
  };

  // TODO: Implement cancel edit
  const handleCancelEdit = () => {
    // Your code here
  };

  // TODO: Implement delete click handler
  const handleDeleteClick = (task) => {
    // Your code here
  };

  // TODO: Implement confirm delete
  const handleConfirmDelete = () => {
    // Your code here
  };

  // TODO: Implement cancel delete
  const handleCancelDelete = () => {
    // Your code here
  };

  return (
    <div>
      <h1>My Task List</h1>
      {tasks.map((task) => (
        <div
          key={task.id}
          style={{ border: '1px solid black', margin: '8px', padding: '8px' }}
        >
          {editingTask && editingTask.id === task.id ? (
            <div>
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                placeholder="Edit task title"
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancelEdit} style={{ marginLeft: '8px' }}>Cancel</button>
            </div>
          ) : (
            <div>
              <p>{task.title}</p>
              <button onClick={() => handleEditClick(task)}>Edit</button>
              <button onClick={() => handleDeleteClick(task)} style={{ marginLeft: '8px' }}>Delete</button>
            </div>
          )}
        </div>
      ))}

      {taskToDelete && (
        <div style={{ marginTop: '16px', padding: '8px', border: '1px solid red' }}>
          <p>Are you sure you want to delete "{taskToDelete.title}"?</p>
          <button onClick={handleConfirmDelete} style={{ backgroundColor: 'red', color: 'white' }}>Confirm</button>
          <button onClick={handleCancelDelete} style={{ marginLeft: '8px' }}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default App;
