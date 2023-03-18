import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Users from "./pages/Users";
import Jadwal from "./pages/Jadwal";
import TambahUser from "./pages/TambahUser";
import EditUser from "./pages/EditUser";
import TambahJadwal from "./pages/TambahJadwal";
import EditJadwal from "./pages/EditJadwal";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/tambah" element={<TambahUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/jadwal" element={<Jadwal />} />
          <Route path="/jadwal/tambah" element={<TambahJadwal />} />
          <Route path="/jadwal/edit/:id" element={<EditJadwal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;