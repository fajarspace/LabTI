import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Login from "./pages/Login";
import Jadwal from "./pages/Jadwal";
import AddJadwalInformatika from "./components/jadwal/AddJadwalInformatika";
import EditJadwalInformatika from "./components/jadwal/EditJadwalInformatika";
import AddUser from "./components/AddUser";
import PatchUser from "./pages/PatchUser";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<PatchUser />} />
          <Route path="/jadwal" element={<Jadwal />} />
          <Route path="/jadwal/tif/add" element={<AddJadwalInformatika />} />
          <Route path="/jadwal/tif/edit/:id" element={<EditJadwalInformatika />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;