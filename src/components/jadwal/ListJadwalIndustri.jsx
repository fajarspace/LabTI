import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BiAddToQueue } from 'react-icons/bi';
import { IoMdTrash } from "react-icons/io";
import { FiEdit } from "react-icons/fi";

const jadwalUrl = process.env.REACT_APP_JADWAL_TIN_URL;

const ListJadwalIndustri = () => {
  const [jadwalindustri, setJadwal] = useState([]);

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
          <h1>Jadwal Industri</h1>
          <h2>Admin dapat menambahkan, mengedit dan menghapus jadwal</h2>
        </hgroup>
        <Link role={'button'} className="outline" to={`/jadwal/tin/add`}>
          <BiAddToQueue/>
        </Link>
      <div className="table-container">
        <table role={'grid'}>
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
              <th>Created By</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {jadwalindustri.map((jadwalindustri, index) => (
              <tr key={jadwalindustri.uuid}>
                <td>{index + 1}</td>
                <td>{jadwalindustri.programStudi}</td>
                <td>{jadwalindustri.kelas}</td>
                <td>{jadwalindustri.hari}</td>
                <td>{jadwalindustri.waktu}</td>
                <td>{jadwalindustri.ruang}</td>
                <td>{jadwalindustri.dosen}</td>
                <td>{jadwalindustri.asisten1}</td>
                <td>{jadwalindustri.asisten2}</td>
                <td>{jadwalindustri.praktikum}</td>
                <td>{jadwalindustri.user.nama}</td>
                <td>
                  <Link
                    to={`/jadwal/tin/edit/${jadwalindustri.uuid}`}
                    className="button is-small is-info mr-2"
                  >
                    <kbd style={{"backgroundColor":'yellow', "color":"black", fontSize:"20px"}}><FiEdit/></kbd>
                  </Link> &nbsp;
             
                  <Link
                    onClick={() => {
                      if (window.confirm("Apakah Anda yakin ingin menghapus jadwal ini?")) {
                        window.alert('Hapus jadwal berhasil!')
                        deleteJadwal(jadwalindustri.uuid);
                      }
                    }}
                  >
                    <kbd style={{ backgroundColor: "red", fontSize:"20px" }}><IoMdTrash/></kbd>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </>
  );
};

export default ListJadwalIndustri;
