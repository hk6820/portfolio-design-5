import React, { useState } from "react";
import "./Navbar.css";
import { Menu, X } from "lucide-react"; // You can replace with your own icons

const Navbar = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
 

  <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
    {links.map((link) => (
      <li key={link} onClick={() => setIsOpen(false)}>
        <a href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}>{link}</a>
      </li>
    ))}
  </ul>

  <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
    {isOpen ? <X size={24} /> : <Menu size={24} />}
  </button>
</div>

    </nav>
  );
};

export default Navbar;
