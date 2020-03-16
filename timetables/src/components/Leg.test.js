import React from 'react'
import ReactDOM from 'react-dom'
import Leg from './Leg'

const leg = {
    mode: 'Walk',
    from: {
        name: 'StartLocation'
    },
    to: {
        name: 'Endlocation'
    },
    route : {
        gtfsId: 'HSL:0550'
    }
}

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Leg leg={leg}/>, div)
})
