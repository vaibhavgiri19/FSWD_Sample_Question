# 📘 React Notes Management System — Update & Delete  
In this assignment, you will implement the Update and Delete functionality in a Notes Management application built using React.

A list of notes is already provided in the project. Your task is to complete the missing logic required to edit and delete notes. This assessment will strengthen your understanding of state management, controlled components, and list operations in React.

This challenge is designed to give you real-world practice in modifying items inside arrays — one of the most common tasks in React development.

🧩 Your Tasks

You must complete the following functions inside App.jsx:

1️⃣ handleEditClick(note)

Triggered when the Edit button is clicked.
Should:

Enter edit mode

Pre-fill the input field with the note’s current text

2️⃣ handleSave()

Triggered when the Save button is clicked.
Should:

Update the note text in the notes list

Validate that the text is not empty

Exit edit mode after saving

3️⃣ handleCancelEdit()

Triggered when the user decides not to edit anymore.
Should:

Exit edit mode

Reset the input field

4️⃣ handleDeleteClick(note)

Triggered when the Delete button is clicked.
Should:

Open the delete confirmation box

Store the selected note in noteToDelete

5️⃣ handleConfirmDelete()

Triggered when the user confirms deletion.
Should:

Remove the note from the list

Close the confirmation box

6️⃣ handleCancelDelete()

Triggered when the user cancels deletion.
Should:

Close the confirmation box

Keep all notes unchanged

🧠 State Variables Provided

Do NOT create new state. Use these states already defined for you:

notes
editingNote
editText
noteToDelete


Each function you write should correctly update one or more of these states.

🎯 Expected Behaviour
✔ Edit Mode

Clicking Edit opens an input field

The input contains the current note text

Saving updates the note

Saving with an empty input should not exit edit mode

Cancel returns the note to its original form

✔ Delete Mode

Clicking Delete shows a confirmation message

Confirm → note is removed from the list

Cancel → note remains unchanged
