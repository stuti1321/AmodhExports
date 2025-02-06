import { slide as Menu } from "react-burger-menu";
import styles from "./styles.module.css";
import "../styles/Hamburgernew.scss";
import "../styles/App.scss";
import { HashLink } from "react-router-hash-link";
import React, { useState } from "react";

const HamburgerMenu = () => {
  const [showNav, setShowNav] = useState(true);

  const closeMenu = () => {
    console.log("close menu called")
    setShowNav(false);
  };

  return (
    <div className="hamb">
      <div className={styles.hamburger}>
        <Menu
          customBurgerIcon={<HamburgerIcon />}
          width={"auto"}
          className={styles.hamburgerPosition}
        >
          <div className="ham">
            <HashLink className="links" to="/" onClick={closeMenu}>
              Home
            </HashLink>

            <HashLink className="links" to="/About" onClick={closeMenu}>
              About Us
            </HashLink>

            <HashLink className="links" to="/Category" onClick={closeMenu}>
              Products
            </HashLink>

            <HashLink className="links" to="/Customization" onClick={closeMenu}>
              Customization
            </HashLink>

            <HashLink className="links" to="/Contact" onClick={closeMenu}>
              Contact Us
            </HashLink>

            <HashLink className="links" to="/ProtectedPage" onClick={closeMenu}>
              Catalogue
            </HashLink>
          </div>
        </Menu>
      </div>
    </div>
  );
};

const HamburgerIcon = () => (
  <div>
    <svg
      className={styles.iconStyle}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
  </div>
);

const Header = () => {
  return (
    <nav className={styles.headerNav}>
      <div className={styles.headerSubNav}>
        <HamburgerMenu />
      </div>
      <div></div>
    </nav>
  );
};

export default Header;