import React, { Component } from "react"; 
import Navigation from "./Navigation";
import PollTable from "./PollTable";
import ModalForm from "./ModalForm";
import "../css/App.css";
import sampleHolidays from "../sample-holidays";

import { Button, Header, Icon, Modal, Container, Divider } from "semantic-ui-react";

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
    const sortedHolidays =  Object.values(newHolidays).sort(function(hol1, hol2){
      return hol2.totalVotes - hol1.totalVotes
    })
    this.setState({
      holidays: sortedHolidays,
    })
  }

  render() {
    console.log(this.state.holidays)
    return (
      <div className="App">
        <Navigation />
        <h1>Holiday poll</h1>
        <Divider hidden />
        <ModalForm/>
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