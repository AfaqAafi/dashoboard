import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import SetPassEmail from "./pages/auth/SetPassEmail";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import NotFound from "./pages/NotFound";

const App = () => {
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("formData"))?.email;

  useEffect(() => {
    if (!token) {
      navigate("/register");
    } else if (token) {
      navigate('/')
    }
  }, [navigate, token]);


  return (
    <>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/setpass" element={<SetPassEmail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
