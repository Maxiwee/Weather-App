import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

const Card = ({ name, min, max, img, onClose, id }) => {
  return (
    <div className={styles.card}>
      <div className={styles.btn}>
        <button onClick={onClose}>X</button>
      </div>
      <Link to={`/${id}`} className={styles.link}>
        <div className={styles.body}>
          <div className={styles.bodyData}>
            <div className={styles.city}>
              <h1>{name}</h1>
            </div>
            <div className={styles.temps}>
              <section>
                <p className={styles.sizeMaxMin}>Max</p>
                <p className={styles.sizeTemp}>{max}°</p>
              </section>
              <section>
                <p className={styles.sizeMaxMin}>Min</p>
                <p className={styles.sizeTemp}>{min}°</p>
              </section>
            </div>
          </div>
          <div className={styles.img}>
            <img src={`http://openweathermap.org/img/wn/${img}@2x.png`}></img>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
