import React from 'react'
// import HomePage from "../components/HomePage";
import Navbar from "../components/Navbar";
import ListJadwalInformatika from "../components/jadwal/ListJadwal";
import SearchForm from "../components/SearchForm";
// import Footer from "../components/Menu/Footer";

const Home = () => {
  return (
    <>
      <main style={{ backgroundColor: "" }}>
        <Navbar />
        <div className='container-fluid'>
          <SearchForm />
          <hr />
          <ListJadwalInformatika />
          {/* <Footer /> */}
        </div>
      </main>
    </>
  )
}

export default Home