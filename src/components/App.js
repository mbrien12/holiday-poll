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
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <h1>Holiday poll</h1>
        <Divider hidden />
        <Container>
        <Divider hidden />
          <PollTable />
        </Container>
      </div>
    );
  }
}

export default App;
