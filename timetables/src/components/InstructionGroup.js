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
};

const InstructionGroup = (props) => (
  <div style={divStyle}>
  <p>THIS ROUTE LASTS FOR {Math.ceil(props.duration/60)} MINUTES AND STARTS AT {timeconversion.convert(props.startTime)}. <br/> THE ORIGIN YOU HAVE CHOSEN IS {props.legs[0].from.name}</p>
  {props.legs.map(leg => {
    return(<Leg leg={leg} key={leg.startTime}/>)
  })}
  </div>
)

export default InstructionGroup
