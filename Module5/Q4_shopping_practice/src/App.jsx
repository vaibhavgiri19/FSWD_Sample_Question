import React, { useState } from 'react';

const initialItems = [
  { id: 1, name: 'Milk' },
  { id: 2, name: 'Eggs' },
  { id: 3, name: 'Bread' },
];

function App() {
  const [items, setItems] = useState(initialItems);
  const [editingItem, setEditingItem] = useState(null);
  const [editName, setEditName] = useState('');
  const [itemToDelete, setItemToDelete] = useState(null);

  // TODO: edit click
  const handleEditClick = (item) => {};

  // TODO: save
  const handleSave = () => {};

  // TODO: cancel edit
  const handleCancelEdit = () => {};

  // TODO: delete click
  const handleDeleteClick = (item) => {};

  // TODO: confirm delete
  const handleConfirmDelete = () => {};

  // TODO: cancel delete
  const handleCancelDelete = () => {};

  return (
    <div>
      <h1>Shopping List</h1>
      {items.map(item => (
        <div key={item.id} style={{border:'1px solid black',margin:8,padding:8}}>
          {editingItem && editingItem.id === item.id ? (
            <div>
              <input value={editName} onChange={(e)=>setEditName(e.target.value)} />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancelEdit}>Cancel</button>
            </div>
          ):(
            <div>
              <p>{item.name}</p>
              <button onClick={()=>handleEditClick(item)}>Edit</button>
              <button onClick={()=>handleDeleteClick(item)}>Delete</button>
            </div>
          )}
        </div>
      ))}
      {itemToDelete && (
        <div style={{border:'1px solid red',padding:8,marginTop:16}}>
          <p>Delete "{itemToDelete.name}"?</p>
          <button onClick={handleConfirmDelete}>Confirm</button>
          <button onClick={handleCancelDelete}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default App;
