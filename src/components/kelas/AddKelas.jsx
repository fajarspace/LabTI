import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../Menu/Footer";
import Sidebar from "../Menu/Sidebar";
import Navbar from "../Menu/Navbar";

const AddKelas = () => {
  const navigate = useNavigate();
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
  const [isLoading, setIsLoading] = useState(false);
  const [pesan, setPesan] = useState("");
  const [msg, setMsg] = useState("");
  const baseUrl = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    fetchKelasData();
  }, []);

  const fetchKelasData = async () => {
    try {
      const response = await axios.get(baseUrl + "/kelas");
      setDataKelas(response.data);
    } catch (error) {
      console.error("Error fetching kelas data:", error);
    }
  };

  const handleKelasChange = (e) => {
    let value = e.target.value.toUpperCase(); // Mengubah menjadi huruf kapital semua
    value = value.replace(/\s/g, "."); // Mengganti spasi dengan titik
    setKelas(value); // Set state dengan nilai yang telah diubah
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const kelasData = {
      programStudi,
      kelas,
    };

    try {
      const response = await axios.post(baseUrl + "/kelas", kelasData);
      console.log("Response:", response.data);
      // Lakukan sesuatu dengan respons dari server, jika diperlukan
      alert("Data kelas berhasil disimpan!");
      navigate("/kelas");
    } catch (error) {
      setPesan("data tidak boleh kosong!");
      setMsg(error.response.data.msg);
      setIsLoading(false);
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
                  <h3>Tambah kelas</h3>
                  <form onSubmit={handleSubmit}>
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

                    {/* <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <div class="input-group-text">Angkatan</div>
                      </div>
                      <input
                        type="number"
                        className="form-control"
                        id="inlineFormInputGroup"
                        placeholder="contoh: 19"
                        value={angkatan}
                        onChange={(e) => setAngkatan(e.target.value)}
                      />
                    </div> */}

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

export default AddKelas;
