import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import NavAdmin from "./NavAdmin";

const EditJadwal = () => {
  const [kelas, setKelas] = useState("");
  const [hari, setHari] = useState("");
  const [waktu, setWaktu] = useState("");
  const [dosen, setDosen] = useState("");
  const [asisten1, setAsisten1] = useState("");
  const [asisten2, setAsisten2] = useState("");
  const [praktikum, setPraktikum] = useState("");
  const { id } = useParams();

  const navigate = useNavigate();

  const jadwalUrl = process.env.REACT_APP_JADWAL_URL;
  const urlById = `${jadwalUrl}/${id}`;

  useEffect(() => {
    getJadwalById();
  }, []);
  const updateJadwal = async (e) => {
    
    e.preventDefault();
    try {
      await axios.patch(urlById, {
        kelas,
        hari,
        waktu,
        dosen,
        asisten1,
        asisten2,
        praktikum
      });
      navigate("/jadwal");
    } catch (error) {
      console.log(error);
    }
  };

  const getJadwalById = async () => {
    const response = await axios.get(urlById);
    setKelas(response.data.kelas);
    setHari(response.data.hari);
    setWaktu(response.data.waktu);
    setDosen(response.data.dosen);
    setAsisten1(response.data.asisten1);
    setAsisten2(response.data.asisten2);
    setPraktikum(response.data.praktikum);
  };

  return (
    <>
    <section className="container">
    <NavAdmin/>
        <form onSubmit={updateJadwal}>
        <div className="card">
          <hgroup>
            <h1>Update jadwal</h1>
            <h2>update</h2>
          </hgroup>
        <div className="field">
            <label className="label">Kelas</label>
            <select value={kelas} onChange={(e) => setKelas(e.target.value)}>
              <option value="">Pilih Kelas</option>
              <option value="TI.20.A.1">TI.20.A.1</option>
              <option value="TI.20.A.2">TI.20.A.2</option>
              <option value="TI.20.A.3">TI.20.A.3</option>
              <option value="TI.20.B.1">TI.20.B.1</option>
              <option value="TI.20.B.2">TI.20.B.2</option>
              <option value="TI.20.C.1">TI.20.C.1</option>
              <option value="TI.20.D.1">TI.20.D.1</option>
              <option value="TI.20.D.2">TI.20.D.2</option>
              <option value="TI.20.D.3">TI.20.D.3</option>
              <option value="TI.20.D.4">TI.20.D.4</option>
              <option value="TI.20.E.1">TI.20.E.1</option>
              <option value="TI.20.F.1">TI.20.F.1</option>
            </select>
          </div>
          <div className="field">
            <label className="label">Hari</label>
            <div className="control">
            <select value={hari} onChange={(e) => setHari(e.target.value)}>
            <option value="">Pilih Hari</option>
              <option value="Senin">Senin</option>
              <option value="Selasa">Selasa</option>
              <option value="Rabu">Rabu</option>
              <option value="Kamis">Kamis</option>
              <option value="Jumat">Jumat</option>
              <option value="Sabtu">Sabtu</option>
              <option value="Minggu">Minggu</option>

            </select>
            </div>
          </div>
          <div className="field">
            <label className="label">Waktu</label>
            <div className="control">
              <div className="select is-fullwidth">
              <select value={waktu} onChange={(e) => setWaktu(e.target.value)}>
              <option value="">Pilih Waktu</option>
                <option value="07:30 - 09:30">07:30 - 09:30</option>
                <option value="09:30 - 11:30">09:30 - 11:30</option>
                <option value="13:00 - 15:00">13:00 - 15:00</option>
                <option value="15:30 - 17:30">15:30 - 17:30</option>
                <option value="18:00 - 20:00">18:00 - 20:00</option>
                <option value="20:00 - 22:00">20:00 - 22:00</option>

              </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">Dosen</label>
            <div className="control">
            <select value={dosen} onChange={(e) => setDosen(e.target.value)}>
              <option value="">Pilih dosen</option>
              <option value="Wahyu Hadikristanto, S.Kom., M.Kom.">Wahyu Hadikristanto, S.Kom., M.Kom.</option>
              <option value="Muhammad Fatchan, S.Kom., M.Kom.">Muhammad Fatchan, S.Kom., M.Kom.</option>
              <option value="Suherman, S.Kom., M.Kom.">Suherman, S.Kom., M.Kom.</option>
              <option value="Eko Budiarto, S.Kom., M.Kom.">Eko Budiarto, S.Kom., M.Kom.</option>
              <option value="Agung Nugroho, S.Kom., M.Kom.">Agung Nugroho, S.Kom., M.Kom.</option>
              <option value="M. Najamuddin Dwi Miharja, S.Kom., M.Kom.">M. Najamuddin Dwi Miharja, S.Kom., M.Kom.</option>
              <option value="Donny Maulana, S.Kom., M.M.Si.">Donny Maulana, S.Kom., M.M.Si.</option>
              <option value="Aswan S. Sunge, S.E., M.Kom.">Aswan S. Sunge, S.E., M.Kom.</option>
              <option value="DR Ananato., ST., M.Sc.">DR Ananato., ST., M.Sc.</option>

            </select>
            </div>
          </div>
          <div className="field">
            <label className="label">Asisten Lab</label>
            <div className="control">
            <select value={asisten1} onChange={(e) => setAsisten1(e.target.value)}>
            <option value="">Pilih Asisten 1</option>
              <option value="Veno">Veno</option>
              <option value="Fajar Agung">Fajar Agung</option>
              <option value="Maulana Hasan">Maulana Hasan</option>
              <option value="M. Romdhon">M. Romdhon</option>
              <option value="Sultan Aditya">Sultan Aditya</option>

            </select>
            </div>
          </div>
          <div className="field">
            <label className="label">Asisten Lab</label>
            <div className="control">
            <select value={asisten2} onChange={(e) => setAsisten2(e.target.value)}>
            <option value="">Pilih Asisten 2</option>
              <option value="Veno">Veno</option>
              <option value="Fajar Agung">Fajar Agung</option>
              <option value="Maulana Hasan">Maulana Hasan</option>
              <option value="M. Romdhon">M. Romdhon</option>
              <option value="Sultan Aditya">Sultan Aditya</option>

            </select>
            </div>
          </div>
          <div className="field">
            <label className="label">Praktikum</label>
            <div className="control">
            <select value={praktikum} onChange={(e) => setPraktikum(e.target.value)}>
            <option value="">Pilih Praktikum</option>
              <option value="Bahasa Pemrograman">Bahasa Pemrograman</option>
              <option value="Data Mining">Data Mining</option>
            </select>
            </div>
          </div>
          </div>
          <main>
            <button style={{width:"200px"}} role={'button'} type="submit">
              Update
            </button>
          </main>
        </form>
    </section>
    </>
  );
};

export default EditJadwal;
