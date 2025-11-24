import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../src/App.jsx';

describe('Shopping List - Update & Delete', () => {
  it('opens edit with prefilled name', () => {
    render(<App />);
    fireEvent.click(screen.getAllByText('Edit')[0]);
    expect(screen.getByDisplayValue('Milk')).toBeDefined();
  });

  it('updates name on save', () => {
    render(<App />);
    fireEvent.click(screen.getAllByText('Edit')[0]);
    const input = screen.getByDisplayValue('Milk');
    fireEvent.change(input,{target:{value:'Updated Milk'}});
    fireEvent.click(screen.getByText('Save'));
    expect(screen.getByText('Updated Milk')).toBeDefined();
    expect(screen.queryByText('Milk')).toBeNull();
  });

  it('does not save empty', () => {
    render(<App />);
    fireEvent.click(screen.getAllByText('Edit')[1]);
    const input = screen.getByDisplayValue('Eggs');
    fireEvent.change(input,{target:{value:''}});
    fireEvent.click(screen.getByText('Save'));
    expect(screen.getByText('Save')).toBeDefined();
  });

  it('deletes item', () => {
    render(<App />);
    fireEvent.click(screen.getAllByText('Delete')[0]);
    fireEvent.click(screen.getByText('Confirm'));
    expect(screen.queryByText('Milk')).toBeNull();
  });

  it('cancels delete', () => {
    render(<App />);
    fireEvent.click(screen.getAllByText('Delete')[1]);
    fireEvent.click(screen.getByText('Cancel'));
    expect(screen.getByText('Eggs')).toBeDefined();
  });

  it('cancels edit', () => {
    render(<App />);
    fireEvent.click(screen.getAllByText('Edit')[2]);
    const input = screen.getByDisplayValue('Bread');
    fireEvent.change(input,{target:{value:'Changed'}});
    fireEvent.click(screen.getByText('Cancel'));
    expect(screen.getByText('Bread')).toBeDefined();
  });
});
