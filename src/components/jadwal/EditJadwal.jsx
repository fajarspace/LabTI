import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../Menu/Sidebar";
import Footer from "../Menu/Footer";
import Navbar from "../Menu/Navbar";

const EditJadwal = () => {
  const [dataKelas, setDataKelas] = useState([]);
  const [programStudiList, setProgramStudiList] = useState([]);
  const [programStudi, setProgramStudi] = useState("");
  const [angkatan, setAngkatan] = useState("");
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
  const [waktu, setWaktu] = useState("");
  const [dataRuang, setDataRuang] = useState([]); // Tambahkan state untuk data ruang
  const [ruang, setRuang] = useState(""); // Tambahkan state untuk ruang
  const [dataDosen, setDataDosen] = useState([]);
  const [dosen, setDosen] = useState("");
  const [dataAsisten1, setDataAsisten1] = useState([]);
  const [asisten1, setAsisten1] = useState("");
  const [dataAsisten2, setDataAsisten2] = useState([]);
  const [asisten2, setAsisten2] = useState("");
  const [dataPraktikum, setDataPraktikum] = useState([]); // Tambahkan state untuk data praktikum
  const [praktikum, setPraktikum] = useState(""); // Tambahkan state untuk praktikum
  const [pesan, setPesan] = useState("");
  const [msg, setMsg] = useState("");
  const { id } = useParams();

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const jadwalUrl = process.env.REACT_APP_JADWAL_TIF_URL;
  const urlById = `${jadwalUrl}/${id}`;

  useEffect(() => {
    getJadwalById();
    fetchKelasData();
    fetchJamData();
    fetchDosenData();
    fetchAsisten1Data();
    fetchAsisten2Data();
    fetchRuangData(); // Ambil data ruang saat komponen dimuat
    fetchPraktikumData(); // Ambil data praktikum saat komponen dimuat
  }, []);
  const updateJadwal = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios.patch(urlById, {
        programStudi,
        angkatan,
        kelas,
        hari,
        waktu: jam,
        ruang,
        dosen,
        asisten1,
        asisten2,
        praktikum,
      });
      alert("Data jadwal berhasil di update!");
      navigate("/jadwal");
    } catch (error) {
      if (error.response) {
        setPesan("data tidak boleh kosong!");
        setMsg(error.response.data.msg);
        setIsLoading(false);
      }
    }
  };

  const getJadwalById = async () => {
    const response = await axios.get(urlById);
    setProgramStudi(response.data.programStudi);
    setAngkatan(response.data.angkatan);
    setKelas(response.data.kelas);
    setHari(response.data.hari);
    setWaktu(response.data.waktu);
    setRuang(response.data.ruang);
    setDosen(response.data.dosen);
    setAsisten1(response.data.asisten1);
    setAsisten2(response.data.asisten2);
    setPraktikum(response.data.praktikum);
  };
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

  const filteredAngkatan = dataKelas
    .filter((kelasItem) => kelasItem.programStudi === programStudi)
    .map((kelasItem) => kelasItem.angkatan);

  const filteredKelas = dataKelas.filter(
    (kelasItem) =>
      kelasItem.programStudi === programStudi && kelasItem.angkatan === angkatan
  );

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
              <div className="col-lg-8 col-md-12">
                <div className="card p-3" style={{ minHeight: 485 }}>
                  <h3>Edit jadwal praktikum</h3>
                  <form onSubmit={updateJadwal}>
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
                        onChange={(e) => setProgramStudi(e.target.value)}
                      >
                        <option value="">Pilih Program Studi</option>
                        {programStudiList.map((programStudiItem) => (
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
                          Angkatan
                        </label>
                      </div>

                      <select
                        className="custom-select"
                        id="angkatanSelect"
                        value={angkatan}
                        onChange={(e) => setAngkatan(e.target.value)}
                        disabled={programStudi === ""}
                      >
                        <option value="">Pilih Angkatan</option>
                        {filteredAngkatan.map((angkatanItem) => (
                          <option key={angkatanItem} value={angkatanItem}>
                            {angkatanItem}
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
                        onChange={(e) => setKelas(e.target.value)}
                        disabled={programStudi === "" || angkatan === ""}
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
                        value={waktu}
                        onChange={(e) => setWaktu(e.target.value)}
                      >
                        <option value="">Pilih Jam</option>
                        {dataJam.map((jamItem) => (
                          <option key={jamItem.id} value={jamItem.jam}>
                            {jamItem.jam}
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
                          Hari
                        </label>
                      </div>
                      <select
                        className="custom-select"
                        id="hariSelect"
                        value={hari}
                        onChange={(e) => setHari(e.target.value)}
                      >
                        <option value="">Pilih Hari</option>
                        {dataHari.map((hariItem) => (
                          <option key={hariItem} value={hariItem}>
                            {hariItem}
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
                          Dosen
                        </label>
                      </div>
                      <select
                        className="custom-select"
                        id="dosenSelect"
                        value={dosen}
                        onChange={(e) => setDosen(e.target.value)}
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
                        onChange={(e) => setAsisten1(e.target.value)}
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
                        onChange={(e) => setAsisten2(e.target.value)}
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
                        onChange={(e) => setRuang(e.target.value)}
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
                        onChange={(e) => setPraktikum(e.target.value)}
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
                          "Update"
                        )}
                      </button>
                    </main>
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

export default EditJadwal;
