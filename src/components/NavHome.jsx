import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const login = () => {
    navigate("/login");
  };

  return (
    <div>

      <nav className="container-fluid">
        <ul>
          <li><strong><NavLink to="/dashboard" className="navbar-item">
            eLab
          </NavLink></strong></li>
        </ul>
        <ul>

          <li><button onClick={login} className="button is-light">
            Login
          </button></li>
        </ul>
      </nav>



    </div>
  );
};

export default Navbar;