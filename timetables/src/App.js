import React, { Component } from 'react';
import logo from './1200px-HSL_logo.svg.png';
import './App.css';
import ItineraryService from './services/Itineraries'
import Instruction from './components/Instruction'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { itineraries: null };
  }

  async componentDidMount() {
    var itineraries = await ItineraryService.getItineraries()
    this.setState({
      itineraries
    })
    console.log(this.state.itineraries)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Timetables to get to Eficode Headquarters</h2>
        </div>

        {this.state.itineraries &&
          this.state.itineraries.plan.itineraries.map(itinerary => {
            console.log(itinerary)
            return (
              <div>
                <Instruction duration={itinerary.duration} legs={itinerary.legs} key={itinerary.duration} />
              </div>
            )
          }
          )}

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