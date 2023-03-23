import React from "react";
import { useSelector } from "react-redux";
import NavAdmin from ".//NavAdmin";

const DashboardPage = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="container-fluid" >
        <NavAdmin/>
      <hgroup>
        {/* <h1 className="title">Dashboard</h1> */}
        <h2 className="subtitle">
          Welcome Back <strong>{user && user.nama}</strong>
        </h2>
      </hgroup>
    </div>
  );
};

export default DashboardPage