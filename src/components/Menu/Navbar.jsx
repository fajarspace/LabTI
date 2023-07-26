// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../../utilities/authSlice";

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
    <>
      <div className="top-navbar">
        <nav className="navbar bg-secondary navbar-expand-lg">
          <div className="container-fluid">
            <button
              type="button"
              id="sidebarCollapse"
              className="d-xl-block d-lg-block d-md-mone d-none bg-secondary"
            >
              <span className="material-icons ">arrow_back_ios</span>
            </button>
            {/* <a className="navbar-brand" href="#">
              {" "}
              Halo, {user && user.nama}!{" "}
            </a> */}
            <button
              className="d-inline-block d-lg-none ml-auto more-button bg-secondary"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="material-icons text-light">more_vert</span>
            </button>
            <div
              className="collapse navbar-collapse d-lg-block d-xl-block d-sm-none d-md-none d-none"
              id="navbarSupportedContent"
            >
              <ul className="nav navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="link" onClick={logout} to={`/`}>
                    <span className="material-icons">logout</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
