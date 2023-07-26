import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../Menu/Footer";
import Sidebar from "../Menu/Sidebar";
import Navbar from "../Menu/Navbar";

const AddRuang = () => {
  const navigate = useNavigate();
  const [dataRuang, setDataRuang] = useState([]);
  const [ruang, setRuang] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pesan, setPesan] = useState("");
  const [msg, setMsg] = useState("");
  const baseUrl = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    fetchRuangData();
  }, []);

  const fetchRuangData = async () => {
    try {
      const response = await axios.get(baseUrl + "/ruang");
      setDataRuang(response.data);
    } catch (error) {
      console.error("Error fetching ruang data:", error);
    }
  };

  const handleRuangChange = (event) => {
    setRuang(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const ruangData = {
      ruang,
    };

    try {
      const response = await axios.post(baseUrl + "/ruang", ruangData);
      console.log("Response:", response.data);
      // Lakukan sesuatu dengan respons dari server, jika diperlukan
      alert("Data ruang berhasil disimpan!");
      navigate("/ruang");
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
                  <h3>Tambah ruang</h3>
                  <form onSubmit={handleSubmit}>
                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <div class="input-group-text">Ruang</div>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="inlineFormInputGroup"
                        placeholder=""
                        value={ruang}
                        onChange={handleRuangChange}
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

export default AddRuang;
