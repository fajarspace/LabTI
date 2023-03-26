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

  return (
    <div>

      <form onSubmit={handleSubmit}>
        <div className='card'>
          <hgroup>
            <h1>Bingung? 🤔 Silahkan cari kelas anda!</h1>
          </hgroup>
          <div className='grid'>
            <div>
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
                <option value="">Semua Program Studi</option>
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
                  {programStudi ? "Pilih Angkatan" : "Pilih Program Studi terlebih dahulu"}
                </option>
                {programStudi && ["19", "20"].map((item) => <option value={item}>{item}</option>)}
              </select>
            </div>

            <div>
              <label htmlFor="praktikum">Praktikum</label>
              <select
                id="praktikum"
                name="praktikum"
                value={praktikum}
                onChange={(event) => setPraktikum(event.target.value)}
                disabled={!angkatan}
              >
                <option value="" disabled={!angkatan}>
                  {angkatan ? "Pilih Praktikum" : "Pilih Angkatan terlebih dahulu"}
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
              </select>
            </div>
          </div>
          <div className='flex'>
            <div style={{ paddingRight: "15px" }}>
              <button style={{ width: "100px" }} type="submit">
                {isLoading ? "Loading..." : "Cari"}
              </button>
            </div>
            <div>
              <button className='red' style={{ width: "100px" }} type="reset" onClick={() => setJadwal([])}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </form>

      {jadwal.length > 0 ? (
        <>
          <hgroup>
            <h1>Hasil pencarian :</h1>
          </hgroup>
          <div className="table-container">
            <table className="table" role={'grid'}>
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
      )}


    </div>
  );
}

export default SearchForm;
