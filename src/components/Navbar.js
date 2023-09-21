import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.backButton}>
        <Link to="/">
          <img
            src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-shoes-white-clothing-zavvi-23.png"
            className={styles.image}
            alt="Rick&Morty logo"
          />
        </Link>
      </div>
      <div className={styles.title}>The Rick and Morty API - Genesys</div>
    </div>
  );
};

export default Navbar;
