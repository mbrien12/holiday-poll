import React, { Component } from "react";
import WelcomeBanner from "./WelcomeBanner";
import PollTable from "./PollTable";

import { Container, Divider } from "semantic-ui-react";

export default class LoggedIn extends Component {
  render() {
    return (
      <div>
        <Divider hidden />
        <WelcomeBanner user={this.props.user} />
        <Container>
          <Divider hidden />
          <PollTable
            holidays={this.props.holidays}
            addVote={this.props.addVote}
          />
        </Container>
      </div>
    );
  }
}
