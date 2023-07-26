import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Footer from "./Footer";

const AllJadwal = () => {
  const jadwalUrl = process.env.REACT_APP_JADWAL_TIF_URL;
  const [jadwal, setJadwal] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Tambahkan state isLoading untuk indikator loading

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  // hitung total halaman
  const pageCount = Math.ceil(jadwal.length / itemsPerPage);

  // render data blog sesuai halaman yang aktif
  const offset = currentPage * itemsPerPage;
  const currentJadwal = jadwal.slice(offset, offset + itemsPerPage);

  // callback untuk mengubah halaman aktif
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  useEffect(() => {
    getJadwal();
  }, []);

  const getJadwal = async () => {
    try {
      const response = await axios.get(jadwalUrl);
      setJadwal(response.data);
      setIsLoading(false); // Set isLoading menjadi false ketika data sudah diambil
    } catch (error) {
      console.log(error);
      setIsLoading(false); // Set isLoading menjadi false ketika data sudah diambil
    }
  };

  return (
    <>
      <main role="main" className="flex-shrink-0 container mt-5">
        <div className="card-content table-responsive">
          {jadwal.length > 0 ? (
            <>
              <table id="myTable" className="table table-hover">
                <thead className="text-primary">
                  <tr>
                    <th scope="col">No</th>
                    <th>Program Studi</th>
                    <th>Kelas</th>
                    <th>Hari</th>
                    <th>Waktu</th>
                    <th>Ruang</th>
                    <th>Dosen</th>
                    <th>Asisten</th>
                    <th>Asisten</th>
                    <th>Praktikum</th>
                  </tr>
                </thead>
                <tbody>
                  {currentJadwal.map((jadwal, index) => (
                    <tr key={jadwal.uuid}>
                      <td>{index + 1}</td>
                      <td>{jadwal.programStudi}</td>
                      <td>{jadwal.kelas}</td>
                      <td>{jadwal.hari}</td>
                      <td>{jadwal.waktu}</td>
                      <td>{jadwal.ruang}</td>
                      <td>{jadwal.dosen}</td>
                      <td>{jadwal.asisten1}</td>
                      <td>{jadwal.asisten2}</td>
                      <td>{jadwal.praktikum}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          ) : (
            <hgroup>
              <p>Tidak ada data jadwal</p>
            </hgroup>
          )}
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
      </main>

      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default AllJadwal;
