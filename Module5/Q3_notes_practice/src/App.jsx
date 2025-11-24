import React, { useState } from 'react';

const initialNotes = [
  { id: 1, text: 'Read chapter 5' },
  { id: 2, text: 'Prepare meeting summary' },
  { id: 3, text: 'Plan weekend schedule' },
];

function App() {
  const [notes, setNotes] = useState(initialNotes);
  const [editingNote, setEditingNote] = useState(null);
  const [editText, setEditText] = useState('');
  const [noteToDelete, setNoteToDelete] = useState(null);

  // TODO: Handle edit click
  const handleEditClick = (note) => {
    // your code
  };

  // TODO: Save edited note
  const handleSave = () => {
    // your code
  };

  // TODO: Cancel edit
  const handleCancelEdit = () => {
    // your code
  };

  // TODO: Delete click handler
  const handleDeleteClick = (note) => {
    // your code
  };

  // TODO: Confirm delete
  const handleConfirmDelete = () => {
    // your code
  };

  // TODO: Cancel delete
  const handleCancelDelete = () => {
    // your code
  };

  return (
    <div>
      <h1>My Notes</h1>
      {notes.map((note) => (
        <div key={note.id} style={{ border: '1px solid black', margin: 8, padding: 8 }}>
          {editingNote && editingNote.id === note.id ? (
            <div>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancelEdit}>Cancel</button>
            </div>
          ) : (
            <div>
              <p>{note.text}</p>
              <button onClick={() => handleEditClick(note)}>Edit</button>
              <button onClick={() => handleDeleteClick(note)}>Delete</button>
            </div>
          )}
        </div>
      ))}

      {noteToDelete && (
        <div style={{ marginTop: 16, padding: 8, border: '1px solid red' }}>
          <p>Are you sure you want to delete "{noteToDelete.text}"?</p>
          <button onClick={handleConfirmDelete}>Confirm</button>
          <button onClick={handleCancelDelete}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default App;
