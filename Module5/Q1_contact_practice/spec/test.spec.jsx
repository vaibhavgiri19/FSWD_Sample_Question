import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../src/App.jsx';

describe('Contact Management - Update & Delete Tests', () => {

  it('should open edit mode with pre-filled contact name', () => {
    render(<App />);
    const editButtons = screen.getAllByText('Edit');

    fireEvent.click(editButtons[0]);

    const input = screen.getByDisplayValue('John Doe');

    expect(input).toBeDefined();
  });

  it('should update contact name when saved', () => {
    render(<App />);
    const editButtons = screen.getAllByText('Edit');

    fireEvent.click(editButtons[0]);

    const input = screen.getByDisplayValue('John Doe');
    fireEvent.change(input, { target: { value: 'Updated Name' } });

    const saveButton = screen.getByText('Save');
    fireEvent.click(saveButton);

    expect(screen.getByText('Updated Name')).toBeDefined();
    expect(screen.queryByText('John Doe')).toBeNull();
  });

  it('should remain in edit mode if empty name is saved', () => {
    render(<App />);
    const editButtons = screen.getAllByText('Edit');

    fireEvent.click(editButtons[0]);

    const input = screen.getByDisplayValue('John Doe');
    fireEvent.change(input, { target: { value: '' } });

    const saveButton = screen.getByText('Save');
    fireEvent.click(saveButton);

    expect(screen.getByText('Save')).toBeDefined();
  });

  it('should delete a contact after confirming delete', () => {
    render(<App />);
    const deleteButtons = screen.getAllByText('Delete');
    fireEvent.click(deleteButtons[0]);

    const confirmButton = screen.getByText('Confirm');
    fireEvent.click(confirmButton);

    expect(screen.queryByText('John Doe')).toBeNull();
  });

  it('should cancel delete and keep contact in list', () => {
    render(<App />);
    const deleteButtons = screen.getAllByText('Delete');
    fireEvent.click(deleteButtons[1]);

    const cancelButton = screen.getByText('Cancel');
    fireEvent.click(cancelButton);

    expect(screen.getByText('Jane Smith')).toBeDefined();
  });

  it('should cancel edit and restore original contact name', () => {
    render(<App />);
    const editButtons = screen.getAllByText('Edit');
    fireEvent.click(editButtons[2]);

    const input = screen.getByDisplayValue('Alice Johnson');
    fireEvent.change(input, { target: { value: 'Changed Name' } });

    const cancelButton = screen.getByText('Cancel');
    fireEvent.click(cancelButton);

    expect(screen.getByText('Alice Johnson')).toBeDefined();
  });

});
