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
        <nav className='' style={{'borderBottom':'1px solid lightgrey'}}>
        <ul>
            <li><strong><Link to={'/dashboard'}>Dashboard</Link></strong></li>
        </ul>
        <ul>
        {/* <li>
            <Link to={`/jadwal/add`}>
              <BiAddToQueue/>
            </Link>
          </li> */}
          <li>
            <Link to={'/jadwal'} >Jadwal</Link>
          </li>
        
        {user && user.role === "admin" && (
            <li>
              <Link to={"/users"}>
                {/* <IoPerson /> Users */} User
              </Link>
            </li>
          )}
          <li><Link onClick={logout} to={`/`}>
          <RiLogoutBoxRLine/>
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
        </nav>
        <br />
    </>
  )
}

export default Navbar