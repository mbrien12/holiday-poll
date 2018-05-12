import React, { Component } from 'react'
import AddHolidayForm from './AddHolidayForm'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

export default class ModalForm extends Component {
  render() {
    const modalStyle = {
        marginTop: '50px',
        marginLeft: 'auto',
        marginRight: 'auto'
    };
    return (
      <Modal trigger={<Button basic color='purple'> <Icon name='add' /> Add Holiday</Button>} closeIcon style={modalStyle}>
      <Header icon='sun' content='Suggest a Holiday' />
      <Modal.Content>
        <AddHolidayForm  addHoliday={this.props.addHoliday} onChange={this.props.onChange} formSuccess={this.props.formSuccess}/>
      </Modal.Content>
    </Modal>
    )
  }
}