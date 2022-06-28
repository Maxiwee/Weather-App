import React, { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleChange = e => {
    setCity(city => (city = e.target.value));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(city);
    e.target.reset();
    setCity(city => (city = undefined));
  };

  return (
    <form autoComplete={'off'} id='searchForm' onSubmit={e => handleSubmit(e)}>
      <input
        className={styles.search}
        type='text'
        name='search'
        placeholder='Ciudad...'
        onChange={e => handleChange(e)}
      />
      <button className={styles.submit} type='submit' name='submit'>
        Agregar
      </button>
    </form>
  );
};

export default SearchBar;
