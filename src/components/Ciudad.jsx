import React from "react";
import Loading from "../images/loading-line.gif";
import "./Ciudad.css";


class Ciudad extends React.Component { //se monta el componente...
    constructor(props) {
        super(props);
        this.state = {
            ciudad: {} //todavía no tiene datos...va a mostrar un mensaje de cargando
        }
       
    }
    
     //Life-Cycle React
    componentDidMount() { //se ejecuta en el momento que se monta el componente en el DOM...
        const id = this.props.match.params.id;
        const apiKey = apiKey; 
        
        fetch(`http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${apiKey}&units=metric`) //Se envía una request al servidor y actualiza el estado...
            .then(r => r.json())
            .then((recurso) => {
                console.log(recurso)
                this.setState({
                    ciudad: recurso
                })
            })
    }

    render() {//cuando se actualice el estado, se renderiza y muestra todos los datos de la ciudad...
        const city = this.state.ciudad;
        if(!city.main) return  <img id="loading" src={Loading} width="700" height="400" alt=""></img>      /*   <h1>Loading...</h1> */
        return (
            <div className="ciudad">
                    <h2>{city.name}</h2> 
                        <div><strong>Temperature:</strong> {city.main.temp} ºC</div>
                        <div><strong>Weather:</strong> {city.weather[0].main}</div>
                        <div><strong>Wind:</strong> {city.wind.speed} km/h</div>
                        <div><strong>Clouds:</strong> {city.clouds.all}</div>
                        <div><strong>Latitude:</strong> {city.coord.lat}º</div>
                        <div><strong>Longitude:</strong> {city.coord.lon}º</div>
                    </div>
        )
    }
}

export default Ciudad;