import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormTambahJadwal = () => {
  const [dosen, setDosen] = useState("");
  const [asisten1, setAsisten1] = useState("");
  const [asisten2, setAsisten2] = useState("");
  const [hari, setHari] = useState("");
  const getHari = (dateStr) => {
    const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const date = new Date(dateStr);
    return days[date.getDay()];
  };

  const handleChangeTanggal = (event) => {
    const value = event.target.value;
    setHari(value);
    console.log(getHari(value)); // tampilkan hari pada console
  };
  const [jam, setJam] = useState("");
  const [kelas, setKelas] = useState("");
  const [praktikum, setPraktikum] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveJadwal = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://easy-pear-crayfish-yoke.cyclic.app/jadwal", {
        dosen: dosen,
        asisten1: asisten1,
        asisten2: asisten2,
        hari: hari,
        jam: jam,
        kelas: kelas,
        praktikum: praktikum
      });
      navigate("/jadwal");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1 className="title">jadwal</h1>
      <h2 className="subtitle">Edit Jadwal</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveJadwal}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Dosen</label>
                <div className="control">
                  <div className="select">
                    <select value={dosen} onChange={(e) => setDosen(e.target.value)}>
                      <option value="">Pilih dosen</option>
                      <option value="Najamuddin dwi, S.Kom, M.Kom">Najamuddin dwi, S.Kom, M.Kom</option>
                      <option value="Alfiyan, S.Kom">Alfiyan, S.Kom</option>
                      <option value="Agung Nugroho, S.Kom, M.Kom">Agung Nugroho, S.Kom, M.Kom</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="field">
                <label className="label">Asisten 1</label>
                <div className="control">
                  <div className="select">
                    <select value={asisten1} onChange={(e) => setAsisten1(e.target.value)}>
                      <option value="">Pilih Asisten 1</option>
                      <option value="Veno Setyoaji">Veno Setyoaji</option>
                      <option value="Fajar Agung">Fajar Agung</option>
                      <option value="Maulana Muhammad">Maulana Muhammad</option>
                      <option value="M. Romdon">M. Romdon</option>
                      <option value="Sultan Aditya">Sultan Aditya</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="field">
                <label className="label">Asisten 2</label>
                <div className="control">
                  <div className="select">
                    <select value={asisten2} onChange={(e) => setAsisten2(e.target.value)}>
                      <option value="">Pilih Asisten 2</option>
                      <option value="Veno Setyoaji">Veno Setyoaji</option>
                      <option value="Fajar Agung">Fajar Agung</option>
                      <option value="Maulana Muhammad">Maulana Muhammad</option>
                      <option value="M. Romdon">M. Romdon</option>
                      <option value="Sultan Aditya">Sultan Aditya</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="field">
                <label className="label">Tanggal</label>
                <div className="control">
                  <input
                    type="date"
                    className="input"
                    value={hari}
                    onChange={handleChangeTanggal}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Jam</label>
                <div className="control">
                  <input
                    type="time"
                    className="input"
                    value={jam}
                    onChange={(e) => setJam(e.target.value)}
                    placeholder="jam"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Kelas</label>
                <div className="control">
                  <div className="select">
                    <select value={kelas} onChange={(e) => setKelas(e.target.value)}>
                      <option value="">Pilih Kelas</option>
                      <option value="TI.20.A.1">TI.20.A.1</option>
                      <option value="TI.20.A.3">TI.20.A.3</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="field">
                <label className="label">Praktikum</label>
                <div className="control">
                  <div className="select">
                    <select value={praktikum} onChange={(e) => setPraktikum(e.target.value)}>
                      <option value="">Pilih praktikum</option>
                      <option value="Bahasa Pemrograman">Bahasa Pemrograman</option>
                      <option value="Data Mining">Data Mining</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormTambahJadwal;