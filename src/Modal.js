import React, { useState } from "react";
import "./popup.css";
import { Button, Modal } from "react-bootstrap";

const PopupForm = () => {
  //   const [name, setName] = useState('');
  //   const [email, setEmail] = useState('');
  //   const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Implement your logic to handle form submission here
//     // For example, you can make an API call to save the form data

//     // Reset the form fields
//     setName("");
//     setEmail("");
//     setIsOpen(false);
//   };

//   const handleOpenPopup = () => {
//     setIsOpen(true);
//   };

//   const handleClosePopup = () => {
//     setIsOpen(false);
//   };
const handleSave = () => {
    // Implement your logic to handle saving changes here
    // You can perform any necessary operations and close the modal if needed
    setShowModal(false);
  };
  

  return (
    <div>
      <Button onClick={() => setShowModal(true)}>Open Modal</Button>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Ticket Type</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Ticket Type:</p>
          <input className="form-control" type="text" required placeholder=""></input>
          <p>Description:</p>
          <input className="form-control" type="text" required placeholder=""></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Add Ticket Type
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PopupForm;
