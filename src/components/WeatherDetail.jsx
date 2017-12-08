import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class WeatherDetail extends Component {
  state = {
    city: 'moscow',
    temperature: '',
    fetching: true,
  }

  // когда компонент появится в DOM
  componentDidMount() {
    //this.fetchZipCodeByIP();
    this.fetchWeatherData(this.state.city);
  }

  render () {
    return (
      <div className="weather-detail">
        <Link to="/">to main page</Link>

        <br/>
        City: {this.state.city}
        <br/>
        Temperature: {this.state.temperature}
      </div>
    );
  }

  // get city location by ip
  fetchZipCodeByIP = () => {
    fetch(`https://freegeoip.net/json/`)
    //.then(response => response.json())
      .then((response) => {
        console.log('fetching ip from https://freegeoip.net');
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.fetchWeatherData( data.city );
      })
      .catch((error) => {
        console.log(error)
        return
      })
  };

  // get weather data by zip code
  fetchWeatherData = (city) => {
    const baseUrl = `http://api.openweathermap.org`;
    const path = `/data/2.5/weather`;
    const appId = `a8ea301f97eff232520187299d334108`;
    const query = `units=metric&lang=ru&appid=${appId}`;

    fetch(`${baseUrl}${path}?q=${city}&${query}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          city: data.name,
          temperature: Math.round(data.main.temp),
          fetching: false
        });
      })
      .catch(error => console.error(error));
  };
}

export default WeatherDetail;