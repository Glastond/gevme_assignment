import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.css";

const Navbar = ({ user }) => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => setSidebar(!sidebar);

  const location = useLocation();

  const sidebarData = [
    { path: "/", name: "Home", cName: "fas fa-home" },
    { path: "/profile", name: "Profile", cName: "fas fa-user" },
    { path: "/posts", name: "Posts", cName: "fad fa-pen-alt" },
  ];

  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <i className="fas fa-bars" onClick={toggleSidebar}></i>
        </Link>
        <h2 className="nav-title">Admin Panel</h2>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={toggleSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <i className="fas fa-times"></i>
            </Link>
          </li>
          {sidebarData.map((item) => {
            return (item.name === "Profile" && !user) ||
              (item.name === "Posts" && !user) ? null : (
              <li
                className={
                  location.pathname === item.path
                    ? "nav-text active"
                    : "nav-text"
                }
                key={item.path}
              >
                <Link to={item.path}>
                  <i className={item.cName}></i>
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
