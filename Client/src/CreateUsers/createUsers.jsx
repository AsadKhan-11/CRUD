import React, { useState } from "react";
import "./createUsers.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function createUsers() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/createUsers", { name, email, age })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));

    navigate("/");
    window.location.reload();
  };

  return (
    <form className="createUser" onSubmit={Submit}>
      <h1>Add New User</h1>
      <div className="user-info">
        <label htmlFor="">Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          required
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="user-info">
        <label htmlFor="">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="user-info">
        <label htmlFor="">Age</label>
        <input
          type="number"
          min="0"
          max="100"
          placeholder="Enter your age"
          required
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <button type="submit">Add User</button>
    </form>
  );
}

export default createUsers;
