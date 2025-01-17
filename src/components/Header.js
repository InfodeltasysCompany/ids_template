import React, { useRef } from "react";
import { img } from "../assets/images/Images";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import Styles from "./Header.module.css";

function Header() {
  const ref = useRef();

  // Function to toggle the menu visibility on mobile
  const showmenubar = () => {
    ref.current.classList.toggle(Styles.responsive_nav);
  };

  return (
    <header>
      <div className={Styles.logoimage}>
        <img src={img.idslogo} alt="idslogo" />
      </div>

      {/* Navigation bar */}
      <nav ref={ref}>
        <Link to="/" className={Styles.link} onClick={showmenubar}>Home</Link>
        <Link to="/Services" className={Styles.link} onClick={showmenubar}>Services</Link>
        {/* <Link to="/Projects" className={Styles.link} onClick={showmenubar}>Projects</Link> */}
        {/* <Link to="/Blog" className={Styles.link} onClick={showmenubar}>Blog</Link> */}
        <Link to="/Carreer" className={Styles.link} onClick={showmenubar}>Carrier</Link>
        {/* <Link to="/About-Company" className={Styles.link} onClick={showmenubar}>About Company</Link> */}
        <Link to="/Contact-us" className={Styles.link} onClick={showmenubar}>Contact-us</Link>
        <Link to="/Pay-fund" className={Styles.link} onClick={showmenubar}>Pay Now</Link>

        {/* Close button for mobile view */}
        <button className={`${Styles.btn1} ${Styles.closebtn}`} onClick={showmenubar}>
          <FaTimes />
        </button>
      </nav>

      {/* Hamburger button for mobile view */}
      <button className={Styles.btn1} onClick={showmenubar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Header;
