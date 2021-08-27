
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import 'weather-icons/css/weather-icons.css';
import Weather from './components/weather';
import Form from './components/form';
import React from 'react';

const API_key ="d333537ab0f366f3c924c6d013e1b0bb";


class App extends React.Component{
  constructor(){
    super();
    this.state= {
      city:undefined,
      country: undefined,
      icon:undefined,
      main:undefined,
      celsius:undefined,
      temp_max:undefined,
      temp_min:undefined,
      description:"",
      error:false,
      wind_speed:undefined,
      humidity:undefined,
      back:"default"
    };
    // this.getWeather();


    this.weatherIcon ={
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog",
    };
  }


  get_WeatherIcon(icons, rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId < 232:
        this.setState({ icon: icons.Thunderstorm });
        this.setState({back : "Thunderstorm"});
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: icons.Drizzle });
        this.setState({back : "Drizzle"});
        break;
      case rangeId >= 500 && rangeId <= 521:
        this.setState({ icon: icons.Rain });
        this.setState({back : "Rain"});
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: icons.Snow });
        this.setState({back : "Snow"});
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icon: icons.Atmosphere });
        this.setState({back : "Atmosphere"});
        break;
      case rangeId === 800:
        this.setState({ icon: icons.Clear });
        this.setState({back : "Clear"});
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: icons.Clouds });
        this.setState({back : "Clouds"});
        break;
      default:
        this.setState({ icon: icons.Clouds });
        this.setState({back : "default"});
    }
  }

  calCelsius(temp) {
    let cell = Math.floor(temp - 273.15);
    return cell;
  }

  getWeather = async e => {
    e.preventDefault();

    const country = e.target.elements.country.value;
    const city = e.target.elements.city.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`);
    const response = await api_call.json();

    console.log(response);

    this.setState({
      city:response.name,
      country: response.sys.country,
      // main: response.weather[0].main,
        celsius: this.calCelsius(response.main.temp),
        temp_max: this.calCelsius(response.main.temp_max),
        temp_min: this.calCelsius(response.main.temp_min),
        description: response.weather[0].description,
        wind_speed:response.wind.speed,
        Humidity:response.main.humidity
        // error: false
    })

    this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);
  };
  

  render() {
         return(
        <div className="App">
           <div className={this.state.back}>
           <div className="title">
          <h1>Weather App</h1>
          <small>find your place weather</small>
          </div>
     <Form showWeather={this.getWeather} />

    {( this.state.city != null) ? (

     <Weather 
     city={this.state.city}
     celsius={this.state.celsius}
     temp_max={this.state.temp_max}
     temp_min={this.state.temp_min}
     description={this.state.description}
     weathericon={this.state.icon}
     wind_speed={this.state.wind_speed}
     humidity={this.state.Humidity}
    
    />) : ('')}
    </div></div>
    )
 
  }
};




export default App;
