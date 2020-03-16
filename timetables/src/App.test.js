import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import App from './App'

test('button works', () =>{
  const component = render(
    <App />)
  const button = component.getByText('Change')
  fireEvent.click(button)
})

it('renders without crashing', () => {
  render(<App />)
})
