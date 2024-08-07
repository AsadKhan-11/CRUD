import React from "react";
import { useState } from "react";
import "./User.css";
import { Link } from "react-router-dom";

function User() {
  const [info, setInfo] = useState([
    {
      name: "asad",
      email: "asad@gmail.com",
      age: 22,
    },
  ]);

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
            {info.map((users, index) => (
              <tr key={index}>
                <td>{users.name}</td>
                <td>{users.email}</td>
                <td>{users.age}</td>
                <td>
                  <button>Update</button> <button>Delete</button>
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
