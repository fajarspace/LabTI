import React, { useState } from "react";
import Sidebar from "./Menu/Sidebar";
import Navbar from "./Menu/Navbar";
import Footer from "./Menu/Footer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ApiDoc from "./Menu/ApiDoc";

const DashboardPage = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleAccordionClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div className="wrapper">
      <div className="body-overlay" />
      <Sidebar />
      <div id="content">
        <Navbar />
        <div className="main-content">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="card" style={{ minHeight: 485 }}>
                <div className="card-header card-header-text">
                  <h3 className="card-title">Halo, {user && user.nama}!</h3>
                </div>
                <div className="col">
                  <button
                    className={`accordion ${
                      activeIndex === 0 ? "active" : ""
                    } btn btn-secondary dropdown-toggle`}
                    onClick={() => handleAccordionClick(0)}
                  >
                    API Documentation
                  </button>
                  <div
                    className="panel"
                    style={{ display: activeIndex === 0 ? "block" : "none" }}
                  >
                    {/* <ApiDoc /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default DashboardPage;
