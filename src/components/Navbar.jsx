import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoPerson, IoTime, IoHome, IoLogOut } from "react-icons/io5";
import { LogOut, reset } from "../features/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div>
      <nav className="container-fluid">
        <ul>
          <li><strong>
            <NavLink to="/dashboard" className="navbar-item">
              eLab
            </NavLink></strong></li>
          <li><NavLink to={"/dashboard"}>
            {/* <IoHome />*/} Dashboard
          </NavLink></li>
          <li>
            <NavLink to={"/jadwal"}>
              {/* <IoTime /> */} Jadwal
            </NavLink>
          </li>
          {user && user.role === "admin" && (
            <li>
              <NavLink to={"/users"}>
                {/* <IoPerson /> Users */} User
              </NavLink>
            </li>
          )}
        </ul>
        <ul>
          <li><button onClick={logout} className="">
            Log out
          </button></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;