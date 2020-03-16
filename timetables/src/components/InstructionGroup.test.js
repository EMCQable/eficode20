import React from 'react'
import ReactDOM from 'react-dom'
import InstructionGroup from './InstructionGroup'

const legs =[{
  startTime: 1584380292,
  mode: 'Walk',
  from: {
    name: 'StartLocation'
  },
  to: {
    name: 'Endlocation'
  }
}, {
  startTime: 1584380223,
  mode: 'Subway',
  from: {
    name: 'AnotherStartLocation'
  },
  to: {
    name: 'AnotherEndlocation'
  },
  route : {
    gtfsId: 'HSL:0550'
  }
}]

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<InstructionGroup startTime={1584380292} duration={1800} legs={legs} />, div)
})
