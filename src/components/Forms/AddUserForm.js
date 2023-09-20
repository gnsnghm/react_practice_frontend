import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddUserForm extends React.Component {
  state = {
    id: 0,
    userid: '',
    password: ''
  }

  onChange = e => {
    this.setState({ [e.target.userid]: e.target.value })
  }
  submitFormAdd = e => {

  }

  render() {
    return (
      <Form onSubmit={this.submitFormAdd}>
        <FormGroup>
          <Label for="userid">ユーザID</Label>
          <Input type="text" name="userid" id="userid" onChange={this.onChange} />
        </FormGroup>
        <Button>確定</Button>
      </Form>
    );
  }
}


export default AddUserForm;