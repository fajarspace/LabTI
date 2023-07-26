import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../utilities/authSlice";

import "../static/css/custom.css";

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
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-5">
              <form onSubmit={Auth}>
                {/* Email input */}
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example3">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </div>
                {/* Password input */}
                <div className="form-outline mb-3">
                  <label className="form-label" htmlFor="form3Example4">
                    Password
                  </label>
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password*"
                  />
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="submit"
                    className="btn btn-secondary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  >
                    {isLoading ? "Loading..." : "Login"}
                  </button>

                  <p className="small fw-bold mt-2 pt-1 mb-0">{message}</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
