import { BrowserRouter, Routes, Route } from "react-router-dom"
import Features from "./pages/Features";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePassword from "./pages/UpdatePassword";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/password-reset" element={<ForgotPassword/>}/>
        <Route path='/password-reset/:userId/:token' element={<UpdatePassword/>}/>
      </Routes>
      <Toaster
      position="top-right"
      reverseOrder={false}
      />
    </BrowserRouter>
  );
}
