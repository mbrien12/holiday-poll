import React, { Component } from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default class Navigation extends Component {
  render() {
    return (
      <Menu secondary stackable size='massive'>
        <Menu.Item position="right"
        >
        {this.props.user ?
          <Button onClick={this.props.logout} inverted color='violet'>Log Out</Button>              
          :
          <Button onClick={this.props.login} inverted color='violet'>Log In</Button>            
        }
     
        </Menu.Item>
      </Menu>
    )
  }
}