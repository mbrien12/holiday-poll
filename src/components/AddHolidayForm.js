import React, { Component } from "react";
import { Button, Form, Message } from "semantic-ui-react";

export default class AddHolidayForm extends Component {

  render() {
    return (
      <Form size="big" onSubmit={this.props.addHoliday}>
        <Form.Input
          fluid
          label="Where do you want to go?"
          name="location"
          placeholder="Mexico"
          width={6}
          onChange={this.props.onChange}
          value={this.props.location}
        />
        <Form.Input
          fluid
          label="Average price of flights?"
          name="flightPrice"
          placeholder="£400?"
          width={6}
          onChange={this.props.onChange}
          value={this.props.flightPrice}
        />

        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Why?"
            name="reasons"
            placeholder="To annoy Tom"
            onChange={this.props.onChange}
            value={this.props.reasons}
          />
        </Form.Group>
        <Form.Input
          fluid
          label="Add url for a nice image to convince us more..."
          name="image"
          placeholder="https://www.virginholidays.co.uk/.image/jpg"
          onChange={this.props.onChange}
          value={this.props.image}
        />
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}
