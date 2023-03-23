import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
      {/* <hgroup style={{position:"relative", bottom:"300px", top:"400px"}}>
        <h1> <Link target={'_blank'} to={'https://github.com/fajarspace/LabTI-RestfulApi'}>Api Documentation</Link></h1>
      </hgroup> */}
    </div>
  );
};

export default DashboardPage