import React, { useState } from "react";
import "./Navbar.css";
import logoWithText from "./assets/logoWithText.png";
import dropDownIcon from "./assets/DropDownIcon.png";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="navbarContainer">
      <nav className="navbar">
        <div className="navbar-logo">
          <img
            src={logoWithText}
            alt="Clifton Unhoused Initiative Logo"
            className="cliftonUnhousedInitiativeLogo"
            id="withText"
          />
          <h1 id="pageTitle">Clifton Unhoused Initiative</h1>

          <div>
            <button className="hamburger" onClick={toggleMenu}>
              <img id="dropDownIcon" src={dropDownIcon} alt="Drop Down Icon" />
            </button>
          </div>
        </div>

        <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#Home" onClick={handleLinkClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#Mission" onClick={handleLinkClick}>
              Our Mission
            </a>
          </li>
          <li>
            <a href="#Outreach" onClick={handleLinkClick}>
              Outreach
            </a>
          </li>
          <li>
            <a href="#Data" onClick={handleLinkClick}>
              Data
            </a>
          </li>
          <li>
            <a href="#Contact" onClick={handleLinkClick}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
