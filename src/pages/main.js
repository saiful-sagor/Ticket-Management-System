import React, { useState } from "react";
import ReactDOM from "react-dom";

const Main = () =>{
    const [ticketTypes, setTicketTypes] = useState([]);

    const handleAddTicketType = () => {
      const newTicketType = prompt("Enter a new ticket type:");
      if (newTicketType) {
        setTicketTypes([...ticketTypes, {
          ticketType: newTicketType,
          description: "",
        }]);
      }
    };
  
    const handleEditTicketType = (id) => {
      const ticketType = ticketTypes.find((ticket) => ticket.id === id);
      if (ticketType) {
        const newTicketType = prompt("Enter a new ticket type:");
        if (newTicketType) {
          ticketType.ticketType = newTicketType;
          setTicketTypes([...ticketTypes.filter((ticket) => ticket.id !== id), ticketType]);
        }
      }
    };
  
    const handleDeleteTicketType = (id) => {
      const confirm = window.confirm("Are you sure you want to delete this ticket type?");
      if (confirm) {
        setTicketTypes([...ticketTypes.filter((ticket) => ticket.id !== id)]);
      }
    };
}
export default Main;