import React, { Component } from "react";
import { Button, Header, Icon, Image, Label, Table } from "semantic-ui-react";

export default class PollTable extends Component {
  render() {
    const whiteText = {
      color: "white"
    };

    return (
      <Table celled padded stackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell singleLine>Where?</Table.HeaderCell>
            <Table.HeaderCell>Who wants to go?</Table.HeaderCell>
            <Table.HeaderCell>How much are flights?</Table.HeaderCell>
            <Table.HeaderCell>Why should we go?</Table.HeaderCell>
            <Table.HeaderCell>Vote</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {Object.keys(this.props.holidays).map(key => {
            const holiday = this.props.holidays[key];
            const backgroundImage = {
              backgroundImage: `linear-gradient(-225deg, rgba(0,101,168,0.6) 0%, rgba(0,36,61,0.3) 50%),url(${
                holiday.image
              })`,
              backgroundSize: "cover"
            };
            const images = [holiday.voters].map(voters => {
              if (Array.isArray(voters)) {
                voters.map((voter, i) => {
                  console.log(`VOTER is ${voter}`) // Logs but doesn't print individual image
                  return (
                  <Image key={i} src={voter} avatar /> 
                  )
                })
              } else {
                return (
                <Image src={voters} avatar />
                )
              }    
            })
            return (
              <Table.Row key={key}>
                <Table.Cell style={backgroundImage}>
                  <Header as="h2" style={whiteText}>
                    {holiday.location}
                  </Header>
                </Table.Cell>
                <Table.Cell singleLine>
                   {images}
                </Table.Cell>
                <Table.Cell>
                  <p>£ {holiday.flightPrice}</p>
                </Table.Cell>
                <Table.Cell>{holiday.reasons}</Table.Cell>
                <Table.Cell>
                  <Button
                    style={{ marginLeft: 30 }}
                    color="red"
                    onClick={() => this.props.addVote(holiday, key)}
                  >
                    <Icon name="heart" />
                    Yes please
                  </Button>
                  <Label as="a" basic color="red" pointing="left">
                    {holiday.totalVotes}
                  </Label>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    );
  }
}
