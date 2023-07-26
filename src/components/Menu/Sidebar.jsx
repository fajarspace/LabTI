// src/components/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";

const Sidebar = () => {
  return (
    <>
      {/* Sidebar  */}
      <nav id="sidebar">
        <div className="sidebar-header">
          <h3>
            <span>LOGO UPB</span>
          </h3>
        </div>
        <ul className="list-unstyled components">
          <li>
            <a href="/dashboard" className="dashboard">
              <i className="material-icons">dashboard</i>
              <span>Dashboard</span>
            </a>
          </li>
          <li className="">
            <a href="/jadwal">
              <i className="material-icons">date_range</i>
              <span>Jadwal</span>
            </a>
          </li>

          <li className="dropdown">
            <a
              href="#pageSubmenu3"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <i className="material-icons">equalizer</i>
              <span>Komponen</span>
            </a>
            <ul className="collapse list-unstyled menu" id="pageSubmenu3">
              <li>
                <a href="/kelas">Kelas</a>
              </li>
              <li>
                <a href="/jam">Jam</a>
              </li>
              <li>
                <a href="/dosen">Dosen</a>
              </li>
              <li>
                <a href="/asisten">Asisten Lab</a>
              </li>
              <li>
                <a href="/ruang">Ruang</a>
              </li>
              <li>
                <a href="/praktikum">Praktikum</a>
              </li>
            </ul>
          </li>

          <li className="">
            <a href="/users">
              <i className="material-icons">person</i>
              <span>Users</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
