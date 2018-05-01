import React, { Component } from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default class Navigation extends Component {
  render() {
    return (
      <Menu stackable size='massive'>
        <Menu.Item position="right"
        >
        <Button>Log-in</Button>
        </Menu.Item>
      </Menu>
    )
  }
}