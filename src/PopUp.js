import React from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

function PopUp({ onClick }) {
  return (
    <Modal show={true}>
      <Modal.Body>Solved</Modal.Body>
      <Modal.Footer>
        <button onClick={onClick}>OK</button>
      </Modal.Footer>
    </Modal>
  );
}

export default PopUp;
