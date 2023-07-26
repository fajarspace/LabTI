import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { IoMdTrash } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import Sidebar from "../Menu/Sidebar";
import Navbar from "../Menu/Navbar";
import Footer from "../Menu/Footer";

const baseUrl = process.env.REACT_APP_BASE_URL;

const ListDosen = () => {
  const { user } = useSelector((state) => state.auth);
  const [dosen, setDosen] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Tambahkan state isLoading untuk indikator loading

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 7;

  // Hitung total halaman
  const pageCount = Math.ceil(dosen.length / itemsPerPage);

  // Render data blog sesuai halaman yang aktif
  const offset = currentPage * itemsPerPage;
  const currentDosen = dosen.slice(offset, offset + itemsPerPage);

  // Callback untuk mengubah halaman aktif
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  useEffect(() => {
    getDosen();
  }, []);

  const getDosen = async () => {
    try {
      const response = await axios.get(baseUrl + "/dosen");
      setDosen(response.data);
      setIsLoading(false); // Set isLoading menjadi false ketika data sudah diambil
    } catch (error) {
      console.log(error);
      setIsLoading(false); // Set isLoading menjadi false bahkan jika terjadi error
    }
  };

  const deleteDosen = async (id) => {
    const urlById = `${baseUrl}/dosen/${id}`;
    try {
      await axios.delete(urlById);
      getDosen();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="wrapper">
        <div className="body-overlay" />
        <Sidebar />
        {/* Konten Halaman */}
        <div id="content">
          <Navbar />
          <div className="main-content">
            <div className="row ">
              <div className="col-lg-12 col-md-12">
                <div className="card" style={{ minHeight: 485 }}>
                  <div className="card-header card-header-text">
                    <h3 className="card-title">Dosen</h3>

                    <a href="/dosen/add" className="btn btn-secondary">
                      Tambah
                    </a>
                  </div>
                  <div className="card-content table-responsive">
                    {isLoading ? ( // Periksa apakah isLoading bernilai true
                      <hgroup>
                        <p>Memuat data</p>
                        <progress></progress>
                      </hgroup>
                    ) : dosen.length > 0 ? (
                      <>
                        <table id="myTable" className="table table-hover">
                          <thead className="text-primary">
                            <tr>
                              <th scope="col">No</th>
                              <th>Dosen</th>

                              {user && user.role === "admin" && (
                                <>
                                  <th>Dibuat oleh</th>
                                  <th>Aksi</th>
                                </>
                              )}
                            </tr>
                          </thead>
                          <tbody>
                            {currentDosen.map((dosen, index) => (
                              <tr key={dosen.uuid}>
                                <td>{index + 1}</td>
                                <td>{dosen.dosen}</td>

                                {user && user.role === "admin" && (
                                  <>
                                    <td>{dosen.user.nama}</td>
                                    <td>
                                      <Link
                                        to={`/dosen/edit/${dosen.uuid}`}
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
                                              "Apakah Anda yakin ingin menghapus dosen ini?"
                                            )
                                          ) {
                                            window.alert(
                                              "Hapus dosen berhasil!"
                                            );
                                            deleteDosen(dosen.uuid);
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
                                )}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </>
                    ) : (
                      <hgroup>
                        <p>Tidak ada data dosen</p>
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

export default ListDosen;
