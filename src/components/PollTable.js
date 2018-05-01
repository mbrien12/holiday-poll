import React, { Component } from "react";
import {
  Button,
  Header,
  Icon,
  Image,
  Label,
  Table,
  Rating
} from "semantic-ui-react";

export default class Navigation extends Component {
  render() {
    return (
      <Table celled padded stackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell singleLine>Where?</Table.HeaderCell>
            <Table.HeaderCell>Who wants to go?</Table.HeaderCell>
            <Table.HeaderCell>Flight price</Table.HeaderCell>
            <Table.HeaderCell>Why should we go?</Table.HeaderCell>
            <Table.HeaderCell>Vote</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Header as="h2">
                Greece
              </Header>
            </Table.Cell>
            <Table.Cell singleLine>
              <Image
                src="https://avatars1.githubusercontent.com/u/22551831?s=460&v=4"
                avatar
              />
            </Table.Cell>
            <Table.Cell>
              <p>£500</p>
            </Table.Cell>
            <Table.Cell>
              <p>"Beaches", "Ruins", "Kebabs", "Islands"</p>
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
        </Table.Body>
      </Table>
    );
  }
}
