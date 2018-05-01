import React, { Component } from "react";
import {
  Button,
  Header,
  Icon,
  Image,
  Label,
  Table,
} from "semantic-ui-react";

export default class Navigation extends Component {
  render() {
    const whiteText = {
      color: 'white'
    }
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
        {
          Object.keys(this.props.holidays).map(key => {
            const holiday = this.props.holidays[key];
            const backgroundImage = {
              backgroundImage: holiday.image,
              backgroundSize: 'cover',
            }
            return (
            <Table.Row key={key}>
            <Table.Cell style={backgroundImage}>
              <Header as="h2" style={whiteText} >
                {holiday.location}
              </Header>
            </Table.Cell>
            <Table.Cell singleLine>
              <Image
                src='https://avatars1.githubusercontent.com/u/22551831?s=460&v=4'
                avatar
              />
            </Table.Cell>
            <Table.Cell>
              <p>{holiday.flightPrice}</p>
            </Table.Cell>
            <Table.Cell>
              <p>{holiday.reasons}</p>
            </Table.Cell>
            <Table.Cell>
            <Button style={{ marginLeft: 30}} color="red">
            <Icon name="heart" />
            Like
          </Button>
          <Label as="a" basic color="red" pointing="left">
            1
          </Label>
          </Table.Cell>
          </Table.Row>
            )
          })
        }
        </Table.Body>
      </Table>
    );
  }
}
