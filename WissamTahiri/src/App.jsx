import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills.jsx";
import Up from "./components/Up";
import Footer from "./components/Footer.jsx";
import EN_Home from "./pages/EN_Home";
import EN_About from "./pages/EN_About.jsx";
import EN_Projects from "./pages/EN_Projects";
import EN_Contact from "./pages/EN_Contact";
import EN_Skills from "./pages/EN_Skills.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/en/" element={<EN_Home />} />
        <Route path="/en/about" element={<EN_About />} />
        <Route path="/en/projects" element={<EN_Projects />} />
        <Route path="/en/contact" element={<EN_Contact />} />
        <Route path="/en/skills" element={<EN_Skills />} />
      </Routes>
      <Up />
      <Footer />
    </>
  );
}

export default App;
