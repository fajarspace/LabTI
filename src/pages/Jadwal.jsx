import React, { useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import NavAdmin from "../components/NavAdmin";
// import { IoMdTrash } from "react-icons/io";
// import { FiEdit } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../utilities/authSlice";
import Sidebar from "../components/Menu/Sidebar";
import ListJadwalInformatika from "../components/jadwal/ListJadwalInformatika";
// import ListJadwalIndustri from "../components/jadwal/ListJadwalIndustri";

const Jadwal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/login");
    }
  }, [isError, navigate]);
  return (
    <>
      <div className="dashboard">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="container-fluid">
          <ListJadwalInformatika />
          {/* <ListJadwalIndustri/> */}
        </div>
      </div>
    </>
  );
};
export default Jadwal;
