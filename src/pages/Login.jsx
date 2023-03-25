import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../utilities/authSlice";

import "../static/css/custom.css";


import Navbar from "../components/Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/dashboard");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };

  return (
    <>
    <Navbar />
        <article>
          <main className="container">
            <article className="grid card">
              <div>
                <hgroup>
                  <h1>Log In</h1>
                  <h2>Khusus Asisten</h2>
                </hgroup>
                <form onSubmit={Auth} className="box">
                  {isError && <p className="has-text-centered">{message}</p>}
                  <input
                    type="text"
                    className="input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                  <input
                    type="password"
                    className="input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password*"
                  />

                  <button
                    type="submit"
                  >
                    {isLoading ? "Loading..." : "Login"}
                  </button>
                </form>
              </div>
              <div>
              </div>
            </article>
          </main>
        </article>
        <footer className="container-fluid">
          <small>Built with <a href="https://stuffcss.netlify.app" className="secondary">Stuff CSS</a></small>
        </footer>
        <br />
    </>
  );
};

export default Login;