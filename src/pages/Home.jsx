import React from "react";
// import HomePage from "../components/HomePage";
import Navbar from "../components/Navbar";
// import ListJadwal from "../components/jadwal/ListJadwal";
import SearchForm from "../components/SearchForm";
// import Footer from "../components/Menu/Footer";

const Home = () => {
  return (
    <>
      <main style={{ backgroundColor: "" }}>
        <Navbar />
        <div className="container-fluid">
          <SearchForm />
          {/* <ListJadwal /> */}
          {/* <Footer /> */}
        </div>
      </main>
    </>
  );
};

export default Home;
