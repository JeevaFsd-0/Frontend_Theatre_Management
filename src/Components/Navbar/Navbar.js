import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../Slices/user";

const Navbar = () => {

  const user = useSelector((state) => state.userInfo.user);

  const dispatch = useDispatch();

  const logout = () => {
    dispatch(removeUser());
    localStorage.removeItem("token");
  };

  return (
    <nav>
      <h1>Theatre Management System</h1>
      <ul>
        <Link className="nav" to="/movies">Movies</Link>
        <Link className="nav" to="/booking">Booking</Link>
        <Link className="nav" to="/booked-tickets">Booked_tickets</Link>
        <Link className="nav" to="/cancel-tickets">Cancel_tickets</Link>
        {user ? <p className="btn" onClick={logout}>Logout</p> : <Link className="btn" to="/login">Login</Link>}
      </ul>
    </nav>
  );
};

export default Navbar;