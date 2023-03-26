import React from 'react'
import Sidebar from "./Menu/Sidebar";
import ApiDoc from "./Menu/ApiDoc";
import TechStack from "./Menu/TechStack";
import { useSelector } from "react-redux";

const About = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <div className="dashboard">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="container">
          <hgroup>
            <h1>Dashboard</h1>
            <h2>
              Welcome Back <strong>{user && user.nama}</strong>
            </h2>
          </hgroup>
          <hgroup>
            <h1>About this web</h1>
          </hgroup>
          <TechStack />
          <ApiDoc />
        </div>
      </div>
    </>
  )
}

export default About





