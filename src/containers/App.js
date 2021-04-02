import React, { useState } from 'react';
import { Route } from 'react-router-dom'; 

import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import Ciudad from '../components/Ciudad.jsx';



function App() {
  const [cities, setCities] = useState([]);
  const [error, setError] = useState("");

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  function onSearch(ciudad) {
    const apiKey = apiKey;
    //weather api calls...
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitude: recurso.coord.lat,
            longitude: recurso.coord.lon
          };
          const cityExists = cities.filter(city => city.id === ciudad.id);
            // pongo en un nuevo arreglo todos aquellos elementos que sean iguales
            console.log(cityExists.length > 0);
            if(cityExists.length > 0) {
              alert("It's ready!")

            } else {
              setCities(oldCities => 
                [...oldCities, ciudad]

              )
          }
        } else {
          alert("City not found");
        }
      })
      .catch(error => {
        setError({error: error.message})
      });
  };

  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }
  return (
    
    <div className="App">

    <Route
    path='/'
    render={() => <Nav onSearch={onSearch} />}
/>
    <Route
      path="/"
      exact
      render={() => <Cards cities={cities} onClose={onClose} />}
/>
  
    <Route
      path="/ciudad/:id"
      render={({match}) => <Ciudad match={match} city={onFilter(match.params.id)} />}
/>

 <div className="page-footer">
  <div >Made with <span>❤</span> by Carolina Altamiranda N.</div>
</div>

</div>
   
  

  );
}

export default App;  



