import React, { useEffect } from "react";
import Login from "../components/Login";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../utilities/authSlice";

const LoginPages = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    // if (isError) {
    //   navigate("/login");
    // }
    if (user && user.role !== "admin") {
      navigate("/dashboard");
    }
  }, [user, navigate]);
  return <Login />;
};

export default LoginPages;
