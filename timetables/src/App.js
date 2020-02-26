import React, { Component } from 'react';
import logo from './1200px-HSL_logo.svg.png';
import './App.css';
import ItineraryService from './services/Itineraries'
import InstructionGroup from './components/InstructionGroup'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itineraries: null,
      value: 'Submit location name or an address for a new origin'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  async componentDidMount() {
    var itineraries = await ItineraryService.getItineraries('Teekkarikylä')
    this.setState({
      itineraries
    })
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  async handleSubmit() {
    var itineraries = await ItineraryService.getItineraries(this.state.value)
    this.setState({
      itineraries
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Timetables to get to Eficode Headquarters</h2>
        </div>
        <form>
        <textarea value={this.state.value} onChange={this.handleChange} rows="3" className="SearchInput"/>
        <button type="button" onClick={this.handleSubmit} text="Change">Change</button>
        </form>
        {this.state.itineraries &&
          this.state.itineraries.plan.itineraries.map(itinerary => {
            return (
              <div key={itinerary.startTime}>
                <InstructionGroup startTime={itinerary.startTime} duration={itinerary.duration} legs={itinerary.legs} />
                <br/>
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