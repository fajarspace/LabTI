import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormTambahJadwal = () => {
  const [dosen, setDosen] = useState("");
  const [asisten1, setAsisten1] = useState("");
  const [asisten2, setAsisten2] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [waktu, setWaktu] = useState("");
  const [praktikum, setPraktikum] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveJadwal = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/jadwal", {
        dosen: dosen,
        asisten1: asisten1,
        asisten2: asisten2,
        tanggal: tanggal,
        waktu: waktu,
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
      <h2 className="subtitle">Add New Jadwal</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveJadwal}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Dosen</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={dosen}
                    onChange={(e) => setDosen(e.target.value)}
                    placeholder="Nama Dosen"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Asisten 1</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={asisten1}
                    onChange={(e) => setAsisten1(e.target.value)}
                    placeholder="asisten 1"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Asisten 2</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={asisten2}
                    onChange={(e) => setAsisten2(e.target.value)}
                    placeholder="asisten 1"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Tanggal</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={tanggal}
                    onChange={(e) => setTanggal(e.target.value)}
                    placeholder="tanggal"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Waktu</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={waktu}
                    onChange={(e) => setWaktu(e.target.value)}
                    placeholder="waktu"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Praktikum</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={praktikum}
                    onChange={(e) => setPraktikum(e.target.value)}
                    placeholder="praktikum"
                  />
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Save
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