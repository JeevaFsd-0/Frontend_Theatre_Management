import React, { useState } from "react";
import "./Home.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signup = async () => {

    if(
      !name || 
      !email ||
      !password 
      ) {
        alert("Please enter all datails");
        return;
      }

    const response = await axios.post("http://localhost:4000/user/signup",{
      name,
      email,
      password,
    });
    alert(response.data.msg);
    navigate("/movies");
  };

  return (
    <div className="container">
        <div className="section">
        <label>Name</label>
        <br />
        <input 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Email</label>
        <br />
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Password</label>
        <br />
        <input 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={signup}>SignUp</button>
        </div>
    </div>
  )
}

export default Home;