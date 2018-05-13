import React, { Component } from "react";
import Navigation from "./Navigation";
import PollTable from "./PollTable";
import ModalForm from "./ModalForm";
import "../css/App.css";
import sampleHolidays from "../sample-holidays";
import base from '../base';

import { Container, Divider } from "semantic-ui-react";

const holidays = sampleHolidays;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      holidays: holidays,
      validData: false,
      formSubmit: false
    };
  }

  componentWillMount() {
    this.ref = base.syncState('holidays', {
      context: this,
      state: "holidays",
      validData: true,
      formSubmit: true,
    });
  }

  addVote = (holiday, key) => {
    const newHolidays = Object.assign({}, this.state.holidays);
    newHolidays[key].totalVotes += 1;
    const sortedHolidays = Object.values(newHolidays).sort(function(
      hol1,
      hol2
    ) {
      return hol2.totalVotes - hol1.totalVotes;
    });
    this.setState({
      holidays: sortedHolidays
    });
  }

  onChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
    this.validateData();
  };

  validateData = () => {
    const { location, flightPrice, reasons, image } = this.state;
    if ((typeof location !== "undefined") 
    && (typeof flightPrice !== "undefined")
    && (typeof reasons !== "undefined")
    && (typeof image !== "undefined") ) {
      this.setState({
        validData: true
      });
    }
  };

  addHoliday = event => {
    event.preventDefault();
    const holidays = this.state.holidays;
    const newHoliday = {
      location: this.state.location,
      image: this.state.image,
      flightPrice: this.state.flightPrice,
      reasons: this.state.reasons,
      totalVotes: 0,
      voters: {}
    };
    const key = holidays.length;
    holidays[key] = newHoliday;
    this.setState({ holidays: holidays, formSubmit: true });
  };

  render() {
    return (
      <div className="App">
        <Navigation />
        <h1>Holiday poll</h1>
        <Divider hidden />
        <ModalForm
          addHoliday={this.addHoliday}
          onChange={this.onChange}
          formSubmit={this.state.formSubmit}
          validData={this.state.validData}
        />
        <Container>
          <Divider hidden />
          <PollTable holidays={this.state.holidays} addVote={this.addVote} />
        </Container>
      </div>
    );
  }
}

export default App;
