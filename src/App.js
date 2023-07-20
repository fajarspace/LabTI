import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import LoginPages from "./pages/Login";
import Jadwal from "./pages/Jadwal";
import AddJadwal from "./components/jadwal/AddJadwal";
import EditJadwal from "./components/jadwal/EditJadwal";
import AddUser from "./components/AddUser";
import PatchUser from "./pages/PatchUser";
import About from "./components/Menu/About";
import Add from "./components/jadwal/Add";

function App() {
  return (
    <div>
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
          <Route path="/jadwal/test" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
