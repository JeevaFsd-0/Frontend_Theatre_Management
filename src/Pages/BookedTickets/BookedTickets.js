import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import User from "../../Components/User/User";
import "./BookedTickets.css";

const BookedTickets = () => {
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

  return (
    <div className="users">
      <div className="users_section">
      <h1 className="users_title">Booked Tickets</h1>
        <div className="users_container">
        {users.length === 0 ? (
            <div className="users_empty">
              <h1>No Tickets Found. Book Your Tickets</h1>
              <h3>
                <Link to="/booking">Book Tickets</Link>
              </h3>
            </div>
          ):(
            users.map((user) => {
              return <User
                key={user._id}
                id={user._id}
                name={user.name}
                contact={user.contact}
                moviename={user.moviename}
                tickets={user.tickets}
              />
            })
          )
        }
        </div>
      </div>
    </div>
  )
};

export default BookedTickets;