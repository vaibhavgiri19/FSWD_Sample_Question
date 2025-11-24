import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../src/App.jsx';

describe('Task Management - Update & Delete Tests', () => {

  it('should open edit mode with pre-filled task title', () => {
    render(<App />);
    const editButtons = screen.getAllByText('Edit');

    fireEvent.click(editButtons[0]);

    const input = screen.getByDisplayValue('Finish React homework');

    expect(input).toBeDefined();
  });

  it('should update task title when saved', () => {
    render(<App />);
    const editButtons = screen.getAllByText('Edit');

    fireEvent.click(editButtons[0]);

    const input = screen.getByDisplayValue('Finish React homework');
    fireEvent.change(input, { target: { value: 'Updated Task Title' } });

    const saveButton = screen.getByText('Save');
    fireEvent.click(saveButton);

    expect(screen.getByText('Updated Task Title')).toBeDefined();
    expect(screen.queryByText('Finish React homework')).toBeNull();
  });

  it('should remain in edit mode if empty title is saved', () => {
    render(<App />);
    const editButtons = screen.getAllByText('Edit');

    fireEvent.click(editButtons[1]);

    const input = screen.getByDisplayValue('Buy groceries');
    fireEvent.change(input, { target: { value: '' } });

    const saveButton = screen.getByText('Save');
    fireEvent.click(saveButton);

    // Should still be in edit mode - save button should still exist
    expect(screen.getByText('Save')).toBeDefined();
  });

  it('should delete a task after confirming delete', () => {
    render(<App />);
    const deleteButtons = screen.getAllByText('Delete');
    fireEvent.click(deleteButtons[0]);

    const confirmButton = screen.getByText('Confirm');
    fireEvent.click(confirmButton);

    expect(screen.queryByText('Finish React homework')).toBeNull();
  });

  it('should cancel delete and keep task in list', () => {
    render(<App />);
    const deleteButtons = screen.getAllByText('Delete');
    fireEvent.click(deleteButtons[1]);

    const cancelButton = screen.getByText('Cancel');
    fireEvent.click(cancelButton);

    expect(screen.getByText('Buy groceries')).toBeDefined();
  });

  it('should cancel edit and restore original task title', () => {
    render(<App />);
    const editButtons = screen.getAllByText('Edit');
    fireEvent.click(editButtons[2]);

    const input = screen.getByDisplayValue('Prepare for presentation');
    fireEvent.change(input, { target: { value: 'Changed Title' } });

    const cancelButton = screen.getByText('Cancel');
    fireEvent.click(cancelButton);

    expect(screen.getByText('Prepare for presentation')).toBeDefined();
  });

});
