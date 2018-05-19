import React, { Component } from "react";
import ModalForm from "./ModalForm";

import { Button, Image, Menu } from "semantic-ui-react";

export default class Navigation extends Component {
  render() {
    return (
      <div>
        {this.props.user ? (
          <Menu secondary stackable size="massive">
            <Menu.Item
              name="log out"
              onClick={this.props.logout}
              position = "right"
            />
            <ModalForm
            addHoliday={this.props.addHoliday}
            onChange={this.props.onChange}
            formSubmit={this.props.formSubmit}
            validData={this.props.validData}
          />
          </Menu>
        ) : null}
      </div>
    );
  }
}
