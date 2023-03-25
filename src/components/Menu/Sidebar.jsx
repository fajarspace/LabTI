import React from 'react'
import { Link } from "react-router-dom";
// import { BiAddToQueue } from 'react-icons/bi';
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../../utilities/authSlice";

const Sidebar = () => {
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
        <nav className='container-fluid' style={{'borderBottom':'1px solid lightgrey'}}>
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
              
              <li>
              <Link className="link" to={'/users'} >User</Link>
            </li>
          )}

          {/* <li>
            <Link to={`jadwal/add`}>
              <BiAddToQueue/>
            </Link>
          </li>
        <li><Link to={`/`}>
          <RiLogoutBoxRLine/>
        </Link></li> */}
        </ul>
        <ul>
        <li><Link to={`/about`}>
          About
        </Link></li>
        <li><Link onClick={logout} to={`/`}>
          <RiLogoutBoxRLine/>
        </Link></li>
        </ul>
      </nav>
      <br />
    </>
  )
}

export default Sidebar