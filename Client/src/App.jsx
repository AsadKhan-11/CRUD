import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import User from "./Users/User";
import CreateUsers from "./CreateUsers/createUsers";
import UpdateUsers from "./updateUsers/updateUsers";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User />}></Route>
          <Route path="/createUsers" element={<CreateUsers />}></Route>
          <Route path="/updateUsers/:id" element={<UpdateUsers />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
