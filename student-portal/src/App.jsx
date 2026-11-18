import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Exams from "./pages/Exams";
import Notifications from "./pages/Notifications";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/exams" element={<Exams />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;