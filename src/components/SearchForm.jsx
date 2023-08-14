import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./Footer";

const JadwalSearch = () => {
  const [dataKelas, setDataKelas] = useState([]);
  const [programStudi, setProgramStudi] = useState("");
  const [dataProgramStudi] = useState([
    "Teknik Industri",
    "Teknik Informatika",
    "Teknik Kimia",
    "Teknik Lingkungan",
    "Teknik Sipil",
  ]);
  const [kelas, setKelas] = useState("");
  const [dosenName, setDosenName] = useState(""); // New state for dosen search
  const [dosenSearchResults, setDosenSearchResults] = useState([]); // State to store dosen search results
  const [searchResults, setSearchResults] = useState([]);
  const [showKelasWarning, setShowKelasWarning] = useState(false); // State untuk menampilkan pesan warning
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getKelas();
  }, []);

  const getKelas = async () => {
    try {
      const response = await axios.get(baseUrl + "/kelas");
      setDataKelas(response.data);
    } catch (error) {
      console.log(error);
      setIsLoading(false); // Set isLoading menjadi false bahkan jika terjadi error
    }
  };

  const filteredKelas = dataKelas.filter(
    (kelasItem) => kelasItem.programStudi === programStudi
  );

  const handleProgramStudiChange = (event) => {
    setProgramStudi(event.target.value);
    setKelas("");
  };

  const handleDosenNameChange = (event) => {
    setDosenName(event.target.value);
  };

  const handleKelasChange = (event) => {
    setKelas(event.target.value);
    setShowKelasWarning(false); // Set showKelasWarning menjadi false setiap kali pilihan kelas berubah
  };

  const handleSearch = async () => {
    try {
      if (!kelas) {
        setShowKelasWarning(true);
        return;
      }
      setIsLoading(true);

      const response = await axios.get(baseUrl + "/jadwal/search", {
        params: { programStudi, kelas },
      });
      const responses = await axios.get(baseUrl + "/jadwal/search/dosen", {
        params: { dosenName },
      });
      setDosenSearchResults(responses.data);
      setSearchResults(response.data); // Ensure that response.data is an array
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setSearchResults([]); // Reset searchResults to an empty array in case of an error
      setDosenSearchResults([]);
    }
  };

  const handleClear = () => {
    setSearchResults([]);
    setDosenSearchResults([]);
    setProgramStudi("");
    setKelas("");
    setDosenName("");
    setShowKelasWarning(false); // Reset showKelasWarning saat tombol "Clear" diklik
  };

  return (
    <>
      <main role="main" className="flex-shrink-0 mb-5">
        <div className="container">
          <h1 className="mt-5">Jadwal Laboratorium UPB</h1>
          <p className="lead">
            Lupa jadwal praktikum kamu? 🤔 Silahkan cek dulu!
          </p>
          <p className="mb-3">Cari kelas atau lihat semua jadwal praktikum</p>
          <div className="form-row">
            <div className="form-group col-md-6">
              <select
                className="custom-select"
                id="programStudiSelect"
                value={programStudi}
                onChange={handleProgramStudiChange}
              >
                <option value="">Pilih Program Studi</option>
                {dataProgramStudi.map((programStudiItem) => (
                  <option key={programStudiItem} value={programStudiItem}>
                    {programStudiItem}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group col-md-6">
              <select
                className={`custom-select ${
                  showKelasWarning ? "is-invalid" : ""
                }`}
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
              {showKelasWarning && (
                <div className="invalid-feedback">Kelas belum diisi!</div>
              )}
            </div>
          </div>

          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              id="dosenNameInput"
              placeholder="Dosen (Optional)"
              value={dosenName}
              onChange={handleDosenNameChange}
            />
          </div>

          <div role="main" style={{ display: "flex" }}>
            <button
              style={{ width: "100%" }}
              className="btn btn-dark"
              role={"button"}
              onClick={handleSearch}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div aria-busy="true">loading</div>
                </>
              ) : (
                "Search"
              )}
            </button>
            &emsp;
            <button
              style={{ width: "100%" }}
              className="btn btn-secondary"
              role={"button"}
              onClick={handleClear}
            >
              Clear
            </button>
          </div>
          <div className="table-responsive">
            {searchResults.length > 0 ? (
              <>
                <table className="table table-sm mt-3">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Program studi</th>
                      <th scope="col">Kelas</th>
                      <th scope="col">Tgl mulai & jam</th>
                      <th scope="col">Dosen</th>
                      <th scope="col">Asisten 1</th>
                      <th scope="col">Ruang</th>
                      <th scope="col">Praktikum</th>
                    </tr>
                  </thead>
                  <tbody>
                    {searchResults.map((result, index) => (
                      <tr key={result.uuid}>
                        <th>{index + 1}</th>
                        <th>{result.programStudi}</th>
                        <th>{result.kelas}</th>
                        <th>
                          {new Date(result.hari).toLocaleDateString("id-ID")},{" "}
                          {result.waktu}
                        </th>

                        <th>{result.dosen}</th>
                        <th>{result.asisten1}</th>
                        <th>{result.ruang}</th>
                        <th scope="row">{result.praktikum}</th>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            ) : (
              <p>Tidak ada data jadwal.</p>
            )}

            <div className="table-responsive">
              {dosenSearchResults.length > 0 && (
                <table className="table table-sm mt-3">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Program studi</th>
                      <th scope="col">Kelas</th>
                      <th scope="col">Hari/jam</th>
                      <th scope="col">Dosen</th>
                      <th scope="col">Asisten 1</th>
                      <th scope="col">Ruang</th>
                      <th scope="col">Praktikum</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dosenSearchResults.map((dosenResult, index) => (
                      <tr key={index}>
                        <th>{index + 1}</th>
                        <th>{dosenResult.programStudi}</th>
                        <th>{dosenResult.kelas}</th>
                        <th>
                          {dosenResult.hari}, {dosenResult.waktu}
                        </th>
                        <th>{dosenResult.dosen}</th>
                        <th>{dosenResult.asisten1}</th>
                        <th>{dosenResult.ruang}</th>
                        <th scope="row">{dosenResult.praktikum}</th>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>

          <a style={{ textDecoration: "underline" }} href="jadwal/all">
            Lihat seluruh jadwal
          </a>
        </div>
      </main>

      <br />
      <br />
      <Footer />
    </>
  );
};

export default JadwalSearch;
