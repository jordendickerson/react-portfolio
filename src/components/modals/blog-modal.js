import React, { Component } from "react";
import { ReactDOM } from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement(".app-wrapper")


export default class BlogModal extends Component {
  constructor(props) {
    super(props);

    this.customStyles = {
        content: {
            top:"50%",
            left: "50%",
            right: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "800px"
        },
        overlay: {
            backgroundColor: "rgba(1, 1, 1, 0.75)"
        }
    }
  }

  render() {
    return (
      <ReactModal
        style={this.customStyles}
        onRequestClose={() => {
          this.props.handleCloseModal();
        }}
        isOpen={this.props.showModal}
      >
        <a onClick={this.props.handleCloseModal}>X</a>
        <h1>MODAL MODAL MODAL MO</h1>
      </ReactModal>
    );
  }
}
