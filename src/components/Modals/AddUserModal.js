import React from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import AddUserForm from "../Forms/AddUserForm";

class AddUserModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const closeBtn = <Button className="close" onClick={this.toggle}>&times;</Button>
    const label = this.props.buttonLabel;
    let button = '';
    let title = '';

    if (label === 'ユーザ登録') {
      button = <Button
        color="warning"
        onClick={this.toggle}
        style={{ float: "left", marginRight: "13px" }}>{label}
      </Button>
      title = "ユーザ登録"
    }
    return (
      <div>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} close={closeBtn}>{title}</ModalHeader>
          <ModalBody>
            <AddUserForm
              addUserToState={this.props.addUserToState}
              updateState={this.props.updateState}
              toggle={this.toggle}
              item={this.props.item} />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default AddUserModal;