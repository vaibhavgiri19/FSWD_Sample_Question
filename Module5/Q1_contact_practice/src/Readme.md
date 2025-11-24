Assessment Problem Statement

Welcome to this React state-management challenge!
In this assessment, you will implement the Update and Delete operations in a simple Contact Management System.

This assignment focuses on the core parts of CRUD that developers use every day.
You will work with existing code and complete only the missing logic.

📌 About the Project

The basic setup is already provided:

A list of contacts appears on the screen.

All React components and UI styles are ready.

The “Add Contact” part is already implemented for you.

Your job is to complete the Update (Edit) and Delete features by implementing the missing handler functions inside App.jsx.

This assignment will help you master:

Controlled inputs

Updating lists with map()

Deleting items with filter()

Managing multiple UI states (editing, deleting, canceling)

Preventing invalid updates

📝 Tasks

Implement the following functions in App.jsx:

1️⃣ handleEditClick(contact)

Triggered when the Edit button is clicked.

Should open the edit form

Should prefill the input with the contact’s current name

2️⃣ handleSave()

Called when the user clicks Save.

Updates the selected contact’s name

Should validate: name cannot be empty

After saving, close the edit mode

3️⃣ handleCancelEdit()

Triggered when the user clicks Cancel in edit mode.

Should close the edit UI

Should restore the original contact name

4️⃣ handleDeleteClick(contact)

Triggered when the Delete button is clicked.

Should show a delete confirmation box

Should store the selected contact in state (contactToDelete)

5️⃣ handleConfirmDelete()

Called when the user confirms deletion.

Should delete the selected contact

Should close the confirmation box

6️⃣ handleCancelDelete()

Called when the user cancels deletion.

Should close the confirmation box

No changes should be made to the list

✔️ Provided State Variables

Do NOT create new state variables.
Use the ones already included in the boilerplate:

contacts

editingContact

editName

contactToDelete

🎯 Expected Behaviour

You must ensure the following:

✔️ Editing

Clicking Edit opens an input box with the current name.

Saving updates the name in the list.

Empty input → should NOT save.

Cancel returns the UI to normal.

✔️ Deleting

Clicking Delete opens a confirmation message.

Confirm → removes the contact.

Cancel → keeps the contact.

🧪 Testing

This project comes with automated test cases.
Before submitting:

Make sure all tests pass (npm test)

Use logical, readable code inside App.jsx

Do NOT modify tests or other files

📤 Submission Guidelines

Submit App.jsx only.
Do NOT modify:

Test files

Boilerplate

Component structure

💡 Tip for Students

Update & Delete operations are where most beginners struggle.
If you master:

map() for updating items

filter() for removing items

Controlled inputs

UI state switching

…you’ll be ready for real-world React development