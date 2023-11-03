import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Movies from "./Pages/Movies/Movies";
import Booking from "./Pages/Booking/Booking";
import BookedTickets from "./Pages/BookedTickets/BookedTickets";
import CancelTickets from "./Pages/CancelTickets/CancelTickets";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Pages/Login/Login";
import Error from "./Pages/Error";
import { useDispatch } from "react-redux";
import { handleLogin } from "./Slices/user";
import PrivateRoute from "./Components/PrivateRoute";


const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      dispatch(handleLogin(token));
    }
  },);

  return (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route element={<PrivateRoute />}>
        <Route path="/booking" element={<Booking />} />
        <Route path="/booked-tickets" element={<BookedTickets />} />
        <Route path="/cancel-tickets" element={<CancelTickets />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
  );
};

export default App;