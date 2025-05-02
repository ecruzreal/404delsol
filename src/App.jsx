import { useEffect, useState } from 'react'
import './App.css'
import Header from './Header'
import Body from './Body';
import Footer from './Footer';
import BodyAbout from './BodyAbout'
import Archive from './Archive'
import Contact from './Contact';
import Apply from './Apply';
import ScrollToTop from './ScrollToTop';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'

function App() {

  useEffect(() => {
    const toggleBtn = document.getElementById("menu-toggle");
    const menu = document.getElementById("main-menu");

    if (toggleBtn && menu) {
      const toggle = () => menu.classList.toggle("open");
      toggleBtn.addEventListener("click", toggle);
      return () => toggleBtn.removeEventListener("click", toggle);
    }
  }, []);

  return (
    <div className='app-container'>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path='/' element={<Body />} />
          <Route path='/about' element={<BodyAbout />} />
          <Route path='/archive/:archiveID' element={<Archive />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/apply' element={<Apply />}></Route>
        </Routes>
        <Footer />
    </div>
  )
};

export default App
