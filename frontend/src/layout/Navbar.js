import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleTabClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="navbar-title">Experimental Division</span>
        <button
          className="navbar-toggle"
          aria-label="Toggle navigation"
          onClick={() => setOpen((prev) => !prev)}
        >
          &#9776;
        </button>
      </div>
      <ul className={`navbar-tabs${open ? ' navbar-tabs-open' : ''}`}>
        <li className={location.pathname === "/" ? "tab-active" : ""} onClick={() => handleTabClick("/")}>
          <span>Home</span>
        </li>
        <li className={location.pathname === "/about" ? "tab-active" : ""} onClick={() => handleTabClick("/about")}>
          <span>About</span>
        </li>
        <li className={location.pathname === "/updates" ? "tab-active" : ""} onClick={() => handleTabClick("/updates")}>
          <span>Updates</span>
        </li>
        <li className={location.pathname === "/gallery" ? "tab-active" : ""} onClick={() => handleTabClick("/gallery")}>
          <span>Gallery</span>
        </li>
        <li className={location.pathname === "/join" ? "tab-active" : ""} onClick={() => handleTabClick("/join")}>
          <span>Join</span>
        </li>
        <li className={location.pathname === "/resources" ? "tab-active" : ""} onClick={() => handleTabClick("/resources")}>
          <span>Resources</span>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;