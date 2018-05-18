import React, { Component } from 'react'
import PollTable from "./PollTable";
import ModalForm from "./ModalForm";

import { Container, Divider } from "semantic-ui-react";


export default class LoggedIn extends Component {
  render() {
    return (
      <div>
      <Divider hidden />
      <ModalForm
        addHoliday={this.props.addHoliday}
        onChange={this.props.onChange}
        formSubmit={this.props.formSubmit}
        validData={this.props.validData}
      />
      <Container>
        <Divider hidden />
        <PollTable holidays={this.props.holidays} addVote={this.props.addVote} />
      </Container>
      </div>
    )
  }
}