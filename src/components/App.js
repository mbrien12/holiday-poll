import React, { Component } from "react";
import Navigation from "./Navigation";
import LandingPage from "./LandingPage";
import LoggedIn from "./LoggedIn";
import "../css/App.css";
import base, { auth, provider } from "../base";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      holidays: {},
      validData: false,
      formSubmit: false,
      user: null
    };
  }

  login = () => {
    auth.signInWithPopup(provider).then(result => {
      const user = result.user;
      this.setState({
        user
      });
    });
  };

  logout = () => {
    auth.signOut().then(() => {
      this.setState({
        user: null
      });
    });
  };

  componentWillMount() {
    this.ref = base.syncState("holidays", {
      context: this,
      state: "holidays",
      validData: true,
      formSubmit: true
    });
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
      }
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
  };

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
    if (
      typeof location !== "undefined" &&
      typeof flightPrice !== "undefined" &&
      typeof reasons !== "undefined" &&
      typeof image !== "undefined"
    ) {
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
        <Navigation
          user={this.state.user}
          login={this.login}
          logout={this.logout}
        />

        <Route
          path="/"
          exact={true}
          render={() => (
            <LandingPage
              user={this.state.user}
              login={this.login}
              logout={this.logout}
            />
          )}
        />
        <Route
          path="/my-holidays"
          render={() => (
            <LoggedIn
              addHoliday={this.addHoliday}
              onChange={this.onChange}
              formSubmit={this.state.formSubmit}
              validData={this.state.validData}
              holidays={this.state.holidays}
              addVote={this.addVote}
            />
          )}
        />
        {this.state.user ? <Redirect to="/my-holidays" /> : <Redirect to="/" />}
      </div>
    );
  }
}

export default App;
