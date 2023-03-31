import React from 'react'
import { Link } from "react-router-dom";
// import { BiAddToQueue } from 'react-icons/bi';
import { RiLogoutBoxRLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { GrSchedule } from "react-icons/gr";
import { AiOutlineDashboard } from "react-icons/ai";
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
      <nav className='container-fluid' style={{ 'borderBottom': '1px solid lightgrey' }}>
        <ul>
          <li><strong><Link style={{ color: "black" }} className="link" to={'/dashboard'}>Dashb<AiOutlineDashboard />ard</Link></strong></li>
          {/* <li>
            <Link to={`/jadwal/add`}>
              <BiAddToQueue/>
            </Link>
          </li> */}
          {/* <li>
            <Link className="link" to={'/jadwal'} >Jadwal</Link>
          </li> */}


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
          <li>
            <details role="list" dir="rtl">
              <summary aria-haspopup="listbox" role="link"><Link className="link" to={'/jadwal'} ><GrSchedule /> Jadwal</Link></summary>
              <ul role="listbox">
                <li><Link className="link" to={'/jadwal/add'} >Tambah</Link></li>
              </ul>
            </details>
          </li>

          {user && user.role === "admin" && (
            <li>
              <details role="list" dir="rtl">
                <summary aria-haspopup="listbox" role="link"><Link className="link" to={'/users'} ><FiUsers /> User</Link></summary>
                <ul role="listbox">
                  <li><Link className="link" to={'/users/add'} >Tambah</Link></li>
                </ul>
              </details>
            </li>

          )}
          {/* <li><Link className='link' to={`/about`}>
            About
          </Link></li> */}
          <li><Link style={{ color: "red" }} onClick={logout} to={`/`}>
            <RiLogoutBoxRLine />
          </Link></li>
        </ul>
      </nav>
      <br />
    </>
  )
}

export default Sidebar