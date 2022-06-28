import React from 'react';
import SearchBar from '../SearchBar/SearchBar.jsx';
import logoHenry from '../../img/wheater.png';
import styles from './Nav.module.css';
import { Link } from 'react-router-dom';

const Nav = ({ onSearch }) => {
  return (
    <div className={styles.nav}>
      <div className={styles.bannerLogo}>
        <Link to={'/'} className={styles.link}>
          <img id={styles.logoHenry} src={logoHenry} alt='Logo Henry' />
          <h1>Weather App</h1>
        </Link>
      </div>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default Nav;
