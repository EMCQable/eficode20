import React from 'react'
import ReactDOM from 'react-dom'
import Leg from './Leg'
import InstructionGroup from './InstructionGroup'

const legs= [{
    startTime: 1584380292,
    mode: 'Walk',
    from: {
        name: 'StartLocation'
    },
    to: {
        name: 'Endlocation'
    }
}]

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<InstructionGroup startTime={1584380292} duration={1800} legs={legs}/>, div)
})
