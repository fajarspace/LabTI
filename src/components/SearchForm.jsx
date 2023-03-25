import React, { useState } from 'react';
import axios from 'axios';

function SearchForm() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/search?kelas=${searchTerm}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleInputChange} />
      <button onClick={handleSearch}>Search</button>
      {searchResults.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Kode Mata Kuliah</th>
              <th>Nama Mata Kuliah</th>
              <th>Dosen</th>
              <th>Kelas</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((result) => (
              <tr key={result.id}>
                <td>{result.kelas}</td>
                <td>{result.dosen}</td>
                <td>{result.asisten1}</td>
                <td>{result.asisten2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default SearchForm;
