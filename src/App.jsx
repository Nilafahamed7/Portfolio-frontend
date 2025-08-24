import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import React from "react"

function App() {


  return (
    <div>
      <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    
      </BrowserRouter>
    </div>
  )
}

export default App

function ScrollToTop(){
  const { pathname, hash } = useLocation();
  React.useEffect(() => {
    if (hash) return; // let in-page anchor control scroll
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);
  return null;
}
