import React from 'react'

const Instruction = (props) => (
  <div>
    <p>
      Whole thing lasts {props.duration} seconds
    </p>
    <p className="App-intro">
      First you should: {props.legs[0].mode} I guess
            </p>
    <p className="App-intro">
      Then you should: use the {props.legs[1].mode}
    </p>
    <p className="App-intro">
      And lastly you should: {props.legs[2].mode}
    </p>
  </div>
)

export default Instruction
