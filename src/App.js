import { useState } from 'react';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import DetailsCard from './components/DetailsCard/DetailsCard.jsx';


function App() {
  const [cities, setCities] = useState([]);

  const { REACT_APP_API_KEY } = process.env;

  const onSearch = city => {
    if (!city) return alert('Ingrese una ciudad');

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${REACT_APP_API_KEY}&units=metric`
    )
      .then(response => response.json())
      .then(data => {
        if (data.name) {
          const newCity = {
            id: data.id,
            name: data.name,
            img: data.weather[0].icon,
            temp: data.main.temp,
            max: data.main.temp_max,
            min: data.main.temp_min,
            wind: data.wind.speed,
            humidity: data.main.humidity,
            weather: data.weather[0].main,
            clouds: data.clouds.all,
            longitud: data.coord.lon,
            latitud: data.coord.lat,
          };

          const cityCharged = cities.find(city => city.id === newCity.id);

          cityCharged
            ? alert('Ciuidad existente')
            : setCities(cities => [...cities, newCity]);
        } else {
          alert('Ciudad no encontrada');
        }
      });
  };

  const onClose = id => {
    setCities(cities => cities.filter(c => c.id != id));
  };

  return (
    <div className='App'>
      <Nav onSearch={onSearch} />
      <Switch>
        <Route
          path='/:id'
          render={props => <DetailsCard props={props} cities={cities} />}
        />
        <Route
          path='/'
          render={() => <Cards cities={cities} onClose={onClose} />}
        />
      </Switch>
    </div>
  );
}

export default App;
