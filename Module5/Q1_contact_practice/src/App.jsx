import React, { useState } from 'react';

const initialContacts = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Alice Johnson' },
];

function App() {
  const [contacts, setContacts] = useState(initialContacts);

  const [editingContact, setEditingContact] = useState(null);
  const [editName, setEditName] = useState('');
  const [contactToDelete, setContactToDelete] = useState(null);

  // TODO: Implement edit click handler
  const handleEditClick = (contact) => {
    // Your code here
  };

  // TODO: Save edited contact
  const handleSave = () => {
    // Your code here
  };

  // TODO: Cancel edit
  const handleCancelEdit = () => {
    // Your code here
  };

  // TODO: Delete click handler
  const handleDeleteClick = (contact) => {
    // Your code here
  };

  // TODO: Confirm delete
  const handleConfirmDelete = () => {
    // Your code here
  };

  // TODO: Cancel delete
  const handleCancelDelete = () => {
    // Your code here
  };

  return (
    <div>
      <h1>My Contact List</h1>
      {contacts.map((contact) => (
        <div key={contact.id} style={{ border: '1px solid black', margin: '8px', padding: '8px' }}>
          {editingContact && editingContact.id === contact.id ? (
            <div>
              <input
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
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
        <div style={{ marginTop: '16px', padding: '8px', border: '1px solid red' }}>
          <p>Are you sure you want to delete "{contactToDelete.name}"?</p>
          <button onClick={handleConfirmDelete}>Confirm</button>
          <button onClick={handleCancelDelete}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default App;
