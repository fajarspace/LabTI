import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
// import SearchForm from "./SearchForm";

const jadwalUrl = process.env.REACT_APP_JADWAL_URL;

const HomePage = () => {
  const [jadwal, setJadwal] = useState([]);

  useEffect(() => {
    getJadwal();
  }, []);

  const getJadwal = async () => {
    const response = await axios.get(jadwalUrl);
    setJadwal(response.data);
  };
  
  // const deleteJadwal = async (id) => {
  //   try {
  //     await axios.delete(`https://labti.up.railway.app/jadwal/${id}`);
  //     getJadwal();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
    <section>
      {/* <SearchForm/> */}
      <div className="table-container container-fluid">
        {/* <Link to={'/dashboard'}> <u> dashboard</u></Link> */}
        {/* <Link to={'/login'}> <u> login</u></Link>
        <Link to={'/test'}> <u> test</u></Link> */}
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Program Studi</th>
              <th>Kelas</th>
              <th>Hari</th>
              <th>Waktu</th>
              <th>Dosen</th>
              <th>Asisten</th>
              <th>Asisten</th>
              <th>Praktikum</th>
            </tr>
          </thead>
          <tbody>
            {jadwal.map((jadwal, index) => (
              <tr key={jadwal.id}>
                <td>{index + 1}</td>
                <td>{jadwal.programStudi}</td>
                <td>{jadwal.kelas}</td>
                <td>{jadwal.hari}</td>
                <td>{jadwal.waktu}</td>
                <td>{jadwal.dosen}</td>
                <td>{jadwal.asisten1}</td>
                <td>{jadwal.asisten2}</td>
                <td>{jadwal.praktikum}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
    </>
  );
};

export default HomePage;
