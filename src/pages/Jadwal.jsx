import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import NavAdmin from "../components/NavAdmin";
// import { IoMdTrash } from "react-icons/io";
// import { FiEdit } from "react-icons/fi";
import ListJadwal from "../components/ListJadwal";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../utilities/authSlice";

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
        <ListJadwal/>
    );
    
    }
export default Jadwal;
