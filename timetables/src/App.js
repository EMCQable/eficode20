import React, { Component } from 'react';
import logo from './1200px-HSL_logo.svg.png';
import './App.css';
import ApolloClient, { gql } from 'apollo-boost';



const client = new ApolloClient({
  uri: 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql'
})
var fromPlace = 'Teekkarikylä, Espoo'
var fromLat = '60.188336'
var fromLon = '24.834901'

var toPlace = 'Pohjoinen Rautatienkatu 25'
var toLat = '60.169443'
var toLon = '24.926077'

const query = gql`
{
  plan(
    fromPlace: "${fromPlace}::${fromLat},${fromLon}",
    toPlace: "${toPlace}::${toLat},${toLon}",
    numItineraries: 2
  ) {
    itineraries{
      walkDistance,
      duration,
      legs {
        route {
          gtfsId
        }
        mode
        startTime
        endTime
        from {
          name
          stop {
            code
            name
          }
        },
        to {
          name
        },
        distance
      }
    }
  }
}
`


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {itineraries: null};
  }

  componentDidMount() {
    client.query({ query })
    .then((response) => {
      this.setState({
         itineraries: response.data
       })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Timetables to get to Eficode Headquarters</h2>
        </div>
        
          {this.state.itineraries &&
          <div>
          <p className="App-intro">
            First you should: {this.state.itineraries.plan.itineraries[0].legs[0].mode} I guess
          </p>
          <p className="App-intro">
          Then you should: use the {this.state.itineraries.plan.itineraries[0].legs[1].mode}
        </p>
        <p className="App-intro">
            And lastly you should: {this.state.itineraries.plan.itineraries[0].legs[2].mode}
          </p>
          </div>
          }

          {!this.state.itineraries &&
          <p className="App-intro">
            Wait for a moment...
          </p>  
          }
          

      </div>
    );
  }
}

export default App;