import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const CloseModal = ({ show, handleClose, prodModal, deleteHandler }) => {
  const handleDelete = (p) => {
    deleteHandler(p);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you want to delete =&gt;
        <span className="bg-warning p-2">  {prodModal?.Description}</span>?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="danger" onClick={() => handleDelete(prodModal?._id)}>
          Delete
        </Button>{" "}
      </Modal.Footer>
    </Modal>
  );
};

export default CloseModal;
