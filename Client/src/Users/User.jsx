import React, { useEffect } from "react";
import { useState } from "react";
import "./User.css";
import { Link } from "react-router-dom";
import axios from "axios";

function User() {
  const [user, setUser] = useState([]);

  const handleClick = (id) => {
    axios
      .delete("http://localhost:5000/deleteUsers/" + id)
      .then((del) => {
        console.log(del);
        setUser((prevUser) => prevUser.filter((u) => u._id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((result) => setUser(result.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="Users">
        <Link to="/createUsers">
          <button>Add +</button>{" "}
        </Link>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((users, index) => (
              <tr key={index}>
                <td>{users.name}</td>
                <td>{users.email}</td>
                <td>{users.age}</td>
                <td>
                  <button>Update</button>{" "}
                  <button onClick={(e) => handleClick(users._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default User;
