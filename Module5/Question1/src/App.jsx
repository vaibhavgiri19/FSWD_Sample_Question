import React, { useState } from 'react';

const initialContacts = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Alice Johnson' },
];

function App() {
  const [contacts, setContacts] = useState(initialContacts);

  // Provided states
  const [editingContact, setEditingContact] = useState(null);
  const [editName, setEditName] = useState('');
  const [contactToDelete, setContactToDelete] = useState(null);

  // TODO: Implement edit click handler
  const handleEditClick = (contact) => {
    // Your code here
  };

  // TODO: Implement save handler (with validation)
  const handleSave = () => {
    // Your code here
    // Hint: Don't allow empty or whitespace-only names
  };

  // TODO: Implement cancel edit
  const handleCancelEdit = () => {
    // Your code here
  };

  // TODO: Implement delete click handler
  const handleDeleteClick = (contact) => {
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
      <h1>My Contact List</h1>

      {contacts.map((contact) => (
        <div
          key={contact.id}
          style={{ border: '1px solid black', margin: '8px', padding: '8px' }}
        >
          {editingContact && editingContact.id === contact.id ? (
            <div>
              <input
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                placeholder="Enter name"
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancelEdit}>Cancel</button>
            </div>
          ) : (
            <div>
              <p>{contact.name}</p>
              <button onClick={() => handleEditClick(contact)}>Edit</button>
              <button onClick={() => handleDeleteClick(contact)}>Delete</button>
            </div>
          )}
        </div>
      ))}

      {contactToDelete && (
        <div
          style={{
            marginTop: '16px',
            padding: '8px',
            border: '1px solid red',
          }}
        >
          <p>Are you sure you want to delete "{contactToDelete.name}"?</p>
          <button onClick={handleConfirmDelete}>Confirm</button>
          <button onClick={handleCancelDelete}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default App;
