import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Carrier from "./pages/Carrier";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer";
import Admin from "./pages/Admin/Admin";
import Error from "./pages/Error";
import PayNow from "./pages/PayNow";
import Contact from "./pages/ContactUs";
import Projects from "./pages/Projects"
import Blog from "./pages/Blog";
import Message from "./pages/Message";

function App() {
  return (
    <Router>
      <Header />
      <Message/>
      <Routes>
        <Route path="/ids_template" element={<Home />} />
        <Route path="/About-Company" element={<AboutUs />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Carreer" element={<Carrier />} /> {/* Corrected path */}
        <Route path="/Pay-Fund" element={<PayNow />} />
        <Route path="/Contact-us" element={<Contact />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Projects" element={<Projects />} />

        <Route path="/_admin_" element={<Admin />} />
        <Route path="*" element={<Error />} /> {/* Catch-all for undefined routes */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
