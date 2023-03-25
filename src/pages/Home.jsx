import React from 'react'
// import HomePage from "../components/HomePage";
import Navbar from "../components/Navbar";
import ListJadwalInformatika from "../components/jadwal/ListJadwalInformatika";

const Home = () => {
  return (
    <>
      <main>
        <Navbar />
        <div className='container-fluid'>
        <ListJadwalInformatika />
        </div>
      </main>
    </>
  )
}

export default Home