import React from "react";
// import { Link } from "react-router-dom";
// import { RiLogoutBoxRLine } from "react-icons/ri";
// import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import { LogOut, reset } from "../utilities/authSlice";
import Sidebar from "./Menu/Sidebar";

const DashboardPage = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <>

      <div className="dashboard">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="container-fluid">
          <hgroup>
            <h1>Dashboard</h1>
            <h2>
              Welcome Back <strong>{user && user.nama}</strong>
            </h2>
          </hgroup>
        </div>
      </div>
    </>
  );
};

export default DashboardPage