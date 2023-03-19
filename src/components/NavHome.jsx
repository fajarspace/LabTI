import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <div>

      <nav className="container-fluid">
        <ul>
          <li><strong><NavLink to="/dashboard" className="navbar-item">
            eLab
          </NavLink></strong></li>
        </ul>
        <ul>
          <li><NavLink to="/login" className="navbar-item">
            Login
          </NavLink></li>
        </ul>
      </nav>



    </div>
  );
};

export default Navbar;