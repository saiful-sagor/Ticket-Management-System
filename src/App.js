// App.js
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import PopupForm from "./Modal";
import "bootstrap/dist/css/bootstrap.css"; // Import Bootstrap CSS
import { Button, Modal } from "react-bootstrap";
import Sidebar from "./sidebar";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";


const App = () => {
  const [ticketTypes, setTicketTypes] = useState([]);
  const [types, setTypes] = useState("");
  const [description, setDescription] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [id, setId] = useState();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [ticketToDelete, setTicketToDelete] = useState(null);
  const [validationError, setValidationError] = useState("");

  const addTicketType = () => {
    const newTicketType = {
      ticketType: "",
      description: "",
    };
    setTicketTypes([...ticketTypes, newTicketType]);
  };

  const handleAddTicketType = () => {
    setShowModal(true);
  };
  const handleSave = () => {
    if (!types.trim()) {
      setValidationError("Ticket Type is required.");
      return;
    }
    const newTicketType = {
      id: ticketTypes.length + 1,
      types: types,
      description: description,
    };
    setTicketTypes([...ticketTypes, newTicketType]);
    setShowModal(false);
    setValidationError("");
  };

  const handleEditTicketType = (id) => {
    console.log(ticketTypes);
    setId(id);
    setShowModal1(true);
  };
  const editTicketType = () => {
    if (!types.trim()) {
      setValidationError("Ticket Type is required.");
      return;
    }
    const newTicketType = {
      id: id,
      types: types,
      description: description,
    };

    setTicketTypes((prevTicketTypes) => {
      const updatedTicketTypes = [...prevTicketTypes];
      const index = updatedTicketTypes.findIndex(
        (ticketType) => ticketType.id === id
      );
      updatedTicketTypes[index] = newTicketType;

      return updatedTicketTypes;
    });

    setShowModal1(false);
    setValidationError("");
  };
  // const deleteTicketType = (id) => {
  //   const updatedTicketTypes = ticketTypes.filter(
  //     (ticketType) => ticketType.id !== id
  //   );
  //   setTicketTypes(updatedTicketTypes);
  // };

  const showDeleteConfirmation = (ticket) => {
    setTicketToDelete(ticket);
    setShowDeleteModal(true);
  };
  
  const handleConfirmDelete = () => {
    const updatedTicketTypes = ticketTypes.filter(
      (ticketType) => ticketType.id !== ticketToDelete.id
    );
    setTicketTypes(updatedTicketTypes);
    setShowDeleteModal(false);
  };
  
  const handleCancelDelete = () => {
    setShowDeleteModal(false);
  };

  return (
    <div>
      

      <Sidebar />
      {/* <h1>Ticket Types</h1> */}
      <div className="table-container">
        <div className="add-button-container">
          <button className="add-ticket-button" onClick={handleAddTicketType}>
            Add Ticket Type
          </button>
        </div>
        <table className="table table-success table-striped">
          <thead>
            <tr>
              <th>Ticket Type</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {ticketTypes.map((ticketType) => (
              <tr key={ticketType.id}>
                <td>{ticketType.types}</td>
                <td>{ticketType.description}</td>
                <td className="actions-container">
                  <button type="button" className="btn btn-light" onClick={() => handleEditTicketType(ticketType.id)}>
                    <EditOutlined />
                  </button>
                  <button type="button" className="btn btn-light" onClick={() => showDeleteConfirmation(ticketType)}>
                    <DeleteOutlined />
                  </button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <button onClick={handleAddTicketType}>Add Ticket Type</button> */}

      <div>
        {/* <Button onClick={handleAddTicketType}>Add Ticket Type</Button> */}
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add Ticket Type</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          {validationError && <p className="error-message">{validationError}</p>}
            <p>Ticket Type:</p>
            <input
              className="form-control"
              type="text"
              required
              placeholder=""
              value={types}
              onChange={(e) => setTypes(e.target.value)}
            ></input>
            <p>Description:</p>
            <input
              className="form-control"
              type="text"
              required
              placeholder=""
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></input>
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
        <Modal show={showModal1} onHide={() => setShowModal1(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Ticket Type</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          {validationError && <p className="error-message">{validationError}</p>}
            <p>Ticket Type:</p>
            <input
              className="form-control"
              type="text"
              required
              placeholder=""
              value={types}
              onChange={(e) => setTypes(e.target.value)}
            ></input>
            <p>Description:</p>
            <input
              className="form-control"
              type="text"
              required
              placeholder=""
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></input>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal1(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={editTicketType}>
              Save changes
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={showDeleteModal} onHide={handleCancelDelete}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to delete this ticket type?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCancelDelete}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleConfirmDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
      </div>
    </div>
  );
};

export default App;
