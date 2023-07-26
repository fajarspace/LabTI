import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import LoginPages from "./pages/Login";
import Jadwal from "./pages/Jadwal";
import EditJadwal from "./components/jadwal/EditJadwal";
import AddUser from "./components/AddUser";
import PatchUser from "./pages/PatchUser";
import About from "./components/Menu/About";
import AddJadwal from "./components/jadwal/AddJadwal";
import AddJam from "./components/jam/AddJam";
import Jam from "./pages/Jam";
import EditJam from "./components/jam/EditJam";
import Kelas from "./pages/Kelas";
import AddKelas from "./components/kelas/AddKelas";
import EditKelas from "./components/kelas/EditKelas";
import Dosen from "./pages/Dosen";
import AddDosen from "./components/dosen/AddDosen";
import EditDosen from "./components/dosen/EditDosen";
import Asisten from "./pages/Asisten";
import AddAsisten from "./components/asisten/AddAsisten";
import EditAsisten from "./components/asisten/EditAsisten";
import Ruang from "./pages/Ruang";
import AddRuang from "./components/ruang/AddRuang";
import EditRuang from "./components/ruang/EditRuang";
import Praktikum from "./pages/Praktikum";
import AddPraktikum from "./components/praktikum/AddPraktikum";
import EditPraktikum from "./components/praktikum/EditPraktikum";
import AllJadwal from "./components/allJadwal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPages />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/add" element={<AddUser />} />
        <Route path="/users/edit/:id" element={<PatchUser />} />
        <Route path="/jadwal" element={<Jadwal />} />
        <Route path="/jadwal/add" element={<AddJadwal />} />
        <Route path="/jadwal/edit/:id" element={<EditJadwal />} />
        <Route path="/jam" element={<Jam />} />
        <Route path="/jam/add" element={<AddJam />} />
        <Route path="/jam/edit/:id" element={<EditJam />} />
        <Route path="/kelas" element={<Kelas />} />
        <Route path="/kelas/add" element={<AddKelas />} />
        <Route path="/kelas/edit/:id" element={<EditKelas />} />
        <Route path="/dosen" element={<Dosen />} />
        <Route path="/dosen/add" element={<AddDosen />} />
        <Route path="/dosen/edit/:id" element={<EditDosen />} />
        <Route path="/asisten" element={<Asisten />} />
        <Route path="/asisten/add" element={<AddAsisten />} />
        <Route path="/asisten/edit/:id" element={<EditAsisten />} />
        <Route path="/ruang" element={<Ruang />} />
        <Route path="/ruang/add" element={<AddRuang />} />
        <Route path="/ruang/edit/:id" element={<EditRuang />} />
        <Route path="/praktikum" element={<Praktikum />} />
        <Route path="/praktikum/add" element={<AddPraktikum />} />
        <Route path="/praktikum/edit/:id" element={<EditPraktikum />} />
        <Route path="/jadwal/all" element={<AllJadwal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
