import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const UserProfile = ({ user }) => {
  let intials =
    user.name.split(" ")[0].charAt(0).toUpperCase() +
    user.name.split(" ")[1].charAt(0).toUpperCase();

  const navigate = useNavigate();

  return (
    <div className="user-profile">
      <div className="user-profile__header">
        <h1>Profile</h1>
        <i
          className="fas fa-times"
          onClick={() => {
            navigate("/");
          }}
        ></i>
      </div>
      <div className="user-profile__content">
        {/* Avatar */}
        <div className="user-profile__avatar">
          <div id="profileImage">{intials}</div>
          <h2>{user.name}</h2>
        </div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          disabled
          name="email"
          id="email"
          value={user.email}
        />
        <label htmlFor="address">Address</label>
        <input
          type="text"
          disabled
          name="address"
          id="address"
          value={user.address.street}
        />
        <label htmlFor="Phone">Phone</label>
        <input type="tel" disabled name="Phone" id="Phone" value={user.phone} />
        <label htmlFor="website">Website</label>
        <input
          type="url"
          disabled
          name="website"
          id="website"
          value={user.website}
        />
        <label htmlFor="comapany_name">Company Name</label>
        <input
          type="text"
          disabled
          name="comapany_name"
          id="comapany_name"
          value={user.company.name}
        />
      </div>
    </div>
  );
};

export default UserProfile;
