import React from 'react'
// import HomePage from "../components/HomePage";
import Navbar from "../components/Navbar";
import ListJadwalInformatika from "../components/jadwal/ListJadwalInformatika";
import SearchForm from "../components/SearchForm";

const Home = () => {
  return (
    <>
      <main>
        <Navbar />
        <div className='container-fluid'>
          <SearchForm />
          <ListJadwalInformatika />
        </div>
      </main>
    </>
  )
}

export default Home