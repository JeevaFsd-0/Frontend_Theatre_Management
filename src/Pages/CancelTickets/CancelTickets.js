import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cancelticket from "../../Components/CancelTickets/Cancelticket";
import "./CancelTickets.css";

const CancelTickets = () => {
  const [users, setUsers] = useState([]);

  const token = localStorage.getItem("token");

  const getData = async () => {
    try {
      const {data} = await axios.get("http://localhost:4000/booking/all", {
        headers: {
          Authorization: token
        }
      });
      setUsers(data.users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  },);

  const deleteUser = async (id) => {
    try {
      const {data} = await axios.delete(`http://localhost:4000/booking/delete/${id}`,{
        headers: {
          Authorization: token
        }
      });
      alert(data.msg);
      getData();
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className="ticket">
      <div className="ticket_section">
      <h1 className="ticket_title">Cancel Tickets</h1>
        <div className="ticket_container">
          {users.length === 0 ? (
            <div className="ticket_empty">
              <h1>You Don't Have any Tickets</h1>
              <h3>
                <Link to="/booking">Book Tickets</Link>
              </h3>
            </div>
          ):(
            users.map((user) => {
              return <Cancelticket
                key={user._id}
                id={user._id}
                name={user.name}
                contact={user.contact}
                moviename={user.moviename}
                tickets={user.tickets}
                deleteUser={() => deleteUser(user._id)}
              />
            })
          )
        }
        </div>
      </div>
    </div>
  )
}

export default CancelTickets;