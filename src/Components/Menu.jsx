import React, { useState } from 'react';
import'../styles/HamburgerMenu.scss'

const Menu = () => {
    const [isActive, setActive] = useState(false);
  
    const openHam = () => {
      const toggleClass = () => {
        setActive(!isActive);
      };
  
      toggleClass();
    };
  
    const closeMenu = () => {
      setActive(false);
    };
  
    return (
      <>
        <div
          className={`hamburger ${isActive ? "hamburger-active" : ""}`}
          onClick={openHam}
        >
          <span className="hamburger__icon"></span>
        </div>
        <div className={`header-links-container ${isActive ? "change" : ""}`}>
          <div className="header-links">
            <a href="/" onClick={closeMenu}>
              Home
            </a>
            <a href="/" onClick={closeMenu}>
              About Us
            </a>
            <a href="/" onClick={closeMenu}>
              Products
            </a>
            <a href="/" onClick={closeMenu}>
              Customization
            </a>
            <a href="/" onClick={closeMenu}>
              Contact Us 
            </a>
          </div>
        </div>
      </>
    );
  };
  
  export default Menu;