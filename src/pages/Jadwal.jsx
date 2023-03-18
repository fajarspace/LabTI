import React, { useEffect } from "react";
import Layout from "./Layout";
import Jadwallist from "../components/Jadwallist";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { getMe } from "../features/authSlice";

const Jadwal = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const { isError } = useSelector((state) => state.auth);

  // useEffect(() => {
  //   dispatch(getMe());
  // }, [dispatch]);

  // useEffect(() => {
  //   if (isError) {
  //     navigate("/");
  //   }
  // }, [isError, navigate]);
  return (
    <Layout>
      <Jadwallist />
    </Layout>
  );
};

export default Jadwal;