import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
    render(<App />)
    
    // Проверяем, что элемент с текстом "learn react" присутствует на странице
    const linkElement = screen.getByText(/learn react/i)
    expect(linkElement).toBeInTheDocument()  // Ожидаем, что элемент с таким текстом существует на странице
})

