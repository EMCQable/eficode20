import React from 'react'
import timeconversion from './../tools/timeconverter'

const Leg = (props) => (
  <div>
    <p>
      USE TRANSPORT: {props.leg.mode}
    </p>
    <p>
    START AT {timeconversion.hoursMinutes(props.leg.startTime)}
    </p>
    <p>
    GO FROM {props.leg.from.name}
    </p>
    {props.leg.route&& <p>
    WITH {props.leg.route.gtfsId.slice(5)}
    </p>}
    <p>
    TO {props.leg.to.name}
    </p>
    <p>
      YOU SHOULD ARRIVE AT {timeconversion.hoursMinutes(props.leg.endTime)}
    </p>
    <br></br>
  </div>
)

export default Leg