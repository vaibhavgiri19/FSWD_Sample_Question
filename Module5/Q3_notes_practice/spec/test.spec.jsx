import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../src/App.jsx';

describe('Notes Management - Update & Delete Tests', () => {

  it('should open edit mode with prefilled text', () => {
    render(<App />);
    fireEvent.click(screen.getAllByText('Edit')[0]);
    expect(screen.getByDisplayValue('Read chapter 5')).toBeDefined();
  });

  it('should update note when saved', () => {
    render(<App />);
    fireEvent.click(screen.getAllByText('Edit')[0]);
    const input = screen.getByDisplayValue('Read chapter 5');
    fireEvent.change(input, { target: { value: 'Updated Note' } });
    fireEvent.click(screen.getByText('Save'));
    expect(screen.getByText('Updated Note')).toBeDefined();
  });

  it('should not save empty note', () => {
    render(<App />);
    fireEvent.click(screen.getAllByText('Edit')[1]);
    const input = screen.getByDisplayValue('Prepare meeting summary');
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.click(screen.getByText('Save'));
    expect(screen.getByText('Save')).toBeDefined();
  });

  it('should delete note on confirm', () => {
    render(<App />);
    fireEvent.click(screen.getAllByText('Delete')[0]);
    fireEvent.click(screen.getByText('Confirm'));
    expect(screen.queryByText('Read chapter 5')).toBeNull();
  });

  it('should cancel delete', () => {
    render(<App />);
    fireEvent.click(screen.getAllByText('Delete')[1]);
    fireEvent.click(screen.getByText('Cancel'));
    expect(screen.getByText('Prepare meeting summary')).toBeDefined();
  });

  it('should cancel edit', () => {
    render(<App />);
    fireEvent.click(screen.getAllByText('Edit')[2]);
    const input = screen.getByDisplayValue('Plan weekend schedule');
    fireEvent.change(input, { target: { value: 'Changed text' } });
    fireEvent.click(screen.getByText('Cancel'));
    expect(screen.getByText('Plan weekend schedule')).toBeDefined();
  });

});
