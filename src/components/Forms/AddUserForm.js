import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddUserForm extends React.Component {
  state = {
    id: 0,
    uname: '',
    age: 0,
    password: ''
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value })
  }
  submitFormAdd = e => {
    e.preventDefault();
    fetch(process.env.REACT_APP_BACKEND_URL + '/regist', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        uname: this.state.uname,
        age: this.state.age,
        password: this.state.password
      })
    })
      .then(response => response.json())
      .then(item => {
        if (Array.isArray(item)) {
          this.props.addUserToState(item[0]);
          this.props.toggle();
        } else {
          console.log('faiure');
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Form onSubmit={this.submitFormAdd}>
        <FormGroup>
          <Label for="uname">ユーザ名</Label>
          <Input type="text" name="uname" id="uname" onChange={this.onChange} />
          <Label for="age">年齢</Label>
          <Input type="text" name="age" id="age" onChange={this.onChange} />
          <Label for="password">パスワード</Label>
          <Input type="password" name="password" id="password" onChange={this.onChange} />
        </FormGroup>
        <Button>確定</Button>
      </Form>
    );
  }
}


export default AddUserForm;