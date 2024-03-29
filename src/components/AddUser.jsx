import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Menu/Sidebar";

const usersUrl = process.env.REACT_APP_USERS_URL;

const AddUser = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [konfirmPassword, setkonfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post(usersUrl, {
        nama: nama,
        email: email,
        password: password,
        konfirmPassword: konfirmPassword,
        role: role,
      });
      navigate("/users");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
		<>
		<div className="dashboard">
<div className="sidebar">
      <Sidebar/>
    </div>
    <div className="container">
    <form onSubmit={saveUser}>
              <div className="card">
              <hgroup>
                  <h1>Tambah user</h1>
                  <h2>Tambah</h2>
                </hgroup>
              
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    type="password"
                    className="input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password*"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Confirm Password</label>
                <div className="control">
                  <input
                    type="password"
                    className="input"
                    value={konfirmPassword}
                    onChange={(e) => setkonfirmPassword(e.target.value)}
                    placeholder="Konfirmasi Password"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Role</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    >
                       <option value="admin">-- pilih role --</option>
                      <option value="admin">Admin</option>
                      <option value="user">Praktikan</option>
                    </select>
                  </div>
                </div>
                <p className="has-text-centered">{msg}</p>
              </div>
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Save
                  </button>
                </div>
              </div>
              </div>
            </form>
    </div>
    </div>
		</>
  );
};

export default AddUser;