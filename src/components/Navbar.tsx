import React from "react";
import Logo from "../assets/logo.png";

import "../styles/navbar.scss";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="Cosmix" />
      </div>
      <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <a href="#">About</a>
        <span>/</span>
        <a href="#">Docs</a>
        <span>/</span>
        <a href="#">Updates</a>
      </div>
      <div className="cta">
        <a href="#" className="join-btn">
          Join
        </a>
      </div>
      <button className="menu-btn" onClick={toggleMenu}>
        {isMenuOpen ? "✕" : "☰"}
      </button>
    </nav>
  );
};

export default Navbar;
