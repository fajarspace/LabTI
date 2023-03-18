import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Jadwallist = () => {
  return (
    <div>
      <h1 className="title">Jadwal</h1>
      <h2 className="subtitle">List of Jadwal</h2>
      <Link to="/jadwal/tambah" className="button is-primary mb-2">
        Add New
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Dosen</th>
            <th>Tanggal</th>
            <th>Waktu</th>
            <th>Praktikum</th>
            <th>Created By</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* {users.map((user, index) => (
            <tr key={user.uuid}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <Link
                  to={`/users/edit/${user.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteUser(user.uuid)}
                  className="button is-small is-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  )
}

export default Jadwallist