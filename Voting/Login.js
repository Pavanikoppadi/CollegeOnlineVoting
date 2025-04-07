import { useNavigate } from "react-router-dom";
import "./Login.css";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [p, setp] = useState("");
  const [u, setu] = useState("");
  const [error, setError] = useState("");
  const [error1, setError1] = useState("");
  
  const navigate = useNavigate();
  const handleAdminSubmit = (event) => {
    event.preventDefault();
    //console.log(u);
    axios
      .post("http://localhost:520/admin", { u, p })
      .then((response) => {
        navigate("/results");
      })
      .catch((error) => {
        console.log("invalid details");
        if (error.response && error.response.status === 401) {
          setError("Invalid credentials");
        } else {
          setError("An error occurred");
        }
      });
  };
  const handleNavigateToResults = () => {
    navigate("/results");
  };

  const handleStudentSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("user", username);
    axios
      .post("http://localhost:520", {
        username,
        password,
      })
      .then((response) => {
        console.log(username);
        navigate("/user",{ state: { username } });
      })
      .catch((error) => {
        console.log("invalid details");
        if (error.response && error.response.status === 401) {
          setError1("Invalid credentials");
        } else {
          setError1("An error occurred");
        }
      });
  };

  return (
    <div>
      <button className="hi" onClick={handleNavigateToResults}>Live Results</button>
      <div id="container">
        <div className="login-box">
          <h2>Admin Login</h2>
          <form onSubmit={handleAdminSubmit}>
            <label for="admin-username">Employee Id:</label>
            <input
              type="text"
              id="admin-username"
              name="admin-username"
              required
              onChange={(e) => setu(e.target.value)}
            />
            <label for="admin-password">Password:</label>
            <input
              type="password"
              id="admin-password"
              name="admin-password"
              onChange={(e) => setp(e.target.value)}
              required
            />
            <input type="submit" value="Login" />
            {error && <div className="error-message">{error}</div>}
          </form>
        </div>

        <div className="login-box">
          <h2>Student Login</h2>
          <form onSubmit={handleStudentSubmit}>
            <label for="student-username">Register Number:</label>
            <input
              type="text"
              id="student-username"
              name="student-username"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              required
            />
            <label for="student-password">Password:</label>
            <input
              type="password"
              id="student-password"
              name="student-password"
              onChange={(e) => setpassword(e.target.value)}
              required
            />
            <input type="submit" value="Login" />
          </form>
          {error1 && <div className="error-message">{error1}</div>}
        </div>
      </div>
    </div>
  );
}
export default Login;
