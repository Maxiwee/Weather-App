import React from 'react';
import Card from '../Card/Card.jsx';
import styles from './Cards.module.css';

const Cards = ({ cities, onClose }) => {
  return (
    <div className={styles.cards}>
      {cities.map((city) => (
        <Card
          key={city.id}
          id={city.id}
          name={city.name}
          img={city.img}
          temp={city.temp}
          max={city.max}
          min={city.min}
          wind={city.wind}
          humidity={city.humidity}
          weather={city.weather}
          clouds={city.clouds}
          longitud={city.longitud}
          latitud={city.latitud}
          onClose={() => onClose(city.id)}
        />
      ))}
    </div>
  );
};

export default Cards;
