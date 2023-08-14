import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../Menu/Footer";
import Sidebar from "../Menu/Sidebar";
import Navbar from "../Menu/Navbar";

const AddJadwal = () => {
  const [dataKelas, setDataKelas] = useState([]);
  const [dataProgramStudi] = useState([
    "Teknik Industri",
    "Teknik Informatika",
    "Teknik Kimia",
    "Teknik Lingkungan",
    "Teknik Sipil",
  ]);
  const [programStudi, setProgramStudi] = useState("");
  const [kelas, setKelas] = useState("");
  const [dataJam, setDataJam] = useState([]);
  const [jam, setJam] = useState("");
  const [dataHari] = useState([
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
    "Minggu",
  ]);
  const [hari, setHari] = useState("");
  const [dataDosen, setDataDosen] = useState([]);
  const [dosen, setDosen] = useState("");
  const [dataAsisten1, setDataAsisten1] = useState([]);
  const [asisten1, setAsisten1] = useState("");
  const [dataAsisten2, setDataAsisten2] = useState([]);
  const [asisten2, setAsisten2] = useState("");
  const [dataRuang, setDataRuang] = useState([]); // Tambahkan state untuk data ruang
  const [ruang, setRuang] = useState(""); // Tambahkan state untuk ruang
  const [dataPraktikum, setDataPraktikum] = useState([]); // Tambahkan state untuk data praktikum
  const [praktikum, setPraktikum] = useState(""); // Tambahkan state untuk praktikum
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [pesan, setPesan] = useState("");
  const [msg, setMsg] = useState("");
  const baseUrl = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    fetchKelasData();
    fetchJamData();
    fetchDosenData();
    fetchAsisten1Data();
    fetchAsisten2Data();
    fetchRuangData(); // Ambil data ruang saat komponen dimuat
    fetchPraktikumData(); // Ambil data praktikum saat komponen dimuat
  }, []);

  const fetchKelasData = async () => {
    try {
      const response = await axios.get(baseUrl + "/kelas");
      setDataKelas(response.data);

      const uniqueProgramStudi = [
        ...new Set(response.data.map((kelas) => kelas.programStudi)),
      ];
      setProgramStudiList(uniqueProgramStudi);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchJamData = async () => {
    try {
      const response = await axios.get(baseUrl + "/jam");
      setDataJam(response.data);
    } catch (error) {
      console.error("Error fetching jam data:", error);
    }
  };

  const fetchDosenData = async () => {
    try {
      const response = await axios.get(baseUrl + "/dosen");
      setDataDosen(response.data);
    } catch (error) {
      console.error("Error fetching dosen data:", error);
    }
  };

  const fetchAsisten1Data = async () => {
    try {
      const response = await axios.get(baseUrl + "/asisten");
      setDataAsisten1(response.data);
    } catch (error) {
      console.error("Error fetching asisten data:", error);
    }
  };

  const fetchAsisten2Data = async () => {
    try {
      const response = await axios.get(baseUrl + "/asisten");
      setDataAsisten2(response.data);
    } catch (error) {
      console.error("Error fetching asisten data:", error);
    }
  };

  const fetchRuangData = async () => {
    try {
      const response = await axios.get(baseUrl + "/ruang");
      setDataRuang(response.data);
    } catch (error) {
      console.error("Error fetching ruang data:", error);
    }
  };

  const fetchPraktikumData = async () => {
    try {
      const response = await axios.get(baseUrl + "/praktikum");
      setDataPraktikum(response.data);
    } catch (error) {
      console.error("Error fetching praktikum data:", error);
    }
  };

  const handleProgramStudiChange = (event) => {
    setProgramStudi(event.target.value);
    setKelas("");
  };

  const handleKelasChange = (event) => {
    setKelas(event.target.value);
  };

  const handleJamChange = (event) => {
    setJam(event.target.value);
  };

  const handleHariChange = (event) => {
    setHari(event.target.value);
  };

  const handleDosenChange = (event) => {
    setDosen(event.target.value);
  };

  const handleAsistenChange = (event) => {
    setAsisten1(event.target.value);
  };

  const handleAsisten2Change = (event) => {
    setAsisten2(event.target.value);
  };

  const handleRuangChange = (event) => {
    setRuang(event.target.value);
  };

  const handlePraktikumChange = (event) => {
    setPraktikum(event.target.value);
  };

  const filteredKelas = dataKelas.filter(
    (kelasItem) => kelasItem.programStudi === programStudi
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const jadwalData = {
      programStudi,
      kelas,
      hari,
      waktu: jam,
      ruang,
      dosen,
      asisten1,
      asisten2,
      praktikum,
    };

    try {
      const response = await axios.post(baseUrl + "/jadwal", jadwalData);
      console.log("Response:", response.data);
      // Lakukan sesuatu dengan respons dari server, jika diperlukan
      alert("Data jadwal berhasil disimpan!");
      navigate("/jadwal");
    } catch (error) {
      setPesan("data tidak boleh kosong!");
      setMsg(error.response.data.msg);
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="wrapper">
        <div className="body-overlay" />
        <Sidebar />
        {/* Page Content  */}
        <div id="content">
          <Navbar />
          <div className="main-content">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="card p-3" style={{ minHeight: 485 }}>
                  <h3>Tambah jadwal praktikum</h3>
                  <form onSubmit={handleSubmit}>
                    <div>
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <label
                            class="input-group-text"
                            for="inputGroupSelect01"
                          >
                            Program Studi
                          </label>
                        </div>

                        <select
                          className="custom-select"
                          id="programStudiSelect"
                          value={programStudi}
                          onChange={handleProgramStudiChange}
                        >
                          <option value="">Pilih Program Studi</option>
                          {dataProgramStudi.map((programStudiItem) => (
                            <option
                              key={programStudiItem}
                              value={programStudiItem}
                            >
                              {programStudiItem}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <label
                            class="input-group-text"
                            for="inputGroupSelect01"
                          >
                            Kelas
                          </label>
                        </div>
                        <select
                          className="custom-select"
                          id="kelasSelect"
                          value={kelas}
                          onChange={handleKelasChange}
                          disabled={programStudi === ""}
                        >
                          <option value="">Pilih Kelas</option>
                          {filteredKelas.map((kelasItem) => (
                            <option key={kelasItem.id} value={kelasItem.kelas}>
                              {kelasItem.kelas}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <label
                            class="input-group-text"
                            for="inputGroupSelect01"
                          >
                            Jam
                          </label>
                        </div>
                        <select
                          className="custom-select"
                          id="jamSelect"
                          value={jam}
                          onChange={handleJamChange}
                        >
                          <option value="">Pilih Jam</option>
                          {dataJam.map((jamItem) => (
                            <option key={jamItem.id} value={jamItem.jam}>
                              {jamItem.jam}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <label
                            className="input-group-text"
                            htmlFor="inputGroupSelect01"
                          >
                            Tanggal
                          </label>
                        </div>
                        <input
                          type="date"
                          className="form-control"
                          id="tanggalInput"
                          value={hari}
                          onChange={handleHariChange}
                        />
                      </div>

                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <label
                            class="input-group-text"
                            for="inputGroupSelect01"
                          >
                            Dosen
                          </label>
                        </div>
                        <select
                          className="custom-select"
                          id="dosenSelect"
                          value={dosen}
                          onChange={handleDosenChange}
                        >
                          <option value="">Pilih Dosen</option>
                          {dataDosen.map((dosenItem) => (
                            <option key={dosenItem.id} value={dosenItem.dosen}>
                              {dosenItem.dosen}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <label
                            class="input-group-text"
                            for="inputGroupSelect01"
                          >
                            Asisten 1
                          </label>
                        </div>
                        <select
                          className="custom-select"
                          id="asistenSelect"
                          value={asisten1}
                          onChange={handleAsistenChange}
                        >
                          <option value="">Pilih Asisten</option>
                          {dataAsisten1.map((asistenItem) => (
                            <option
                              key={asistenItem.id}
                              value={asistenItem.asisten}
                            >
                              {asistenItem.asisten}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <label
                            class="input-group-text"
                            for="inputGroupSelect01"
                          >
                            Asisten 2
                          </label>
                        </div>
                        <select
                          className="custom-select"
                          id="asistenSelect"
                          value={asisten2}
                          onChange={handleAsisten2Change}
                        >
                          <option value="">Pilih Asisten 2</option>
                          {dataAsisten2.map((asistenItem2) => (
                            <option
                              key={asistenItem2.id}
                              value={asistenItem2.asisten}
                            >
                              {asistenItem2.asisten}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <label
                            class="input-group-text"
                            for="inputGroupSelect01"
                          >
                            Ruang
                          </label>
                        </div>
                        <select
                          className="custom-select"
                          id="ruangSelect"
                          value={ruang}
                          onChange={handleRuangChange}
                        >
                          <option value="">Pilih Ruang</option>
                          {dataRuang.map((ruangItem) => (
                            <option key={ruangItem.id} value={ruangItem.ruang}>
                              {ruangItem.ruang}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <label
                            class="input-group-text"
                            for="inputGroupSelect01"
                          >
                            Praktikum
                          </label>
                        </div>
                        <select
                          className="custom-select"
                          id="praktikumSelect"
                          value={praktikum}
                          onChange={handlePraktikumChange}
                        >
                          <option value="">Pilih Praktikum</option>
                          {dataPraktikum.map((praktikumItem) => (
                            <option
                              key={praktikumItem.id}
                              value={praktikumItem.praktikum}
                            >
                              {praktikumItem.praktikum}
                            </option>
                          ))}
                        </select>
                      </div>

                      <p>
                        {pesan} <br /> {msg}
                      </p>

                      <main>
                        <button
                          className="btn btn-secondary"
                          role={"button"}
                          type="submit"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <>
                              <div aria-busy="true">loading</div>
                            </>
                          ) : (
                            "Submit"
                          )}
                        </button>
                      </main>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddJadwal;
