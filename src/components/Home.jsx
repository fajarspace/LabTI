import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";

const Home = () => {
  const [jadwal, setJadwal] = useState([]);

  useEffect(() => {
    getJadwal();
  }, []);

  const getJadwal = async () => {
    const response = await axios.get("https://elab-restfulapi-production.up.railway.app/jadwal");
    setJadwal(response.data);
  };

  return (
    <div className="container-fluid">
      <hgroup>
        <h2 className="subtitle">Jadwal</h2>
        <NavLink to="/login" className="navbar-item">
          login
        </NavLink>
      </hgroup>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Dosen</th>
            <th>Asisten 1</th>
            <th>Asisten 2</th>
            <th>Tanggal</th>
            <th>Jam</th>
            <th>Kelas</th>
            <th>Praktikum</th>
            {/* <th>Created By</th> */}
          </tr>
        </thead>
        <tbody>
          {jadwal.map((jadwal, index) => (
            <tr key={jadwal.uuid}>
              <td>{index + 1}</td>
              <td>{jadwal.dosen}</td>
              <td>{jadwal.asisten1}</td>
              <td>{jadwal.asisten2}</td>
              <td>{jadwal.tanggal}</td>
              <td>{jadwal.jam}</td>
              <td>{jadwal.kelas}</td>
              <td>{jadwal.praktikum}</td>
              {/* <td>{jadwal.user.nama}</td> */}
              {/* <td>
                <Link
                  to={`/jadwal/edit/${jadwal.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteJadwal(jadwal.uuid)}
                  className="button is-small is-danger"
                >
                  Delete
                </button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Home