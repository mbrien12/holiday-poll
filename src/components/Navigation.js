import React, { Component } from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default class Navigation extends Component {
  render() {
    return (
      <Menu secondary stackable size='massive'>
        <Menu.Item position="right"
        >
        <Button inverted color='violet'>Log-in</Button>
        </Menu.Item>
      </Menu>
    )
  }
}