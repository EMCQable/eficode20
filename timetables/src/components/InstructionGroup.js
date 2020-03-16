import React from 'react'
import Leg from './Leg'
import timeconversion from './../tools/timeconverter'

const divStyle = {
  padding: '5px 20px',
  margin: '20px auto',
  border: '5px solid pink',
  boxSizing: 'border-box',
  width: 'fit-content',
  maxWidth: '100vw'
}

const InstructionGroup = (props) => (
  <div>
    <a className='uk-accordion-title' href='#'>ROUTE STARTING AT {timeconversion.hoursMinutes(props.startTime)}</a>
    <div style={divStyle} className='uk-accordion-content'>
      <p>THIS ROUTE LASTS FOR {Math.ceil(props.duration / 60)} MINUTES AND STARTS AT {timeconversion.hoursMinutes(props.startTime)}. <br /> THE ORIGIN YOU HAVE CHOSEN IS {props.legs[0].from.name}</p>
      {props.legs.map(leg => {
        return (<Leg leg={leg} key={leg.startTime} />)
      })}
    </div>
  </div>
)

export default InstructionGroup
