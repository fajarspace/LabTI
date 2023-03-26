import React from 'react'
import { Link } from "react-router-dom";
// import { BiAddToQueue } from 'react-icons/bi';
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../utilities/authSlice";

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
      <div className="menu">
        <ul>
          <li><strong><Link className="link" to={'/dashboard'}>Dashboard</Link></strong></li>
          {/* <li>
            <Link to={`/jadwal/add`}>
              <BiAddToQueue/>
            </Link>
          </li> */}
          <li>
            <Link className="link" to={'/jadwal'} >Jadwal</Link>
          </li>

          {user && user.role === "admin" && (

            <details>
              <summary>Accordion 1</summary>
              <p><Link className="link" to={"/users"}>
                {/* <IoPerson /> Users */} User
              </Link></p>
            </details>


          )}
          <li><Link className="link" onClick={logout} to={`/`}>
            <RiLogoutBoxRLine />
          </Link></li>
          {/* <li>
            <Link to={`jadwal/add`}>
              <BiAddToQueue/>
            </Link>
          </li>
        <li><Link to={`/`}>
          <RiLogoutBoxRLine/>
        </Link></li> */}
        </ul>
      </div>
    </>
  )
}

export default Navbar