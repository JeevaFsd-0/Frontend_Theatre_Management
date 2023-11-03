import React from 'react';
import "./User.css";

const User = ({ id, name, contact, moviename, tickets }) => {
  return (
    <div className='main'>
        <div className="user">
        <h2>
            Ticket_id: <span>{id}</span>
        </h2>
        <h3>
            Name: <span>{name}</span>
        </h3>
        <h3>
            Contact: <span>{contact}</span>
        </h3>
        <h3>
            MovieName: <span>{moviename}</span>
        </h3>
        <h3>
            Tickets: <span>{tickets}</span>
        </h3>
    </div>
    </div>
  );
};

export default User;