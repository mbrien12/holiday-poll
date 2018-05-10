import React, { Component } from "react";
import {
  Button,
  Header,
  Icon,
  Image,
  Label,
  Table,
} from "semantic-ui-react";

export default class PollTable extends Component {
  render() {
    const whiteText = {
      color: 'white'
    }

    const holidays = this.props.holidays

    let sorted = Object.values(holidays).sort(function(obj1, obj2){
      return obj2.totalVotes - obj1.totalVotes
    })

    console.log(sorted);



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
              backgroundImage: `linear-gradient(-225deg, rgba(0,101,168,0.6) 0%, rgba(0,36,61,0.3) 50%),url(${holiday.image})`,
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
              <p>£ {holiday.flightPrice}</p>
            </Table.Cell>
            <Table.Cell>
              {holiday.reasons.map((reason, i) => {
                return (
                  <p key={i}>{reason}</p>
                )
              })}
            </Table.Cell>
            <Table.Cell>
            <Button style={{ marginLeft: 30}} color="red" onClick={() => this.props.addVote(holiday, key)}>
            <Icon name="heart" />
            Yes please
          </Button>
          <Label as="a" basic color="red" pointing="left">
            {holiday.totalVotes}
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