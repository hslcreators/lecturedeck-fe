import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar";
import Explore from "./pages/Explore";
import Features from "./pages/Features";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Pricing from "./pages/Pricing";
import Resources from "./pages/Resources";
import Signup from "./pages/Signup";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/features" element={<Features />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
