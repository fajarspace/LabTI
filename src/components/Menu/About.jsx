import React from 'react'
import Sidebar from "./Sidebar";
import ApiDoc from "./ApiDoc";
import TechStack from "./TechStack";

const About = () => {
  return (
    <>
    <div className="dashboard">
    <div className="sidebar">
      <Sidebar/>
    </div>
    <div className="container">
    <hgroup>
        <h1>About this web</h1>
      </hgroup>
      <TechStack/>
      <ApiDoc/>
    </div>
    </div>
    </>
  )
}

export default About