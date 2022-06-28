import React from 'react';
import { Link } from 'react-router-dom';
import styles from './DetailsCard.module.css';

const DetailsCard = ({ cities, props }) => {
  const city = cities.filter(c => c.id == props.match.params.id)[0];

  return (
    <div className={styles.main}>
      <div className={styles.cardBody}>
        <h2>{city.name}</h2>
        <div className={styles.bodyData}>
          <span>
            <b>Temperatura:</b> {city.temp} ºC
          </span>
          <span>
            <b>Clima:</b> {city.weather}
          </span>
          <span>
            <b>Viento:</b> {city.wind} km/h
          </span>
          <span>
            <b>Cantidad de nubes:</b> {city.clouds}
          </span>
          <span>
            <b>Latitud:</b> {city.latitud} º
          </span>
          <span>
            <b>Longitud:</b> {city.longitud} º
          </span>
        </div>
        <div className={styles.btn}>
          <Link to={'/'} className={`${styles.arrow} ${styles.left}`}>
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
