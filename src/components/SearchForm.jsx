import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
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
  const [searchResults, setSearchResults] = useState([]);
  const [showKelasWarning, setShowKelasWarning] = useState(false); // State untuk menampilkan pesan warning
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [isLoading, setIsLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  // hitung total halaman
  const pageCount = Math.ceil(searchResults.length / itemsPerPage);

  // render data blog sesuai halaman yang aktif
  const offset = currentPage * itemsPerPage;
  const currentSearchResult = searchResults.slice(
    offset,
    offset + itemsPerPage
  );

  // callback untuk mengubah halaman aktif
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

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

  const handleKelasChange = (event) => {
    setKelas(event.target.value);
    setShowKelasWarning(false); // Set showKelasWarning menjadi false setiap kali pilihan kelas berubah
  };

  const handleSearch = async () => {
    try {
      if (!kelas) {
        setShowKelasWarning(true); // Set showKelasWarning menjadi true jika kelas belum diisi
        return; // Berhenti eksekusi jika kelas belum diisi
      }

      setIsLoading(true);
      const response = await axios.get(baseUrl + "/jadwal/search", {
        params: { kelas },
      });
      setSearchResults(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClear = () => {
    setSearchResults([]);
    setProgramStudi("");
    setKelas("");
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
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <label class="input-group-text" for="inputGroupSelect01">
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
                <option key={programStudiItem} value={programStudiItem}>
                  {programStudiItem}
                </option>
              ))}
            </select>
          </div>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <label class="input-group-text" for="inputGroupSelect01">
                Kelas
              </label>
            </div>
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
                      <th scope="col">Hari/jam</th>
                      <th scope="col">Asisten 1</th>
                      <th scope="col">Asisten 2</th>
                      <th scope="col">Ruang</th>
                      <th scope="col">Praktikum</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentSearchResult.map((result, index) => (
                      <tr key={result.uuid}>
                        <th>{index + 1}</th>
                        <th>{result.programStudi}</th>
                        <th>{result.kelas}</th>
                        <th>
                          {result.hari}, {result.waktu}
                        </th>
                        <th>{result.asisten1}</th>
                        <th>{result.asisten2}</th>
                        <th>{result.ruang}</th>
                        <th scope="row">{result.praktikum}</th>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={"pagination justify-content-center"}
                previousLinkClassName={"page-link"}
                nextLinkClassName={"page-link"}
                disabledClassName={"disabled"}
                activeClassName={"active"}
              /> */}
              </>
            ) : (
              <>
                <hgroup>
                  <p>Tidak ada data jadwal</p>
                </hgroup>
              </>
            )}
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
