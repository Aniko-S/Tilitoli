import React from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import prettyMs from "pretty-ms";

function PopUp({ onClick, number }) {
  return (
    <Modal show={true}>
      <Modal.Header>
        <h3>Great, you solved the puzzle</h3>
      </Modal.Header>
      <Modal.Body>
        Time:{" "}
        {prettyMs(number, {
          colonNotation: true,
          keepDecimalsOnWholeSeconds: true,
        })}
      </Modal.Body>
      <Modal.Footer>
        <button onClick={onClick}>OK</button>
      </Modal.Footer>
    </Modal>
  );
}

export default PopUp;
