import React from 'react'
import Leg from './Leg'
import timeconversion from './../tools/timeconverter'

const InstructionGroup = (props) => (
  <div>
  <p>THIS ROUTE LASTS FOR {Math.ceil(props.duration/60)} MINUTES AND STARTS AT {timeconversion.convert(props.startTime)}</p>
  {props.legs.map(leg => {
    return(<Leg leg={leg} key={leg.startTime}/>)
  })}
  </div>
)

export default InstructionGroup
