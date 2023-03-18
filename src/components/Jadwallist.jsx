import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Jadwallist = () => {
  const [jadwal, setJadwal] = useState([]);

  useEffect(() => {
    getJadwal();
  }, []);

  const getJadwal = async () => {
    const response = await axios.get("http://localhost:4000/jadwal");
    setJadwal(response.data);
  };

  const deleteJadwal = async (jadwalId) => {
    await axios.delete(`http://localhost:4000/jadwal/${jadwalId}`);
    getJadwal();
  };
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
          {jadwal.map((jadwal, index) => (
            <tr key={jadwal.uuid}>
              <td>{index + 1}</td>
              <td>{jadwal.dosen}</td>
              <td>{jadwal.tanggal}</td>
              <td>{jadwal.waktu}</td>
              <td>{jadwal.praktikum}</td>
              <td>{jadwal.user.nama}</td>
              <td>
                <Link
                  to={`/jadwals/edit/${jadwal.uuid}`}
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Jadwallist