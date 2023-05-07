import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Menu/Sidebar";

const jadwalUrl = process.env.REACT_APP_JADWAL_TIF_URL;
// const urlById = `${jadwalUrl}/${id}`;

const AddJadwalInformatika = () => {
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
  const [angkatan, setAngkatan] = useState(""); // state untuk menyimpan pilihan angkatan

  // Daftar kelas untuk setiap angkatan
  // const kelasByAngkatan = {
  //   "": [], // jika angkatan belum dipilih, tidak ada kelas yang ditampilkan
  //   "19": [
  //     'TI.19.A.RPL-1',
  //     'TI.19.A.RPL-2',
  //     'TI.19.B.RPL-1',
  //     'TI.19.B.RPL-2',
  //     'TI.19.C.RPL-1',
  //     'TI.19.C.RPL-2',
  //     'TI.19.F.RPL-1',
  //     'TI.19.D.RPL-1',
  //     'TI.19.D.RPL-2',
  //     'TI.19.D.RPL-3',
  //     'TI.19.D.RPL-4',
  //     'TI.19.D.Jaringan-1',
  //     'TI.19.E.RPL-1',
  //     'TI.19.E.RPL-2'
  //   ],
  //   "20": [
  //     "TI.20.A.1",
  //     "TI.20.A.2",
  //     "TI.20.A.3",
  //     "TI.20.B.1",
  //     "TI.20.B.2",
  //     "TI.20.C.1",
  //     "TI.20.D.1",
  //     "TI.20.D.2",
  //     "TI.20.D.3",
  //     "TI.20.D.4",
  //     "TI.20.E.1",
  //     "TI.20.F.1",
  //   ],
  // };

  // // Handle perubahan pilihan angkatan
  // const handleAngkatanChange = (e) => {
  //   setAngkatan(e.target.value);
  //   setKelas(""); // reset pilihan kelas saat angkatan berubah
  // };

  // // Tampilkan pilihan kelas sesuai dengan angkatan yang dipilih
  // const kelasOptions = kelasByAngkatan[angkatan].map((kelas) => (
  //   <option key={kelas} value={kelas}>
  //     {kelas}
  //   </option>
  // ));

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
        praktikum,
      });
      navigate("/jadwal");
    } catch (error) {
      if (error.response) {
        setPesan("data tidak boleh kosong!");
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
                <div className="">
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
                      <option value="Teknik Informatika">
                        Teknik Informatika
                      </option>
                      <option value="Teknik Industri">Teknik Industri</option>
                      <option value="Teknik Lingkungan">
                        Teknik Lingkungan
                      </option>
                      <option value="Teknik Sipil">Teknik Sipil</option>
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
                        {programStudi &&
                          ["19", "20", "21"].map((item) => (
                            <option value={item}>{item}</option>
                          ))}
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
                          {angkatan && programStudi
                            ? "Pilih Kelas"
                            : "Semua Kelas"}
                        </option>
                        {angkatan === "19" &&
                          programStudi === "Teknik Informatika" && (
                            <>
                              <option value="TI.19.A.RPL-1">
                                TI.19.A.RPL-1
                              </option>
                              <option value="TI.19.A.RPL-2">
                                TI.19.A.RPL-2
                              </option>
                              <option value="TI.19.B.RPL-1">
                                TI.19.B.RPL-1
                              </option>
                              <option value="TI.19.B.RPL-2">
                                TI.19.B.RPL-2
                              </option>
                              <option value="TI.19.C.RPL-1">
                                TI.19.C.RPL-1
                              </option>
                              <option value="TI.19.C.RPL-2">
                                TI.19.C.RPL-2
                              </option>
                              <option value="TI.19.F.RPL-1">
                                TI.19.F.RPL-1
                              </option>
                              <option value="TI.19.D.RPL-1">
                                TI.19.D.RPL-1
                              </option>
                              <option value="TI.19.D.RPL-2">
                                TI.19.D.RPL-2
                              </option>
                              <option value="TI.19.D.RPL-3">
                                TI.19.D.RPL-3
                              </option>
                              <option value="TI.19.D.RPL-4">
                                TI.19.D.RPL-4
                              </option>
                              <option value="TI.19.D.Jaringan-1">
                                TI.19.D.Jaringan-1
                              </option>
                              <option value="TI.19.E.RPL-1">
                                TI.19.E.RPL-1
                              </option>
                              <option value="TI.19.E.RPL-2">
                                TI.19.E.RPL-2
                              </option>
                            </>
                          )}
                        {angkatan === "20" &&
                          programStudi === "Teknik Informatika" && (
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
                        {angkatan === "21" &&
                          programStudi === "Teknik Informatika" && (
                            <>
                              <option value="TI.21">TI.21</option>
                              <option value="TI.21">TI.21</option>
                              <option value="TI.21">TI.21</option>
                            </>
                          )}
                        {angkatan === "19" &&
                          programStudi === "Teknik Lingkungan" && (
                            <>
                              <option value="TL.19.F1">TL.19.F1</option>
                              <option value="TL.19.F2">TL.19.F2</option>
                              <option value="TL.19.F3">TL.19.F3</option>
                            </>
                          )}
                        {angkatan === "20" &&
                          programStudi === "Teknik Lingkungan" && (
                            <>
                              <option value="TL.20.F1">TL.20.F1</option>
                              <option value="TL.20.F2">TL.20.F2</option>
                              <option value="TL.20.F3">TL.20.F3</option>
                            </>
                          )}
                        {angkatan === "21" &&
                          programStudi === "Teknik Lingkungan" && (
                            <>
                              <option value="TL.21.AA.1">TL.21.AA.1</option>
                              <option value="TL.21.B1">TL.21.B1</option>
                              <option value="TL.21.C1">TL.21.C1</option>
                            </>
                          )}

                        {angkatan === "19" &&
                          programStudi === "Teknik Sipil" && <></>}
                        {angkatan === "20" &&
                          programStudi === "Teknik Sipil" && (
                            <>
                              <option value="TS.20.C">TS.20.C</option>
                            </>
                          )}
                        {angkatan === "21" &&
                          programStudi === "Teknik Sipil" && (
                            <>
                              <option value="TS.21.A">TS.21.A</option>
                              <option value="TS.21.C">TS.21.C</option>
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
                                <option value="07:30 - 09:30">
                                  07:30 - 09:30
                                </option>
                                <option value="09:30 - 11:30">
                                  09:30 - 11:30
                                </option>
                                <option value="13:00 - 15:00">
                                  13:00 - 15:00
                                </option>
                                <option value="15:30 - 17:30">
                                  15:30 - 17:30
                                </option>
                                <option value="18:00 - 20:00">
                                  18:00 - 20:00
                                </option>
                                <option value="20:00 - 22:00">
                                  20:00 - 22:00
                                </option>
                              </>
                            )}
                            {programStudi === "Teknik Lingkungan" && (
                              <>
                                <option value="07:30 - 10:30">
                                  07:30 - 10:30
                                </option>
                                <option value="09:30 - 13:30">
                                  10:30 - 13:30
                                </option>
                                <option value="13:30 - 16:30">
                                  13:30 - 16:30
                                </option>
                                <option value="16:30 - 19:30">
                                  16:30 - 19:30
                                </option>
                                <option value="19:30 - 22:30">
                                  19:30 - 22:30
                                </option>
                              </>
                            )}
                            {programStudi === "Teknik Sipil" && (
                              <>
                                <option value="08.00 - 10.50">
                                  08.00 - 10.50
                                </option>
                                <option value="09.30 - 12.00">
                                  09.30 - 12.00
                                </option>
                                <option value="13:00 - 15:00">
                                  13:30 - 16:30
                                </option>
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
                          <option value="Agung Nugroho, S.Kom., M.Kom.">
                            Agung Nugroho, S.Kom., M.Kom.
                          </option>
                          <option value="Agus Riyadi, S.T., M.Sc.">
                            Agus Riyadi, S.T., M.Sc.
                          </option>
                          <option value="Dhonny Suwazan, S.Si., M.T.">
                            Dhonny Suwazan, S.Si., M.T.
                          </option>
                          <option value="Dodit Ardiatma, S.T., M.Sc.">
                            Dodit Ardiatma, S.T., M.Sc.
                          </option>
                          <option value="Dr. Gina Lova Sari, S.T., M.T.">
                            Dr. Gina Lova Sari, S.T., M.T.
                          </option>
                          <option value="Dr. Ir. Supriyanto., M.P.">
                            Dr. Ir. Supriyanto., M.P.
                          </option>
                          <option value="Erwika Dhora Jati, S.Si., M.Sc.">
                            Erwika Dhora Jati, S.Si., M.Sc.
                          </option>
                          <option value="Fetty Dwi Rahmayanti, S.P., M.Il.">
                            Fetty Dwi Rahmayanti, S.P., M.Il.
                          </option>
                          <option value="Hamzah M. Mardi Putra, S.K.M., M.M.">
                            Hamzah M. Mardi Putra, S.K.M., M.M.
                          </option>
                          <option value="Ikhsan Romli, S.Si., M.Sc.">
                            Ikhsan Romli, S.Si., M.Sc.
                          </option>
                          <option value="Ir. Aris Dwi Cahyanto, M.Si.">
                            Ir. Aris Dwi Cahyanto, M.Si.
                          </option>
                          <option value="Ir. Martin Darmasetiawan, M.M.">
                            Ir. Martin Darmasetiawan, M.M.
                          </option>
                          <option value="Nisa Nurhidayanti, S.Pd., M.T.">
                            Nisa Nurhidayanti, S.Pd., M.T.
                          </option>
                          <option value="Noviaji Joko Priono, S.K.M., M.K.K.K.">
                            Noviaji Joko Priono, S.K.M., M.K.K.K.
                          </option>
                          <option value="Nur Ilman Ilyas, S.T., M.M.">
                            Nur Ilman Ilyas, S.T., M.M.
                          </option>
                          <option value="Putri Anggun Sari, S.Pt., M.Si.">
                            Putri Anggun Sari, S.Pt., M.Si.
                          </option>
                          <option value="Tyas Ismi Trialfhianty, S.Pi., M.Sc.">
                            Tyas Ismi Trialfhianty, S.Pi., M.Sc.
                          </option>
                          <option value="Wiyanto, S.Kom., M.Kom.">
                            Wiyanto, S.Kom., M.Kom.
                          </option>
                        </>
                      )}
                      {programStudi === "Teknik Sipil" && (
                        <>
                          <option value="Herol, S.T.,M.T">
                            Herol, S.T.,M.T
                          </option>
                          <option value="ir. Alfandias Seysna Putra, S.T., M.T., IPP">
                            ir. Alfandias Seysna Putra, S.T., M.T., IPP
                          </option>
                          <option value="Isria Miharti Maherni Putri, S.ST., M.T">
                            Isria Miharti Maherni Putri, S.ST., M.T
                          </option>
                          <option value="Sutrisno Aji Prasetyo, S.Arsl., M.Ars.">
                            Sutrisno Aji Prasetyo, S.Arsl., M.Ars.
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
                      <option value="Lab Kimia Dasar">Lab Kimia Dasar</option>
                      <option value="Lab. Mekanika Tanah dan ilmu ukur tanah">
                        Lab. Mekanika Tanah dan ilmu ukur tanah
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
                      {programStudi === "Teknik Lingkungan" && (
                        <>
                          <option value="Sutrisno Aji Prasetyo, S.Arsl., M.Ars.">
                            Sutrisno Aji Prasetyo, S.Arsl., M.Ars.
                          </option>
                          <option value="Pandi Hardiansyah Sitorus, S.T.,">
                            Pandi Hardiansyah Sitorus, S.T.,
                          </option>
                          <option value="nadia ulfanisara">
                            nadia ulfanisara
                          </option>
                        </>
                      )}
                      {programStudi === "Teknik Sipil" && (
                        <>
                          <option value="laboran Universitas Mercu Buana">
                            laboran Universitas Mercu Buana
                          </option>
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
                          <option value="Veno">Veno</option>
                          <option value="Fajar Agung">Fajar Agung</option>
                          <option value="Maulana Hasan">Maulana Hasan</option>
                          <option value="M. Romdhon">M. Romdhon</option>
                          <option value="Sultan Aditya">Sultan Aditya</option>
                        </>
                      )}
                      {programStudi === "Teknik Lingkungan" && (
                        <>
                          <option value="Sutrisno Aji Prasetyo, S.Arsl., M.Ars.">
                            Sutrisno Aji Prasetyo, S.Arsl., M.Ars.
                          </option>
                          <option value="Pandi Hardiansyah Sitorus, S.T.,">
                            Pandi Hardiansyah Sitorus, S.T.,
                          </option>
                          <option value="nadia ulfanisara">
                            nadia ulfanisara
                          </option>
                        </>
                      )}
                      {programStudi === "Teknik Sipil" && (
                        <>
                          <option value="laboran Universitas Mercu Buana">
                            laboran Universitas Mercu Buana
                          </option>
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
                      {angkatan === "19" &&
                        programStudi === "Teknik Informatika" && (
                          <>
                            <option value="Data Mining '19">
                              Data Mining '19
                            </option>
                          </>
                        )}
                      {angkatan === "20" &&
                        programStudi === "Teknik Informatika" && (
                          <>
                            <option value="Data Mining '20">
                              Data Mining '20
                            </option>
                          </>
                        )}
                      {angkatan === "19" &&
                        programStudi === "Teknik Lingkungan" && (
                          <>
                            <option value="AutoCad '19">AutoCad '19</option>
                            <option value="Epanet '19">Epanet '19</option>
                            <option value="SWAMM '19">SWAMM '19</option>
                            <option value="Kimia Dasar '19">
                              Kimia Dasar '19
                            </option>
                            <option value="Kimia Lingkungan '19">
                              Kimia Lingkungan '19
                            </option>
                          </>
                        )}
                      {angkatan === "20" &&
                        programStudi === "Teknik Lingkungan" && (
                          <>
                            <option value="AutoCad '20">AutoCad '20</option>
                            <option value="Epanet '20">Epanet '20</option>
                            <option value="SWAMM '20">SWAMM '20</option>
                            <option value="Kimia Dasar '20">
                              Kimia Dasar '20
                            </option>
                            <option value="Kimia Lingkungan '20">
                              Kimia Lingkungan '20
                            </option>
                          </>
                        )}
                      {angkatan === "21" &&
                        programStudi === "Teknik Lingkungan" && (
                          <>
                            <option value="AutoCad '21">AutoCad '21</option>
                            <option value="Epanet '21">Epanet '21</option>
                            <option value="SWAMM '21">SWAMM '21</option>
                            <option value="Kimia Dasar '21">
                              Kimia Dasar '21
                            </option>
                            <option value="Kimia Lingkungan '21">
                              Kimia Lingkungan '21
                            </option>
                          </>
                        )}

                      {angkatan === "20" && programStudi === "Teknik Sipil" && (
                        <>
                          <option value="Mekanika Tanah '20">
                            Mekanika Tanah '20
                          </option>
                          <option value="Ilmu Ukur tanah '20">
                            Ilmu Ukur tanah '20
                          </option>
                          <option value="Perancangan Perkerasan Jalan '20">
                            Perancangan Perkerasan Jalan '20
                          </option>
                          <option value="Menggambar Bangunan Sipil '20">
                            Menggambar Bangunan Sipil '20
                          </option>
                          <option value="Pemograman Komputer '20">
                            Pemograman Komputer '20
                          </option>
                        </>
                      )}
                      {angkatan === "21" && programStudi === "Teknik Sipil" && (
                        <>
                          <option value="Mekanika Tanah '21">
                            Mekanika Tanah '21
                          </option>
                          <option value="Ilmu Ukur tanah '21">
                            Ilmu Ukur tanah '21
                          </option>
                          <option value="Perancangan Perkerasan Jalan '21">
                            Perancangan Perkerasan Jalan '21
                          </option>
                          <option value="Menggambar Bangunan Sipil '21">
                            Menggambar Bangunan Sipil '21
                          </option>
                          <option value="Pemograman Komputer '21">
                            Pemograman Komputer '21
                          </option>
                        </>
                      )}
                    </select>
                  </div>
                </div>
                <p>
                  {pesan} <br /> {msg}
                </p>
              </div>
              <main>
                <button
                  style={{ width: "200px" }}
                  role={"button"}
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div aria-busy="true"></div>
                    </>
                  ) : (
                    "Tambah"
                  )}
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
