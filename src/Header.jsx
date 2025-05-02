import {useState} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import logo from '/src/404logo.png';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };


function Header(){
    return (
        <div className="header-container">
            <div className="header-top">
                <div className="logo-text">
                  <img src={logo} className="logo" alt="Logo" />
                    404 Del Sol
                </div>
                <span id="menu-toggle" className="menu-btn"> ☰ MENU</span>
                <nav id="navigation" className="nav-buttons">
                    <Link to="/"><button className="nav-btn">Home</button></Link>
                    <Link to="/about"><button className="nav-btn">About</button></Link>
                    <Link to="/archive/show-1"><button className="nav-btn">Archives</button></Link>
                    <Link to="/contact"><button className="nav-btn">Contact</button></Link>
                </nav>
            </div>
            <div id="main-menu" className="hidden">
                  <nav className="collapsable-btns">
                      <Link to="/"><button className="nav-btn">Home</button></Link>
                      <Link to="/about"><button className="nav-btn">About</button></Link>
                      <Link to="/archive/show-1"><button className="nav-btn">Archives</button></Link>
                      <Link to="/contact"><button className="nav-btn">Contact</button></Link>
                  </nav>
            </div>
        </div>
    );
}

export default Header
