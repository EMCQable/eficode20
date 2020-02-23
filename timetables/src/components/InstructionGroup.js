import React from 'react'
import Leg from './Leg'

const InstructionGroup = (props) => (
  <div>
  <p>THIS ROUTE LASTS FOR {props.duration} SECONDS AND STARTS AT {props.startTime} UNIX TIME</p>
  {props.legs.map(leg => {
    return(<Leg leg={leg} key={leg.startTime}/>)
  })}
  </div>
)

export default InstructionGroup
