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

const ListPraktikum = () => {
  const { user } = useSelector((state) => state.auth);
  const [praktikum, setPraktikum] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Tambahkan state isLoading untuk indikator loading

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 7;

  // Hitung total halaman
  const pageCount = Math.ceil(praktikum.length / itemsPerPage);

  // Render data praktikum sesuai halaman yang aktif
  const offset = currentPage * itemsPerPage;
  const currentPraktikum = praktikum.slice(offset, offset + itemsPerPage);

  // Callback untuk mengubah halaman aktif
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  useEffect(() => {
    getPraktikum();
  }, []);

  const getPraktikum = async () => {
    try {
      const response = await axios.get(baseUrl + "/praktikum");
      setPraktikum(response.data);
      setIsLoading(false); // Set isLoading menjadi false ketika data sudah diambil
    } catch (error) {
      console.log(error);
      setIsLoading(false); // Set isLoading menjadi false bahkan jika terjadi error
    }
  };

  const deletePraktikum = async (id) => {
    const urlById = `${baseUrl}/praktikum/${id}`;
    try {
      await axios.delete(urlById);
      getPraktikum();
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
                    <h3 className="card-title">Praktikum</h3>

                    <a href="/praktikum/add" className="btn btn-secondary">
                      Tambah
                    </a>
                  </div>
                  <div className="card-content table-responsive">
                    {isLoading ? ( // Periksa apakah isLoading bernilai true
                      <hgroup>
                        <p>Memuat data</p>
                        <progress></progress>
                      </hgroup>
                    ) : praktikum.length > 0 ? (
                      <>
                        <table id="myTable" className="table table-hover">
                          <thead className="text-primary">
                            <tr>
                              <th scope="col">No</th>
                              <th>Praktikum</th>

                              {user && user.role === "admin" && (
                                <>
                                  <th>Dibuat oleh</th>
                                  <th>Aksi</th>
                                </>
                              )}
                            </tr>
                          </thead>
                          <tbody>
                            {currentPraktikum.map((praktikum, index) => (
                              <tr key={praktikum.uuid}>
                                <td>{index + 1}</td>
                                <td>{praktikum.praktikum}</td>

                                {user && user.role === "admin" && (
                                  <>
                                    <td>{praktikum.user.nama}</td>
                                    <td>
                                      <Link
                                        to={`/praktikum/edit/${praktikum.uuid}`}
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
                                              "Apakah Anda yakin ingin menghapus praktikum ini?"
                                            )
                                          ) {
                                            window.alert(
                                              "Hapus praktikum berhasil!"
                                            );
                                            deletePraktikum(praktikum.uuid);
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
                        <p>Tidak ada data praktikum</p>
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

export default ListPraktikum;
