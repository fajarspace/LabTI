import React, { useState, useEffect } from "react";
import axios from "axios";

const Add = () => {
  const [dataKelas, setDataKelas] = useState([]);
  const [programStudiList, setProgramStudiList] = useState([]);
  const [programStudi, setProgramStudi] = useState("");
  const [angkatan, setAngkatan] = useState("");
  const [kelas, setKelas] = useState("");
  const [dataJam, setDataJam] = useState([]);
  const [jam, setJam] = useState("");
  const [dataHari] = useState(["Senin", "Selasa", "Rabu", "Kamis", "Jumat"]);
  const [hari, setHari] = useState("");
  const [dataDosen, setDataDosen] = useState([]);
  const [dosen, setDosen] = useState("");
  const [dataAsisten, setDataAsisten] = useState([]);
  const [asisten, setAsisten] = useState("");
  const [dataAsistenSec, setDataAsistenSec] = useState([]);
  const [asistenSec, setAsistenSec] = useState("");
  const [dataRuang, setDataRuang] = useState([]); // Tambahkan state untuk data ruang
  const [ruang, setRuang] = useState(""); // Tambahkan state untuk ruang
  const [dataPraktikum, setDataPraktikum] = useState([]); // Tambahkan state untuk data praktikum
  const [praktikum, setPraktikum] = useState(""); // Tambahkan state untuk praktikum

  useEffect(() => {
    fetchData();
    fetchJamData();
    fetchDosenData();
    fetchAsistenData();
    fetchAsistenSecData();
    fetchRuangData(); // Ambil data ruang saat komponen dimuat
    fetchPraktikumData(); // Ambil data praktikum saat komponen dimuat
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/kelas");
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
      const response = await axios.get("http://localhost:4000/jam");
      setDataJam(response.data);
    } catch (error) {
      console.error("Error fetching jam data:", error);
    }
  };

  const fetchDosenData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/dosen");
      setDataDosen(response.data);
    } catch (error) {
      console.error("Error fetching dosen data:", error);
    }
  };

  const fetchAsistenData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/asisten");
      setDataAsisten(response.data);
    } catch (error) {
      console.error("Error fetching asisten data:", error);
    }
  };

  const fetchAsistenSecData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/asisten");
      setDataAsistenSec(response.data);
    } catch (error) {
      console.error("Error fetching asisten data:", error);
    }
  };

  const fetchRuangData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/ruang");
      setDataRuang(response.data);
    } catch (error) {
      console.error("Error fetching ruang data:", error);
    }
  };

  const fetchPraktikumData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/praktikum");
      setDataPraktikum(response.data);
    } catch (error) {
      console.error("Error fetching praktikum data:", error);
    }
  };

  const handleProgramStudiChange = (event) => {
    setProgramStudi(event.target.value);
    setAngkatan("");
    setKelas("");
  };

  const handleAngkatanChange = (event) => {
    setAngkatan(event.target.value);
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
    setAsisten(event.target.value);
  };

  const handleAsistenSecChange = (event) => {
    setAsistenSec(event.target.value);
  };

  const handleRuangChange = (event) => {
    setRuang(event.target.value);
  };

  const handlePraktikumChange = (event) => {
    setPraktikum(event.target.value);
  };

  const filteredAngkatan = dataKelas
    .filter((kelasItem) => kelasItem.programStudi === programStudi)
    .map((kelasItem) => kelasItem.angkatan);

  const filteredKelas = dataKelas.filter(
    (kelasItem) =>
      kelasItem.programStudi === programStudi && kelasItem.angkatan === angkatan
  );

  const handleSubmit = async (event) => {
    event.preventDefault();

    const jadwalData = {
      programStudi,
      kelas,
      hari,
      waktu: jam,
      ruang,
      dosen,
      asisten1: asisten,
      asisten2: asisten,
      praktikum,
    };

    try {
      const response = await axios.post(
        "http://localhost:4000/jadwal",
        jadwalData
      );
      console.log("Response:", response.data);
      // Lakukan sesuatu dengan respons dari server, jika diperlukan
      alert("Data jadwal berhasil disimpan!");
    } catch (error) {
      console.error("Error posting data:", error);
      alert("Terjadi kesalahan saat menyimpan data jadwal.");
    }
  };

  return (
    <div>
      <h1>Daftar Kelas</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="programStudiSelect">Pilih Program Studi:</label>
        <select
          id="programStudiSelect"
          value={programStudi}
          onChange={handleProgramStudiChange}
        >
          <option value="">Pilih Program Studi</option>
          {programStudiList.map((programStudiItem) => (
            <option key={programStudiItem} value={programStudiItem}>
              {programStudiItem}
            </option>
          ))}
        </select>

        <label htmlFor="angkatanSelect">Pilih Angkatan:</label>
        <select
          id="angkatanSelect"
          value={angkatan}
          onChange={handleAngkatanChange}
          disabled={programStudi === ""}
        >
          <option value="">Pilih Angkatan</option>
          {filteredAngkatan.map((angkatanItem) => (
            <option key={angkatanItem} value={angkatanItem}>
              {angkatanItem}
            </option>
          ))}
        </select>

        <label htmlFor="kelasSelect">Pilih Kelas:</label>
        <select
          id="kelasSelect"
          value={kelas}
          onChange={handleKelasChange}
          disabled={programStudi === "" || angkatan === ""}
        >
          <option value="">Pilih Kelas</option>
          {filteredKelas.map((kelasItem) => (
            <option key={kelasItem.id} value={kelasItem.kelas}>
              {kelasItem.kelas}
            </option>
          ))}
        </select>

        <label htmlFor="jamSelect">Pilih Jam:</label>
        <select id="jamSelect" value={jam} onChange={handleJamChange}>
          <option value="">Pilih Jam</option>
          {dataJam.map((jamItem) => (
            <option key={jamItem.id} value={jamItem.jam}>
              {jamItem.jam}
            </option>
          ))}
        </select>

        <label htmlFor="hariSelect">Pilih Hari:</label>
        <select id="hariSelect" value={hari} onChange={handleHariChange}>
          <option value="">Pilih Hari</option>
          {dataHari.map((hariItem) => (
            <option key={hariItem} value={hariItem}>
              {hariItem}
            </option>
          ))}
        </select>

        <label htmlFor="dosenSelect">Pilih Dosen:</label>
        <select id="dosenSelect" value={dosen} onChange={handleDosenChange}>
          <option value="">Pilih Dosen</option>
          {dataDosen.map((dosenItem) => (
            <option key={dosenItem.id} value={dosenItem.dosen}>
              {dosenItem.dosen}
            </option>
          ))}
        </select>

        <label htmlFor="asistenSelect">Pilih Asisten:</label>
        <select
          id="asistenSelect"
          value={asisten}
          onChange={handleAsistenChange}
        >
          <option value="">Pilih Asisten</option>
          {dataAsisten.map((asistenItem) => (
            <option key={asistenItem.id} value={asistenItem.asisten}>
              {asistenItem.asisten}
            </option>
          ))}
        </select>

        <label htmlFor="asistenSelect">Pilih Asisten 2:</label>
        <select
          id="asistenSelect"
          value={asistenSec}
          onChange={handleAsistenSecChange}
        >
          <option value="">Pilih Asisten 2</option>
          {dataAsistenSec.map((asistenItem2) => (
            <option key={asistenItem2.id} value={asistenItem2.asisten}>
              {asistenItem2.asisten}
            </option>
          ))}
        </select>

        <label htmlFor="ruangSelect">Pilih Ruang:</label>
        <select id="ruangSelect" value={ruang} onChange={handleRuangChange}>
          <option value="">Pilih Ruang</option>
          {dataRuang.map((ruangItem) => (
            <option key={ruangItem.id} value={ruangItem.ruang}>
              {ruangItem.ruang}
            </option>
          ))}
        </select>

        <label htmlFor="praktikumSelect">Pilih Praktikum:</label>
        <select
          id="praktikumSelect"
          value={praktikum}
          onChange={handlePraktikumChange}
        >
          <option value="">Pilih Praktikum</option>
          {dataPraktikum.map((praktikumItem) => (
            <option key={praktikumItem.id} value={praktikumItem.praktikum}>
              {praktikumItem.praktikum}
            </option>
          ))}
        </select>
        <button type="submit">Simpan</button>
      </form>
    </div>
  );
};

export default Add;
