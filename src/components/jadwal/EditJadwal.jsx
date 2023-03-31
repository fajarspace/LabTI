import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../Menu/Sidebar";

const EditJadwalInformatika = () => {
  const [programStudi, setProgramStudi] = useState("");
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
  const { id } = useParams();
  const [angkatan, setAngkatan] = useState(""); // state untuk menyimpan pilihan angkatan



  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const jadwalUrl = process.env.REACT_APP_JADWAL_TIF_URL;
  const urlById = `${jadwalUrl}/${id}`;

  useEffect(() => {
    getJadwalById();
  }, []);
  const updateJadwal = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios.patch(urlById, {
        programStudi,
        kelas,
        hari,
        waktu,
        ruang,
        dosen,
        asisten1,
        asisten2,
        praktikum,
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

  const getJadwalById = async () => {
    const response = await axios.get(urlById);
    setProgramStudi(response.data.programStudi);
    setKelas(response.data.kelas);
    setHari(response.data.hari);
    setWaktu(response.data.waktu);
    setRuang(response.data.ruang);
    setDosen(response.data.dosen);
    setAsisten1(response.data.asisten1);
    setAsisten2(response.data.asisten2);
    setPraktikum(response.data.praktikum);
  };

  return (
    <>
      <div className="dashboard">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content">
          <section className="container">
            <form onSubmit={updateJadwal}>
              <div className="card">
                <hgroup>
                  <h1>Tambah jadwal</h1>
                  <h2>Tambah</h2>
                </hgroup>
                {/* <div className="control">
                  <label htmlFor="angkatan">Program Studi</label>
                  <select
                    type="text"
                    defaultValue={programStudi}
                    onChange={(e) => setProgramStudi(e.target.value)}
                  >
                    <option value="">-- Pilih Program studi --</option>
                    <option value="Teknik Informatika">Teknik Informatika</option>
                    <option value="Teknik Industri">Teknik Industri</option>
                    <option value="Teknik Lingkungan">Teknik Lingkungan</option>
                  </select>
                  buatlah ketika di klik pilihan tersebut maka muncul angkatan dan kelas sesuai dengan program studi
                </div> */}
                <div className=''>
                  <div>

                    <label htmlFor="programStudi">Program Studi</label>
                    <select
                      id="programStudi"
                      name="programStudi"
                      value={programStudi}
                      onChange={(event) => {
                        setProgramStudi(event.target.value);
                        setPraktikum("");
                        setAngkatan("");
                      }}
                    >
                      <option value="">Pilih Program Studi</option>
                      <option value="Teknik Informatika">Teknik Informatika</option>
                      <option value="Teknik Industri">Teknik Industri</option>
                      <option value="Teknik Lingkungan">Teknik Lingkungan</option>
                    </select>
                  </div>

                </div>

                <div className="grid">
                  <div>


                    <div>
                      <label htmlFor="angkatan">Angkatan</label>
                      <select
                        id="angkatan"
                        name="angkatan"
                        value={angkatan}
                        onChange={(event) => {
                          setAngkatan(event.target.value);
                          setKelas("");
                        }}
                        disabled={!programStudi}
                      >
                        <option value="" disabled={!programStudi}>
                          {programStudi ? "Pilih Angkatan" : "Semua Angkatan"}
                        </option>
                        {programStudi && ["19", "20", "22"].map((item) => <option value={item}>{item}</option>)}
                      </select>

                      <label htmlFor="kelas">kelas</label>
                      <select
                        id="kelas"
                        name="kelas"
                        value={kelas}
                        onChange={(event) => setKelas(event.target.value)}
                        disabled={!angkatan}
                      >
                        <option value="" disabled={!angkatan}>
                          {angkatan && programStudi ? "Pilih Kelas" : "Semua Kelas"}
                        </option>
                        {angkatan === "19" && programStudi === "Teknik Informatika" && (
                          <>
                            <option value="TI.19.A.RPL-1">TI.19.A.RPL-1</option>
                            <option value="TI.19.A.RPL-2">TI.19.A.RPL-2</option>
                            <option value="TI.19.B.RPL-1">TI.19.B.RPL-1</option>
                            <option value="TI.19.B.RPL-2">TI.19.B.RPL-2</option>
                            <option value="TI.19.C.RPL-1">TI.19.C.RPL-1</option>
                            <option value="TI.19.C.RPL-2">TI.19.C.RPL-2</option>
                            <option value="TI.19.F.RPL-1">TI.19.F.RPL-1</option>
                            <option value="TI.19.D.RPL-1">TI.19.D.RPL-1</option>
                            <option value="TI.19.D.RPL-2">TI.19.D.RPL-2</option>
                            <option value="TI.19.D.RPL-3">TI.19.D.RPL-3</option>
                            <option value="TI.19.D.RPL-4">TI.19.D.RPL-4</option>
                            <option value="TI.19.D.Jaringan-1">TI.19.D.Jaringan-1</option>
                            <option value="TI.19.E.RPL-1">TI.19.E.RPL-1</option>
                            <option value="TI.19.E.RPL-2">TI.19.E.RPL-2</option>
                          </>
                        )}
                        {angkatan === "20" && programStudi === "Teknik Informatika" && (
                          <>
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
                          </>
                        )}
                        {angkatan === "21" && programStudi === "Teknik Informatika" && (
                          <>
                            <option value="TI.21">TI.21</option>
                            <option value="TI.21">TI.21</option>
                            <option value="TI.21">TI.21</option>
                          </>
                        )}
                        {angkatan === "22" && programStudi === "Teknik Lingkungan" && (
                          <>
                            <option value="TI.22">TI.22</option>
                            <option value="TI.22">TI.22</option>
                            <option value="TI.22">TI.22</option>
                          </>
                        )}

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
                            {programStudi === "Teknik Informatika" && (
                              <>
                                <option value="07:30 - 09:30">07:30 - 09:30</option>
                                <option value="09:30 - 11:30">09:30 - 11:30</option>
                                <option value="13:00 - 15:00">13:00 - 15:00</option>
                                <option value="15:30 - 17:30">15:30 - 17:30</option>
                                <option value="18:00 - 20:00">18:00 - 20:00</option>
                                <option value="20:00 - 22:00">20:00 - 22:00</option>
                              </>
                            )}
                            {programStudi === "Teknik Lingkungan" && (
                              <>
                                <option value="07:30 - 09:30">07:30 - 09:30</option>
                                <option value="09:30 - 11:30">09:30 - 11:30</option>
                                <option value="13:00 - 15:00">13:00 - 15:00</option>
                                <option value="15:30 - 17:30">15:30 - 17:30</option>
                                <option value="18:00 - 20:00">18:00 - 20:00</option>
                                <option value="20:00 - 22:00">20:00 - 22:00</option>
                              </>
                            )}

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

                      {programStudi === "Teknik Informatika" && (
                        <>
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
                        </>
                      )}
                      {programStudi === "Teknik Lingkungan" && (
                        <>
                          <option value="Wahyu Hadikristanto, S.Kom., M.Kom.">
                            Wahyu Hadikristanto, S.Kom., M.Kom.
                          </option>

                        </>
                      )}

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
                        Lab Rekayasa Industri, Gedung A
                      </option>
                      <option value="Lab Kimia Dasar">
                        Lab Kimia Dasar
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
                      {programStudi === "Teknik Informatika" && (
                        <>
                          <option value="Veno">Veno</option>
                          <option value="Fajar Agung">Fajar Agung</option>
                          <option value="Maulana Hasan">Maulana Hasan</option>
                          <option value="M. Romdhon">M. Romdhon</option>
                          <option value="Sultan Aditya">Sultan Aditya</option>
                        </>
                      )}

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
                      {programStudi === "Teknik Informatika" && (
                        <>
                          <option value="">-- Pilih Asisten 1 --</option>
                          <option value="Veno">Veno</option>
                          <option value="Fajar Agung">Fajar Agung</option>
                          <option value="Maulana Hasan">Maulana Hasan</option>
                          <option value="M. Romdhon">M. Romdhon</option>
                          <option value="Sultan Aditya">Sultan Aditya</option>
                        </>
                      )}
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
                      {angkatan === "19" && programStudi === "Teknik Informatika" && (
                        <>
                          <option value="Data Mining '19">Data Mining '19</option>
                        </>
                      )}
                      {angkatan === "20" && programStudi === "Teknik Informatika" && (
                        <>
                          <option value="Data Mining '20">Data Mining '20</option>
                        </>
                      )}
                      {programStudi === "Teknik Lingkungan" && (
                        <>
                          <option value="AutoCad">AutoCad</option>
                          <option value="Epanet">Epanet</option>
                          <option value="SWMM">SWMM</option>
                          <option value="Kimia Dasar">Kimia Dasar</option>
                        </>
                      )}
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
                  {isLoading ? <><div aria-busy="true"></div></> : "Update"}
                </button>
              </main>
            </form>
          </section>
        </div>
      </div>



    </>
  );
};

export default EditJadwalInformatika;
