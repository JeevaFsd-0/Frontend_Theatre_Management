import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { handleLogin } from "../../Slices/user";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async () => {

    if(
      !email || 
      !password
      ) {
        alert("Please enter all datails");
        return;
      }

    const response = await axios.post("http://localhost:4000/user/login",{
      email,
      password,
    });
    localStorage.setItem("token", response.data);
    dispatch(handleLogin(response.data));
    navigate("/booking");
  };

  return (
    <div className="container">
        <div className="section">
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
        <button onClick={login}>Login</button>
        </div>
    </div>
  )
}

export default Login;