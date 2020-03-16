import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import ReactDOM from 'react-dom'
import App from './App'

test('button works', () =>{
  const component = render(
    <App />)
  const button = component.getByText('Change')
  fireEvent.click(button)
})

it('renders without crashing', () => {
  console.log('This other test here')
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})
