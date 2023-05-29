import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

function SearchForm() {
  const [programStudi, setProgramStudi] = useState("");
  const [praktikum, setPraktikum] = useState("");
  const [jadwal, setJadwal] = useState([]);
  const [angkatan, setAngkatan] = useState([]);
  const [isLoading, setIsLoading] = useState();

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  // hitung total halaman
  const pageCount = Math.ceil(jadwal.length / itemsPerPage);

  // render data blog sesuai halaman yang aktif
  const offset = currentPage * itemsPerPage;
  const currentJadwal = jadwal.slice(offset, offset + itemsPerPage);

  // callback untuk mengubah halaman aktif
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleSubmit = (event) => {
    setIsLoading(true);
    event.preventDefault();
    fetch(
      `${process.env.REACT_APP_BASE_URL}/jadwal?programStudi=${programStudi}&praktikum=${praktikum}`
    )
      .then((response) => response.json())
      .then((data) => {
        setJadwal(data);
        setIsLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const totalData = jadwal.length;

  return (
    <div className="select-wrapper">
      <form onSubmit={handleSubmit}>
        <h2 style={{ textAlign: "center" }}>
          Lupa jadwal praktikum kamu? 🤔 Silahkan cek dulu!
        </h2>
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
          <option value="Teknik Sipil">Teknik Sipil</option>
        </select>

        <select
          id="angkatan"
          name="angkatan"
          value={angkatan}
          onChange={(event) => {
            setAngkatan(event.target.value);
            setPraktikum("");
          }}
          disabled={!programStudi}
        >
          <option value="" disabled={!programStudi}>
            {programStudi ? "Pilih Angkatan" : "Pilih Angkatan"}
          </option>
          {programStudi &&
            ["19", "20", "21"].map((item) => (
              <option value={item}>{item}</option>
            ))}
        </select>

        <select
          id="praktikum"
          name="praktikum"
          value={praktikum}
          onChange={(event) => setPraktikum(event.target.value)}
          disabled={!angkatan}
        >
          <option value="" disabled={!angkatan}>
            {angkatan && programStudi ? "Pilih Praktikum" : "Pilih Praktikum"}
          </option>
          {angkatan === "19" && programStudi === "Teknik Informatika" && (
            <>
              <option value="Data Mining '19">Data Mining '19</option>
              <option value="Bahasa Pemrograman">Bahasa Pemrograman</option>
            </>
          )}
          {angkatan === "20" && programStudi === "Teknik Informatika" && (
            <>
              <option value="Data Mining '20">Data Mining '20</option>
              <option value="Bahasa Pemrograman">Bahasa Pemrograman</option>
            </>
          )}
          {angkatan === "19" && programStudi === "Teknik Lingkungan" && (
            <>
              <option value="AutoCad '19">AutoCad '19</option>
              <option value="Epanet '19">Epanet '19</option>
              <option value="SWAMM '19">SWAMM '19</option>
              <option value="Kimia Dasar '19">Kimia Dasar '19</option>
              <option value="Kimia Lingkungan '19">Kimia Lingkungan '19</option>
            </>
          )}
          {angkatan === "20" && programStudi === "Teknik Lingkungan" && (
            <>
              <option value="AutoCad '20">AutoCad '20</option>
              <option value="Epanet '20">Epanet '20</option>
              <option value="SWAMM '20">SWAMM '20</option>
              <option value="Kimia Dasar '20">Kimia Dasar '20</option>
              <option value="Kimia Lingkungan '20">Kimia Lingkungan '20</option>
            </>
          )}
          {angkatan === "21" && programStudi === "Teknik Lingkungan" && (
            <>
              <option value="AutoCad '21">AutoCad '21</option>
              <option value="Epanet '21">Epanet '21</option>
              <option value="SWAMM '21">SWAMM '21</option>
              <option value="Kimia Dasar '21">Kimia Dasar '21</option>
              <option value="Kimia Lingkungan '21">Kimia Lingkungan '21</option>
            </>
          )}
          {angkatan === "20" && programStudi === "Teknik Sipil" && (
            <>
              <option value="Mekanika Tanah '20">Mekanika Tanah '20</option>
              <option value="Ilmu Ukur tanah '20">Ilmu Ukur tanah '20</option>
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
              <option value="Mekanika Tanah '21">Mekanika Tanah '21</option>
              <option value="Ilmu Ukur tanah '21">Ilmu Ukur tanah '21</option>
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
          {angkatan === "19" && programStudi === "Teknik Industri" && (
            <>
              <option value="Data Mining '19">Data Mining '19</option>
              <option value="Bahasa Pemrograman">Bahasa Pemrograman</option>
            </>
          )}
          {angkatan === "20" && programStudi === "Teknik Industri" && (
            <>
              <option value="Data Mining '20">Data Mining '20</option>
              <option value="Bahasa Pemrograman">Bahasa Pemrograman</option>
            </>
          )}
        </select>
        <small>
          Mohon masukkan data dengan lengkap, untuk hasil yang lebih akurat!
        </small>
        <div style={{ display: "flex" }}>
          <button type="submit">
            {isLoading ? (
              <>
                <div aria-busy="true"></div>
              </>
            ) : (
              "Filter"
            )}
          </button>{" "}
          &emsp;
          <button className="red" type="reset" onClick={() => setJadwal([])}>
            Reset
          </button>
        </div>
      </form>

      {jadwal.length > 0 && (
        <>
          <hgroup>
            {isLoading ? (
              <>
                <h1>Memuat data</h1>
                <progress value="50" max="100"></progress>
              </>
            ) : (
              <p>Hasil filter:</p>
            )}
            {programStudi === "Teknik Lingkungan" && (
              <b>
                Terdapat{" "}
                {
                  jadwal.filter(
                    (item) => item.programStudi === "Teknik Lingkungan"
                  ).length
                }{" "}
                praktikum {programStudi} untuk semua angkatan {angkatan}
              </b>
            )}
            {programStudi === "Teknik Informatika" && (
              <b>
                Terdapat{" "}
                {
                  jadwal.filter(
                    (item) => item.programStudi === "Teknik Informatika"
                  ).length
                }{" "}
                praktikum {programStudi} untuk semua angkatan {angkatan}
              </b>
            )}
            {programStudi === "Teknik Sipil" && (
              <b>
                Terdapat{" "}
                {
                  jadwal.filter((item) => item.programStudi === "Teknik Sipil")
                    .length
                }{" "}
                praktikum {programStudi} untuk semua angkatan {angkatan}
              </b>
            )}
            {programStudi === "Teknik Industri" && (
              <b>
                Terdapat{" "}
                {
                  jadwal.filter(
                    (item) => item.programStudi === "Teknik Industri"
                  ).length
                }{" "}
                praktikum {programStudi} untuk semua angkatan {angkatan}
              </b>
            )}
          </hgroup>
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Program Studi</th>
                  <th>Kelas</th>
                  <th>Hari</th>
                  <th>Waktu</th>
                  <th>Ruang</th>
                  <th>Dosen</th>
                  <th>Asisten 1</th>
                  <th>Asisten 2</th>
                  <th>Praktikum</th>
                </tr>
              </thead>
              <tbody>
                {currentJadwal.length > 0 ? (
                  currentJadwal.map((jadwalItem) => (
                    <tr key={jadwalItem.uuid}>
                      <td>{jadwalItem.programStudi}</td>
                      <td>{jadwalItem.kelas}</td>
                      <td>{jadwalItem.hari}</td>
                      <td>{jadwalItem.waktu}</td>
                      <td>{jadwalItem.ruang}</td>
                      <td>{jadwalItem.dosen}</td>
                      <td>{jadwalItem.asisten1}</td>
                      <td>{jadwalItem.asisten2}</td>
                      <td>{jadwalItem.praktikum}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9">Tidak ada jadwal yang tersedia</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"pagination justify-content-center"}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}
            disabledClassName={"disabled"}
            activeClassName={"active"}
          />
        </>
      )}
    </div>
  );
}

export default SearchForm;
