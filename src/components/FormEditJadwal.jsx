import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormEditJadwal = () => {
  const [dosen, setDosen] = useState("");
  const [asisten1, setAsisten1] = useState("");
  const [asisten2, setAsisten2] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [waktu, setWaktu] = useState("");
  const [praktikum, setPraktikum] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getJadwalById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/jadwal/${id}`
        );
        setDosen(response.data.dosen);
        setAsisten1(response.data.asisten1);
        setAsisten2(response.data.asisten2);
        setTanggal(response.data.tanggal);
        setWaktu(response.data.waktu);
        setPraktikum(response.data.praktikum);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getJadwalById();
  }, [id]);

  const updateJadwal = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:4000/jadwal/${id}`, {
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
      <h2 className="subtitle">Edit Jadwal</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={updateJadwal}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Dosen</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={dosen}
                    onChange={(e) => setDosen(e.target.value)}
                    placeholder="dosen"
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

export default FormEditJadwal;