import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('Contact Management App', () => {
  test('renders all initial contacts', () => {
    render(<App />)
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('Jane Smith')).toBeInTheDocument()
    expect(screen.getByText('Alice Johnson')).toBeInTheDocument()
  })

  test('edit contact name successfully', async () => {
    render(<App />)
    const editBtn = screen.getAllByText('Edit')[0]
    await userEvent.click(editBtn)

    const input = screen.getByPlaceholderText('Enter name')
    await userEvent.clear(input)
    await userEvent.type(input, 'John Updated')
    await userEvent.click(screen.getByText('Save'))

    expect(screen.getByText('John Updated')).toBeInTheDocument()
  })

  test('cancel edit does not change name', async () => {
    render(<App />)
    const editBtn = screen.getAllByText('Edit')[1]
    await userEvent.click(editBtn)

    const input = screen.getByPlaceholderText('Enter name')
    await userEvent.clear(input)
    await userEvent.type(input, 'ShouldNotSave')
    await userEvent.click(screen.getByText('Cancel'))

    expect(screen.getByText('Jane Smith')).toBeInTheDocument()
  })

  test('delete confirmation flow works', async () => {
    render(<App />)
    const deleteBtn = screen.getAllByText('Delete')[2]
    await userEvent.click(deleteBtn)

    expect(screen.getByText(/Are you sure/)).toBeInTheDocument()

    await userEvent.click(screen.getByText('Confirm'))
    expect(screen.queryByText('Alice Johnson')).not.toBeInTheDocument()
  })

  test('cancel delete keeps the contact', async () => {
    render(<App />)
    const deleteBtn = screen.getAllByText('Delete')[0]
    await userEvent.click(deleteBtn)

    await userEvent.click(screen.getByText('Cancel'))
    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })
})
