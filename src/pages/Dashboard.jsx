import React, { useEffect } from "react";
import Layout from "./Layout";
import Halo from "../components/Halo";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { getMe } from "../features/authSlice";

const Dashboard = () => {

  return (
    <Layout>
      <Halo />
    </Layout>
  );
};

export default Dashboard;