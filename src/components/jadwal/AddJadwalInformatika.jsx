import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Menu/Sidebar";

const jadwalUrl = process.env.REACT_APP_JADWAL_TIF_URL;
// const urlById = `${jadwalUrl}/${id}`;

const AddJadwalInformatika = () => {
  const [programStudi, setProgramStudi] = useState("Teknik Informatika");
  const [kelas, setKelas] = useState("");
  const [hari, setHari] = useState("");
  const [waktu, setWaktu] = useState("");
  const [ruang, setRuang] = useState("");
  const [dosen, setDosen] = useState("");
  const [asisten1, setAsisten1] = useState("");
  const [asisten2, setAsisten2] = useState("");
  const [praktikum, setPraktikum] = useState("");
  const [pesan, setPesan] = useState("");
  const [msg, setMsg] = useState("");
  const [angkatan, setAngkatan] = useState(""); // state untuk menyimpan pilihan angkatan

  // Daftar kelas untuk setiap angkatan
  const kelasByAngkatan = {
    "": [], // jika angkatan belum dipilih, tidak ada kelas yang ditampilkan
    "19": [
      'TI.19.A.RPL-1',
      'TI.19.A.RPL-2',
      'TI.19.B.RPL-1',
      'TI.19.B.RPL-2',
      'TI.19.C.RPL-1',
      'TI.19.C.RPL-2',
      'TI.19.F.RPL-1',
      'TI.19.D.RPL-1',
      'TI.19.D.RPL-2',
      'TI.19.D.RPL-3',
      'TI.19.D.RPL-4',
      'TI.19.D.Jaringan-1',
      'TI.19.E.RPL-1',
      'TI.19.E.RPL-2'
    ],
    "20": [
      "TI.20.A.1",
      "TI.20.A.2",
      "TI.20.A.3",
      "TI.20.B.1",
      "TI.20.B.2",
      "TI.20.C.1",
      "TI.20.D.1",
      "TI.20.D.2",
      "TI.20.D.3",
      "TI.20.D.4",
      "TI.20.E.1",
      "TI.20.F.1",
    ],
  };

  // Handle perubahan pilihan angkatan
  const handleAngkatanChange = (e) => {
    setAngkatan(e.target.value);
    setKelas(""); // reset pilihan kelas saat angkatan berubah
  };

  // Tampilkan pilihan kelas sesuai dengan angkatan yang dipilih
  const kelasOptions = kelasByAngkatan[angkatan].map((kelas) => (
    <option key={kelas} value={kelas}>
      {kelas}
    </option>
  ));

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState();
  const saveJadwal = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios.post(jadwalUrl, {
        programStudi,
        kelas,
        hari,
        waktu,
        ruang,
        dosen,
        asisten1,
        asisten2,
        praktikum
      });
      navigate("/jadwal");
    } catch (error) {
      if (error.response) {
        setPesan('data tidak boleh kosong!');
        setMsg(error.response.data.msg);
        setIsLoading(false);
      }
    }
  };


  return (
    <>
      <div className="dashboard">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content">
          <section className="container">
            <form onSubmit={saveJadwal}>
              <div className="card">
                <hgroup>
                  <h1>Tambah jadwal Informatika</h1>
                  <h2>Tambah</h2>
                </hgroup>
                <div className="field">
                  <label className="label">Program Studi</label>
                  <input
                    type="text"
                    defaultValue={programStudi}
                    onChange={(e) => setProgramStudi(e.target.value)}
                    disabled
                  />
                </div>

                <div className="grid">
                  <div>
                    <div>
                      <label htmlFor="angkatan">Angkatan</label>
                      <select
                        id="angkatan"
                        value={angkatan}
                        onChange={handleAngkatanChange}
                      >
                        <option value="">-- pilih angkatan --</option>
                        <option value="19">Angkatan 19</option>
                        <option value="20">Angkatan 20</option>
                      </select>

                      <label htmlFor="kelas">Kelas</label>
                      <select
                        id="kelas"
                        value={kelas}
                        onChange={(e) => setKelas(e.target.value)}
                      >
                        <option value="">-- pilih Kelas --</option>
                        {kelasOptions}
                      </select>
                    </div>
                  </div>
                  <div>
                    <div className="">
                      <label className="label">Hari</label>
                      <div className="control">
                        <select
                          value={hari}
                          onChange={(e) => setHari(e.target.value)}
                        >
                          <option value="">-- Pilih Hari --</option>
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
                    <div className="">
                      <label className="label">Waktu</label>
                      <div className="control">
                        <div className="select is-fullwidth">
                          <select
                            value={waktu}
                            onChange={(e) => setWaktu(e.target.value)}
                          >
                            <option value="">-- Pilih Waktu --</option>
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
                  </div>
                </div>

                <div className="field">
                  <label className="label">Dosen</label>
                  <div className="control">
                    <select
                      value={dosen}
                      onChange={(e) => setDosen(e.target.value)}
                    >
                      <option value="">-- Pilih dosen --</option>
                      <option value="Wahyu Hadikristanto, S.Kom., M.Kom.">
                        Wahyu Hadikristanto, S.Kom., M.Kom.
                      </option>
                      <option value="Muhammad Fatchan, S.Kom., M.Kom.">
                        Muhammad Fatchan, S.Kom., M.Kom.
                      </option>
                      <option value="Suherman, S.Kom., M.Kom.">
                        Suherman, S.Kom., M.Kom.
                      </option>
                      <option value="Eko Budiarto, S.Kom., M.Kom.">
                        Eko Budiarto, S.Kom., M.Kom.
                      </option>
                      <option value="Agung Nugroho, S.Kom., M.Kom.">
                        Agung Nugroho, S.Kom., M.Kom.
                      </option>
                      <option value="M. Najamuddin Dwi Miharja, S.Kom., M.Kom.">
                        M. Najamuddin Dwi Miharja, S.Kom., M.Kom.
                      </option>
                      <option value="Donny Maulana, S.Kom., M.M.Si.">
                        Donny Maulana, S.Kom., M.M.Si.
                      </option>
                      <option value="Aswan S. Sunge, S.E., M.Kom.">
                        Aswan S. Sunge, S.E., M.Kom.
                      </option>
                      <option value="DR Ananato., ST., M.Sc.">
                        DR Ananato., ST., M.Sc.
                      </option>
                    </select>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Ruang Lab</label>
                  <div className="control">
                    <select
                      value={ruang}
                      onChange={(e) => setRuang(e.target.value)}
                    >
                      <option value="">-- Pilih lab --</option>
                      <option value="Lab Komputer 1, Gedung A">
                        Lab Komputer 1, Gedung A
                      </option>
                      <option value="Lab Rekayasa Industri, Gedung A">
                        Lab Rekayasa, Gedung A
                      </option>
                    </select>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Asisten Lab</label>
                  <div className="control">
                    <select
                      value={asisten1}
                      onChange={(e) => setAsisten1(e.target.value)}
                    >
                      <option value="">-- Pilih Asisten 1 --</option>
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
                    <select
                      value={asisten2}
                      onChange={(e) => setAsisten2(e.target.value)}
                    >
                      <option value="">-- Pilih Asisten 2 --</option>
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
                    <select
                      value={praktikum}
                      onChange={(e) => setPraktikum(e.target.value)}
                    >
                      <option value="">-- Pilih Praktikum --</option>
                      <option value="Data Mining '19">Data Mining '19</option>
                      <option value="Data Mining '20">Data Mining '20</option>
                      <option value="Bahasa Pemrograman">Bahasa Pemrograman</option>
                    </select>
                  </div>
                </div>
                <p>{pesan} <br /> {msg}</p>
              </div>
              <main>
                <button
                  style={{ width: "200px" }}
                  role={"button"}
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? <><div aria-busy="true"></div></> : "Tambah"}
                </button>
              </main>
            </form>
          </section>
        </div>
      </div>
    </>
  );
};

export default AddJadwalInformatika;
