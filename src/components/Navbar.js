import React, { useState } from "react";
import "./Navbar.css";
import { Menu, X } from "lucide-react"; // You can replace with your own icons

const Navbar = ({ logo, links, sectionIds }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo on the left */}
        <div className="logo">{logo}</div>

        {/* Navigation links on the right */}
        <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
          {links.map((link) => (
            <li key={link} onClick={handleLinkClick}>
              <a href={`#${sectionIds[link] || link.toLowerCase().replace(/\s+/g, "-")}`}>{link}</a>
            </li>
          ))}
        </ul>

        {/* Hamburger menu for very small screens only */}
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
