import React, { useEffect, useState } from "react";
import "./Booking.css";
import axios from "axios";

const Booking = () => {

  const [userInfo, setUserInfo] = useState({
    name: "",
    contact: "",
    moviename: "",
    tickets: "",
  });
  
  useEffect(()=>{
    setUserInfo((currInfo)=>{
      return {
        ...currInfo,
      }
    });
  }, []);

  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInfo((currInfo) => {
      return {
        ...currInfo,
        [name]: value,
      };
    });
  };
  
  const add = async () => {
    
    if(
      !userInfo.name || 
      !userInfo.contact ||
      !userInfo.moviename ||
      !userInfo.tickets
      ) {
        alert("Please enter all datails");
        return;
      }

    let token = localStorage.getItem("token");
    try {
      const {data} = await axios.post("http://localhost:4000/booking/add", userInfo, {
        headers: {
          "Authorization": token
        }
      });

      alert(data.msg);
      
      setUserInfo({
        name: "",
        contact: "",
        moviename: "",
        tickets: "",
      });

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="body">
    <div className="home">
        <div className="home_container">
          <div className="home_formContainer">
            <h1 className="home_title">Book Your Tickets</h1>
            <input 
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={userInfo.name}
              onChange={handleChange}
            />
            <br />
            <input
              type="number"
              name="contact"
              placeholder="Enter Your Mobile No"
              value={userInfo.contact}
              onChange={handleChange}
             />
             <br />
            <input 
              type="text"
              name="moviename"
              placeholder="Enter the Movie Name"
              value={userInfo.moviename}
              onChange={handleChange}
            />
             <br />
             <input 
              type="number"
              name="tickets"
              placeholder="Number of Tickets"
              value={userInfo.tickets}
              onChange={handleChange}
             />
             <br />
             <button onClick={add}>Book Tickets</button>
          </div>
        </div>
    </div>
    </div>
  );
};

export default Booking;