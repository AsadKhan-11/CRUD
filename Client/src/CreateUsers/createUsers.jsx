import React from "react";
import "./createUsers.css";
function createUsers() {
  return (
    <div className="createUser">
      <h1>Add New User</h1>
      <div className="user-info">
        <label htmlFor="">Name</label>
        <input type="text" placeholder="Enter your name" required />
      </div>
      <div className="user-info">
        <label htmlFor="">Email</label>
        <input type="email" placeholder="Enter your email" required />
      </div>
      <div className="user-info">
        <label htmlFor="">Age</label>
        <input
          type="number"
          min="0"
          max="100"
          placeholder="Enter your age"
          required
        />
      </div>
      <button type="submit">Add User</button>
    </div>
  );
}

export default createUsers;
