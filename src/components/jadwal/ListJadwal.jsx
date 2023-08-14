import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { BiAddToQueue } from 'react-icons/bi';
import { IoMdTrash } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import Sidebar from "../Menu/Sidebar";
import Navbar from "../Menu/Navbar";
import Footer from "../Menu/Footer";
// import SearchForm from "../SearchForm";

const jadwalUrl = process.env.REACT_APP_JADWAL_TIF_URL;

const ListJadwal = () => {
  const { user } = useSelector((state) => state.auth);
  const [jadwal, setJadwal] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Tambahkan state isLoading untuk indikator loading

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 7;

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

  const deleteJadwal = async (id) => {
    const urlById = `${jadwalUrl}/${id}`;
    try {
      await axios.delete(urlById);
      getJadwal();
    } catch (error) {
      console.log(error);
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
            <div className="row ">
              <div className="col-lg-12 col-md-12">
                <div className="card" style={{ minHeight: 485 }}>
                  <div className="card-header card-header-text">
                    <h3 className="card-title">Jadwal praktikum</h3>

                    <a href="/jadwal/add" class="btn btn-secondary">
                      Tambah
                    </a>
                  </div>
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

                              <>
                                <th>Actions</th>
                              </>
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

                                <>
                                  <td>
                                    <Link
                                      to={`/jadwal/edit/${jadwal.uuid}`}
                                      className="button is-small is-info mr-2"
                                    >
                                      <kbd
                                        style={{
                                          backgroundColor: "yellow",
                                          color: "black",
                                          fontSize: "20px",
                                        }}
                                      >
                                        <FiEdit />
                                      </kbd>
                                    </Link>{" "}
                                    &nbsp;
                                    <Link
                                      onClick={() => {
                                        if (
                                          window.confirm(
                                            "Apakah Anda yakin ingin menghapus jadwal ini?"
                                          )
                                        ) {
                                          window.alert(
                                            "Hapus jadwal berhasil!"
                                          );
                                          deleteJadwal(jadwal.uuid);
                                        }
                                      }}
                                    >
                                      <kbd
                                        style={{
                                          backgroundColor: "red",
                                          fontSize: "20px",
                                        }}
                                      >
                                        <IoMdTrash />
                                      </kbd>
                                    </Link>
                                  </td>
                                </>
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
                </div>
              </div>
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

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default ListJadwal;
