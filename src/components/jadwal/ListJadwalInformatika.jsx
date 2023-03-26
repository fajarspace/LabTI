import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BiAddToQueue } from 'react-icons/bi';
import { IoMdTrash } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { useSelector } from "react-redux";

const jadwalUrl = process.env.REACT_APP_JADWAL_TIF_URL;

const ListJadwalInformatika = () => {
  const { user } = useSelector((state) => state.auth);

  const [jadwalinformatika, setJadwal] = useState([]);

  useEffect(() => {
    getJadwal();
  }, []);

  const getJadwal = async () => {
    try {
      const response = await axios.get(jadwalUrl);
      setJadwal(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteJadwal = async (id) => {
    const urlById = `${jadwalUrl}/${id}`;
    try {
      await axios.delete(urlById);
      getJadwal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <hgroup>
        <h1>Jadwal Informatika 19 & 20</h1>
        <h2>jadwal dapat berubah sewaktu waktu</h2>
      </hgroup>
      {user && user.role === "admin" && (
        <Link className="outline" to={`/jadwal/tif/add`}>
          <BiAddToQueue />
        </Link>
      )}

      {jadwalinformatika.length > 0 ? (
        <>
          <div className="table-container">
            <table className="table" role={'grid'}>
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th>Program Studi</th>
                  <th>Kelas</th>
                  <th>Hari</th>
                  <th>Waktu</th>
                  <th>Ruang</th>
                  <th>Dosen</th>
                  <th>Asisten</th>
                  <th>Asisten</th>
                  <th>Praktikum</th>
                  {user && user.role === "admin" && (
                    <>
                      <th>Created By</th>
                      <th>Actions</th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody>
                {jadwalinformatika.map((jadwalinformatika, index) => (
                  <tr key={jadwalinformatika.uuid}>
                    <td>{index + 1}</td>
                    <td>{jadwalinformatika.programStudi}</td>
                    <td>{jadwalinformatika.kelas}</td>
                    <td>{jadwalinformatika.hari}</td>
                    <td>{jadwalinformatika.waktu}</td>
                    <td>{jadwalinformatika.ruang}</td>
                    <td>{jadwalinformatika.dosen}</td>
                    <td>{jadwalinformatika.asisten1}</td>
                    <td>{jadwalinformatika.asisten2}</td>
                    <td>{jadwalinformatika.praktikum}</td>

                    {user && user.role === "admin" && (
                      <>
                        <td>{jadwalinformatika.user.nama}</td>
                        <td>
                          <Link
                            to={`/jadwal/tif/edit/${jadwalinformatika.uuid}`}
                            className="button is-small is-info mr-2"
                          >
                            <kbd style={{ "backgroundColor": 'yellow', "color": "black", fontSize: "20px" }}><FiEdit /></kbd>
                          </Link> &nbsp;

                          <Link
                            onClick={() => {
                              if (window.confirm("Apakah Anda yakin ingin menghapus jadwal ini?")) {
                                window.alert('Hapus jadwal berhasil!')
                                deleteJadwal(jadwalinformatika.uuid);
                              }
                            }}
                          >
                            <kbd style={{ backgroundColor: "red", fontSize: "20px" }}><IoMdTrash /></kbd>
                          </Link>
                        </td>
                      </>
                    )}

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <hgroup>
          <h2>Sedang memuat data...</h2>
        </hgroup>
      )}

      <br />
    </>
  );
};

export default ListJadwalInformatika;
