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
      <hgroup>
        <h1 className="title">Jadwal</h1>
        <h2 className="subtitle">List of Jadwal</h2>
      </hgroup>
      <Link to="/jadwal/tambah" role='button' className="button is-primary mb-2">
        Tambah Baru
      </Link>
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
            <th>Created By</th>
            <th>Actions</th>
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
              <td>{jadwal.user.nama}</td>
              <td>
                <Link
                  to={`/jadwal/edit/${jadwal.uuid}`}
                  className="button is-small is-info"
                >
                  <kbd>Edit</kbd>
                </Link>
                <br />
                <Link
                  onClick={() => deleteJadwal(jadwal.uuid)}
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

export default Jadwallist