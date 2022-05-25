import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import PostList from "./Components/PostList";
import UserProfile from "./Components/UserProfile";
import Home from "./Pages/Home";

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <>
      <Router>
        <Navbar user={selectedUser} />
        <Routes>
          <Route path="/posts" element={<PostList user={selectedUser} />} />
          <Route
            path="/profile"
            element={<UserProfile user={selectedUser} />}
          />
        </Routes>
        <Home setSelectedUser={setSelectedUser} />
      </Router>
    </>
  );
};

export default App;
