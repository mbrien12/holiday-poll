import React, { Component } from "react";
import { Button, Checkbox, Form, Message } from "semantic-ui-react";

export default class AddHolidayForm extends Component {
  render() {
    return (
      <Form success>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Where do you want to go?"
            placeholder="Mexico"
          />
          <Form.Input
            fluid
            label="Average price of flights?"
            placeholder="£400?"
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input fluid label="Why?" placeholder="Sun" />
          <Form.Input fluid label="Another reason?" placeholder="Sea" />
          <Form.Input
            fluid
            label="One more..."
            placeholder="Suspicious Parents"
          />
        </Form.Group>
        <Form.Input
          fluid
          label="Add url for a nice image to convince us more"
          placeholder="https://www.virginholidays.co.uk/.image/jpg"
        />
        <Message
          success
          header="Nice one!"
          content="Now you can start your propoganda campaign. May the best holiday win."
        />
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}
