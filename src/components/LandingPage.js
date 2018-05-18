import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Button, Icon } from "semantic-ui-react";


export default class LandingPage extends Component {
  render() {
    return (
      <div style={{ marginTop: '100px' }}>
        <h1>WTF are we holidaying?</h1>
        <h2>Life's too short for holiday spreadsheets</h2>
        <Link to="/log-in">
        <Button style={{marginTop: '30px'}} color="google plus">
          <Icon name="google plus" /> Log in with Google
        </Button>
        </Link>
      </div>
    );
  }
}
