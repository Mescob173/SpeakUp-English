import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Assessment from "./pages/Assessment";
import Admin from "./pages/Admin";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;