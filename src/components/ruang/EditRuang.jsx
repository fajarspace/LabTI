import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../Menu/Sidebar";
import Footer from "../Menu/Footer";
import Navbar from "../Menu/Navbar";

const EditRuang = () => {
  const [ruang, setRuang] = useState("");
  const [pesan, setPesan] = useState("");
  const [msg, setMsg] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const urlById = `${baseUrl}/ruang/${id}`;

  useEffect(() => {
    const getRuangById = async () => {
      try {
        const response = await axios.get(urlById);
        setRuang(response.data.ruang);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getRuangById();
  }, [id]);

  const updateRuang = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios.patch(urlById, {
        ruang,
      });
      alert("Data ruang berhasil di update!");
      navigate("/ruang");
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
                  <h3>Edit ruang praktikum</h3>
                  <form onSubmit={updateRuang}>
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
                        onChange={(e) => setRuang(e.target.value)}
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
                          "Update"
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

export default EditRuang;
