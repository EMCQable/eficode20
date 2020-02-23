import React from 'react'

const Leg = (props) => (
  <div>
    <p>
      DO THE FOLLOWING: {props.leg.mode}
    </p>
    <p>
    START AT {props.leg.startTime}
    </p>
    GO FROM {props.leg.from.name}
    <p>
    </p>
    <p>
    TO {props.leg.to.name}
    </p>
    <p>
      YOU SHOULD ARRIVE AT {props.leg.endTime}
    </p>
    <br></br>
  </div>
)

export default Leg

/*    <p>
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
    </p>*/
