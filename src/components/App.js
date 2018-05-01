import React, { Component } from 'react';
import Navigation from './Navigation'
import '../css/App.css';
import sampleHolidays from '../sample-holidays'

const holidays = sampleHolidays



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      holidays: holidays,
    }
  }
 
  render() {
    return (
      <div className="App">
        <Navigation/>
        <h1>Holiday poll</h1>
      </div>
    );
  }
}

export default App;
