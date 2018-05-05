import React, { Component } from "react"; 
import Navigation from "./Navigation";
import PollTable from "./PollTable";
import "../css/App.css";
import sampleHolidays from "../sample-holidays";

import { Container, Divider } from "semantic-ui-react";

const holidays = sampleHolidays;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      holidays: holidays
    };
    this.addVote = this.addVote.bind(this);
  }

  addVote(holiday, key) {
    const newHolidays = Object.assign({}, this.state.holidays);
    newHolidays[key].totalVotes += 1;
    this.setState({
      holidays: newHolidays
    })
  }



  render() {
    return (
      <div className="App">
        <Navigation />
        <h1>Holiday poll</h1>
        <Divider hidden />
        <Container>
          <Divider hidden />
          <PollTable holidays={this.state.holidays} addVote={this.addVote}/>
        </Container>
      </div>
    );
  }
}

export default App;


// method that add 1 to totalVotes onClick