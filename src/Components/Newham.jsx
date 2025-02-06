import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { HashLink } from 'react-router-hash-link'; // Import HashLink
import "../styles/Newham.scss"

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="hamburger-menu">
      <Menu
        isOpen={menuOpen}
        onStateChange={({ isOpen }) => setMenuOpen(isOpen)}
        width={'70%'} // Customize the menu width as needed
      >
        <HashLink to="/" onClick={closeMenu}>
          Home
        </HashLink>
        <HashLink to="/About" onClick={closeMenu}>
          About Us
        </HashLink>
        <HashLink to="/Category" onClick={closeMenu}>
          Products
        </HashLink>
        <HashLink to="/Customization" onClick={closeMenu}>
          Customization
        </HashLink>
        <HashLink to="/Contact" onClick={closeMenu}>
        Contact Us
        </HashLink>
        <HashLink to="/ProtectedPage" onClick={closeMenu}>
          Catalogue
        </HashLink>
        {/* Add more HashLink components for other menu items */}
      </Menu>
    </div>
  );
};

export default HamburgerMenu;