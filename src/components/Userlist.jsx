import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Userlist = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("https://elab-restfulapi-production.up.railway.app/users");
    setUsers(response.data);
  };

  const deleteUser = async (userId) => {
    await axios.delete(`https://elab-restfulapi-production.up.railway.app/users/${userId}`);
    getUsers();
  };
  return (
    <div>
      <hgroup>
        <h1 className="title">User</h1>
        <h2 className="subtitle">Admin dapat merubah, menambah dan menghapus user</h2>
      </hgroup>
      <Link role='button' to="/users/tambah" className="button is-primary mb-2">
        Tambah baru
      </Link>
      <table role='grid'>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.uuid}>
              <td>{index + 1}</td>
              <td>{user.nama}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <Link
                  to={`/users/edit/${user.uuid}`}
                  className="button is-small is-info"
                >
                  <kbd>Edit</kbd>
                </Link>
                <br />
                <Link
                  onClick={() => deleteUser(user.uuid)}
                  className="button is-small is-danger"
                >
                  <kbd>Hapus</kbd>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Userlist