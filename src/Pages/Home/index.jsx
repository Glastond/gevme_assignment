import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";

import "./index.css";

const Home = ({ setSelectedUser }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  let navigate = useNavigate();

  const columns = [
    {
      name: "Name",
      selector: "name",
      sortable: true,
    },
    {
      name: "User Name",
      selector: "username",
      sortable: true,
    },
    {
      name: "Email",
      selector: "email",
      sortable: true,
    },
    {
      name: "Phone",
      selector: "phone",
      sortable: true,
    },
    {
      cell: (user) => (
        <div>
          <button
            className="datatable-button"
            onClick={() => {
              navigate("/profile");
              setSelectedUser(user);
            }}
          >
            View Profile
          </button>
          <button
            className="datatable-button"
            onClick={() => {
              navigate("/posts");
              setSelectedUser(user);
            }}
          >
            View Post
          </button>
        </div>
      ),
    },
  ];

  const dataTableStyles = {
    rows: {
      style: {
        minHeight: "fit-content",
      },
    },
    headCells: {
      style: {
        backgroundColor: "#060b26",
        fontSize: "16px !important",
        color: "white",
        fontWeight: "700",
      },
    },
    cells: {
      style: {
        paddingLeft: "15px !important",
        overlflow: "wrap",
        fontSize: "14px !important",
        padding: 0,
        height: "fit-content",
        paddingTop: "auto",
        paddingBottom: "auto",
        lineHeight: "40px",
      },
    },
  };

  return (
    <div className="home-page-wrapper">
      <h1>Users</h1>
      <DataTable
        columns={columns}
        data={users}
        noHeader
        defaultSortField="id"
        customStyles={dataTableStyles}
        defaultSortAsc={true}
        highlightOnHover
        dense
      />
    </div>
  );
};

export default Home;
