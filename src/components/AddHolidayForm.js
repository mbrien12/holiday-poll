import React, { Component } from "react";
import { Button, Form, Message } from "semantic-ui-react";

export default class AddHolidayForm extends Component {
  render() {

    const isEnabled = this.props.validData
  
    return (
      <Form success size="big" onSubmit={this.props.addHoliday}>
        <Form.Group widths="equal">
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
        </Form.Group>
        <Form.Input
          fluid
          label="Why?"
          name="reasons"
          placeholder="To annoy Jonny"
          onChange={this.props.onChange}
          value={this.props.reasons}
        />
        <Form.Input
          fluid
          label="Add url for a nice image to convince us more..."
          name="image"
          placeholder="https://www.virginholidays.co.uk/.image/jpg"
          onChange={this.props.onChange}
          value={this.props.image}
        />
        <Button disabled={!isEnabled} type="submit">Submit</Button>
        {this.props.formSubmit ? 
          <Message
            success
            header="Now let the propaganda commence... "
            content="And may the best holiday win!"
          />
         : null}
      </Form>
    );
  }
}
