import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../features/authSlice";

import NavHome from "./NavHome";

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
      <section className="hero is-fullheight is-fullwidth">
        <NavHome />

        <article>
          <main className="container">
            <article className="grid">
              <div>
                <hgroup>
                  <h1>Sign in</h1>
                  <h2>A minimalist layout for Login pages</h2>
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
                    placeholder="******"
                  />
                  <fieldset>
                    <label for="remember">
                      <input type="checkbox" role="switch" id="remember" name="remember" />
                      Remember me
                    </label>
                  </fieldset>
                  <button
                    type="submit"
                    className="button is-success is-fullwidth"
                  >
                    {isLoading ? "Loading..." : "Login"}
                  </button>
                </form>
              </div>
              <div></div>
            </article>
          </main></article>




      </section>
    </>
  );
};

export default Login;