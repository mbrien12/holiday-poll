import React, { Component } from "react";
import { Header, Image } from "semantic-ui-react";

export default class WelcomeBanner extends Component {
  render() {
    return (
      <div>
        {this.props.user ? (
          <div>
            <Header size="large">
              Hey {this.props.user.displayName}
              <Image
                style={{ marginLeft: "20px" }}
                src={this.props.user.photoURL}
                avatar
              />
            </Header>
            <Header size="medium">
              Where do you want to go on holiday this year?
            </Header>
          </div>
        ) : null}
      </div>
    );
  }
}
