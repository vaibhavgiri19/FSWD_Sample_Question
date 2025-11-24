# React Task Management — Update & 

Assessment Problem Statement

In this assessment, you will complete the Update and Delete functionalities of a Task Management System built using React.

The project's UI, task list, and structure are already provided.
Your job is to complete only the missing logic inside App.jsx to make editing and deleting tasks work correctly.

This assignment helps you practice:

Updating list items

Deleting items

Controlled form inputs

UI state handling

Preventing invalid edits

These operations represent the “hardest” parts of CRUD and are crucial for real-world React development.

📝 Tasks

Your job is to implement the following functions in App.jsx:

1️⃣ handleEditClick(task)

Triggered when Edit button is clicked

Should open the input field in edit mode

Should pre-fill the input with the task’s current title

2️⃣ handleSave()

Triggered when Save button is clicked

Must update the task’s title in the task list

Must validate (title cannot be empty)

Should exit edit mode after saving

3️⃣ handleCancelEdit()

Should exit edit mode without making changes

Should reset the edit input field

4️⃣ handleDeleteClick(task)

Triggered when Delete button is clicked

Should open a delete confirmation box showing the task title

5️⃣ handleConfirmDelete()

Should permanently remove the selected task

Should close the confirmation box

6️⃣ handleCancelDelete()

Should close the confirmation box

Should NOT delete anything

✔️ Provided State Hooks

Do NOT create new state variables.
Use the below pre-defined states:

tasks
editingTask
editTitle
taskToDelete

🎯 Expected Behavior
✏️ Editing

Click Edit → Show input field with task title

Save → Updated title appears in task list

Save empty input → Should NOT update task

Cancel → Restore the original view

🗑️ Deleting

Click Delete → Show confirmation

Confirm → Task is removed

Cancel → Nothing changes

🧪 Testing

The project includes automated test cases.
Before submitting:

Run all tests using:

npm test


Do NOT edit test files

Only update App.jsx

✔ Submission Guidelines

Submit App.jsx only.

Do NOT modify:

Spec test file

UI structure

Initial tasks array

Boilerplate code

🎉 Good Luck & Happy Coding!

Mastering update & delete operations builds a strong foundation for real-world React applications.