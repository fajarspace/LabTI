import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../Menu/Sidebar";
import Footer from "../Menu/Footer";
import Navbar from "../Menu/Navbar";

const EditKelas = () => {
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
  const [pesan, setPesan] = useState("");
  const [msg, setMsg] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const urlById = `${baseUrl}/kelas/${id}`;

  useEffect(() => {
    const getKelasById = async () => {
      try {
        const response = await axios.get(urlById);
        setProgramStudi(response.data.programStudi);
        setKelas(response.data.kelas);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getKelasById();
  }, [id]);

  const handleKelasChange = (e) => {
    let value = e.target.value.toUpperCase(); // Mengubah menjadi huruf kapital semua
    value = value.replace(/\s/g, "."); // Mengganti spasi dengan titik
    setKelas(value); // Set state dengan nilai yang telah diubah
  };

  const updateKelas = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios.patch(urlById, {
        programStudi,
        kelas,
      });
      alert("Data kelas berhasil di update!");
      navigate("/kelas");
    } catch (error) {
      if (error.response) {
        setPesan("data tidak boleh kosong!");
        setMsg(error.response.data.msg);
        setIsLoading(false);
      }
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
              <div className="col-lg-8 col-md-12">
                <div className="card p-3" style={{ minHeight: 485 }}>
                  <h3>Edit kelas praktikum</h3>
                  <form onSubmit={updateKelas}>
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
                        <div class="input-group-text">Kelas</div>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="inlineFormInputGroup"
                        placeholder="contoh: TI.20.A.3"
                        value={kelas}
                        onChange={handleKelasChange}
                      />
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

export default EditKelas;
