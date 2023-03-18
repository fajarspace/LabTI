import React from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import { IoPerson, IoTime, IoHome, IoLogOut } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div>
      <div>
        <aside className="menu pl-2 has-shadow">
          <p className="menu-label">General</p>
          <ul className="menu-list">
            <li>
              <NavLink to={"/dashboard"}>
                <IoHome /> Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to={"/jadwal"}>
                <IoTime /> jadwal
              </NavLink>
            </li>
          </ul>
          {/* {user && user.role === "admin" && ( */}
          <div>
            <p className="menu-label">Admin</p>
            <ul className="menu-list">
              <li>
                <NavLink to={"/users"}>
                  <IoPerson /> Users
                </NavLink>
              </li>
            </ul>
          </div>
          {/* )} */}

          <p className="menu-label">Settings</p>
          <ul className="menu-list">
            <li>
              <button className="button is-white">
                <IoLogOut /> Logout
              </button>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  )
}

export default Sidebar