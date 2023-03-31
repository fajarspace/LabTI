import { useState, useEffect } from 'react';

function SearchForm() {
  const [programStudi, setProgramStudi] = useState('');
  const [praktikum, setPraktikum] = useState('');
  const [jadwal, setJadwal] = useState([]);
  const [angkatan, setAngkatan] = useState([]);
  const [isLoading, setIsLoading] = useState();

  // const handleSubmit = (event) => {
  //   setIsLoading(true);
  //   event.preventDefault();
  //   fetch(`http://localhost:4000/jadwal?programStudi=${programStudi}&praktikum=${praktikum}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setJadwal(data);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  // useEffect(() => {
  //   fetch(`http://localhost:4000/jadwal`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setJadwal(data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  //   // fetch()
  // },
  //   []);

  const handleSubmit = (event) => {
    setIsLoading(true);
    event.preventDefault();
    fetch(`${process.env.REACT_APP_BASE_URL}/jadwal?programStudi=${programStudi}&praktikum=${praktikum}`)
      .then((response) => response.json())
      .then((data) => {
        setJadwal(data);
        setIsLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const totalData = jadwal.length;

  return (
    <div>

      <form onSubmit={handleSubmit}>
        <div className=''>

          <div className='grid card'>
            <div className=''>
              <div>
                <hgroup>
                  <h1>Filter</h1>
                  <h2>Bingung? 🤔 Coba filter dulu!</h2>
                </hgroup>
                <label htmlFor="programStudi">Program Studi</label>
                <select
                  id="programStudi"
                  name="programStudi"
                  value={programStudi}
                  onChange={(event) => {
                    setProgramStudi(event.target.value);
                    setPraktikum("");
                    setAngkatan("");
                  }}
                >
                  <option value="">Pilih Program Studi</option>
                  <option value="Teknik Informatika">Teknik Informatika</option>
                  <option value="Teknik Industri">Teknik Industri</option>
                  <option value="Teknik Lingkungan">Teknik Lingkungan</option>
                </select>
              </div>
              <div>
                <label htmlFor="angkatan">Angkatan</label>
                <select
                  id="angkatan"
                  name="angkatan"
                  value={angkatan}
                  onChange={(event) => {
                    setAngkatan(event.target.value);
                    setPraktikum("");
                  }}
                  disabled={!programStudi}
                >
                  <option value="" disabled={!programStudi}>
                    {programStudi ? "Pilih Angkatan" : "Semua Angkatan"}
                  </option>
                  {programStudi && ["19", "20", "21"].map((item) => <option value={item}>{item}</option>)}
                </select>
              </div>


              <label htmlFor="praktikum">Praktikum</label>
              <select
                id="praktikum"
                name="praktikum"
                value={praktikum}
                onChange={(event) => setPraktikum(event.target.value)}
                disabled={!angkatan}
              >
                <option value="" disabled={!angkatan}>
                  {angkatan && programStudi ? "Pilih Praktikum" : "Semua Praktikum"}
                </option>
                {angkatan === "19" && programStudi === "Teknik Informatika" && (
                  <>
                    <option value="Data Mining '19">Data Mining '19</option>
                    <option value="Bahasa Pemrograman">Bahasa Pemrograman</option>
                  </>
                )}
                {angkatan === "20" && programStudi === "Teknik Informatika" && (
                  <>
                    <option value="Data Mining '20">Data Mining '20</option>
                    <option value="Bahasa Pemrograman">Bahasa Pemrograman</option>
                  </>
                )}
                {angkatan === "19" && programStudi === "Teknik Lingkungan" && (
                  <>
                    <option value="AutoCad '19">AutoCad '19</option>
                    <option value="Epanet '19">Epanet '19</option>
                    <option value="SWMM '19">SWAMM '19</option>
                    <option value="Kimia Dasar '19">Kimia Dasar '19</option>
                  </>
                )}
                {angkatan === "20" && programStudi === "Teknik Lingkungan" && (
                  <>
                    <option value="AutoCad '20">AutoCad '20</option>
                    <option value="Epanet '20">Epanet '20</option>
                    <option value="SWMM '20">SWAMM '20</option>
                    <option value="Kimia Dasar '20">Kimia Dasar '20</option>
                  </>
                )}
                {angkatan === "21" && programStudi === "Teknik Lingkungan" && (
                  <>
                    <option value="AutoCad '21">AutoCad '21</option>
                    <option value="Epanet '21">Epanet '21</option>
                    <option value="SWMM '21">SWAMM '21</option>
                    <option value="Kimia Dasar '21">Kimia Dasar '21</option>
                  </>
                )}
              </select>
              <small>*mohon masukkan data dengan benar, untuk hasil yang lebih akurat</small>
              <div style={{ display: "flex" }}>
                <button type="submit">
                  {isLoading ? <><div aria-busy="true"></div></> : "Filter"}
                </button> &emsp;
                <button className='red' type="reset" onClick={() => setJadwal([])}>
                  Reset
                </button>
              </div>
            </div>
            <div className='faq'>
              <div className='dark' ></div>
              <hgroup>
                <h1>FAQ</h1>
                <mark>Pertanyaan seputar praktikum</mark>
              </hgroup>
              <details>
                <summary>Apakah boleh kita mengikuti praktikum di kelas lain?</summary>
                <small>Boleh, jika pada jadwal utama praktikan berhalangan hadir</small>
              </details>
              <details>
                <summary>Pada minggu pertama saya tidak hadir, untuk minggu kedua ini saya harus mengerjakan modul mana ya?</summary>
                <small>Silahkan mengerjakan modul minggu 1 atau 2, sisanya silahkan menyusul di kelas lain</small>
              </details>

            </div>
          </div>
        </div>
      </form >

      {
        jadwal.length > 0 ? (
          <>
            {/* <hgroup>
            <h1></h1>
          </hgroup> */}
            <hgroup>
              <p>
                {isLoading ? <><p>Memuat data</p><progress></progress></> : "Hasil filter :"}
                {programStudi === "Teknik Lingkungan" && (
                  <b>Terdapat {jadwal.filter(item => item.programStudi === "Teknik Lingkungan").length} praktikum untuk program studi {programStudi} untuk angkatan {angkatan}</b>
                )}
                {programStudi === "Teknik Informatika" && (
                  <b>Terdapat {jadwal.filter(item => item.programStudi === "Teknik Informatika").length} praktikum untuk program studi {programStudi} untuk angkatan {angkatan}</b>
                )}
              </p>
            </hgroup>
            <div className="table-container">
              <table className="table">
                <thead>
                  <tr>
                    <th>Program Studi</th>
                    <th>Kelas</th>
                    <th>Hari</th>
                    <th>Waktu</th>
                    <th>Ruang</th>
                    <th>Dosen</th>
                    <th>Asisten 1</th>
                    <th>Asisten 2</th>
                    <th>Praktikum</th>
                  </tr>
                </thead>
                <tbody>
                  {jadwal.map((jadwalItem) => (
                    <tr key={jadwalItem.uuid}>
                      <td>{jadwalItem.programStudi}</td>
                      <td>{jadwalItem.kelas}</td>
                      <td>{jadwalItem.hari}</td>
                      <td>{jadwalItem.waktu}</td>
                      <td>{jadwalItem.ruang}</td>
                      <td>{jadwalItem.dosen}</td>
                      <td>{jadwalItem.asisten1}</td>
                      <td>{jadwalItem.asisten2}</td>
                      <td>{jadwalItem.praktikum}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <hgroup>
            <h2>Tidak ada data yang tersedia.</h2>
          </hgroup>
        )
      }


    </div >
  );
}

export default SearchForm;
