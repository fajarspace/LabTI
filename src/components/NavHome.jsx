import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <div>

      <nav className="container-fluid">
        <ul>
          <li><strong><NavLink to="/" className="navbar-item">
            eLab
          </NavLink></strong></li>
          <li><strong><NavLink to="/login" className="navbar-item">
            login
          </NavLink></strong></li>
        </ul>
      </nav>



    </div>
  );
};

export default Navbar;
