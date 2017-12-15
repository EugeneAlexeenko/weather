import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadWeather } from '../actions';
import './WeatherDetail.css';

class WeatherDetail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    loadWeather(id);
  }

  render () {
    const { id } = this.props.match.params;
    const city = this.props.cities.find( city => city.id === +id);

    if (!city.data) {
      return (
        <div className="weather-detail">
          <div
            className="weather-detail__header"
            style={{backgroundImage: `url(${process.env.PUBLIC_URL}/img/bg_cities/default-city.jpg)`}}
          >
            <Link
              to="/"
              className="link-back"
            >
            </Link>
          </div>
          <div>loading...</div>
        </div>
      )
    }

    const bgUrl = (city.bgImage) ?
      process.env.PUBLIC_URL + `/img/bg_cities/${city.bgImage}` :
      process.env.PUBLIC_URL + `/img/bg_cities/default-city.jpg`;

    function getDate(){
      const dateNow = new Date();
      const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      };
      const dayOptions = {
        weekday: 'short'
      };
      const dateOptions = {
        month: 'short',
          day: 'numeric'
      };

      return {
        day: dateNow.toLocaleDateString('en-US', dayOptions).toUpperCase(),
        date: dateNow.toLocaleDateString('en-US', dateOptions).toUpperCase(),
        time: dateNow.toLocaleTimeString('en-US', timeOptions).toLowerCase()
      }
    }

    const day = getDate().day.toUpperCase();
    const date = getDate().date.toUpperCase();
    const time = getDate().time.toLowerCase();


    const weatherIcon = (city.data.weather[0].icon) ?
      city.data.weather[0].icon :
      `default-weather.svg`;
    const weatherIconUrl = process.env.PUBLIC_URL + `/img/icons_weather/icon_${weatherIcon}.svg`;

    const weatherDescription = (city.data.weather[0].description) ?
      city.data.weather[0].description :
      ``;

    const temperature = Math.round(city.data.main.temp);

    function degToCompass(num) {
      const value = Math.floor((num / 22.5) + 0.5);
      const arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
      return arr[(value % 16)];
    }

    const windSpeed = Math.round(city.data.wind.speed);

    const windDirection = degToCompass(city.data.wind.deg);

    const formatTime = (s) => {
      const date = new Date(s * 1000);
      const options = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      };
      return date.toLocaleTimeString('en-US', options);
    };

    const sunrise = formatTime(city.data.sys.sunrise);
    const sunset = formatTime(city.data.sys.sunset);


    return (
      <div className="weather-detail">
        <header
          className="weather-detail__header"
          style={{backgroundImage: `url(${bgUrl})`}}
        >
          <div className="weather-detail__container">
            <Link
              to="/"
              className="link-back"
            >
            </Link>

            <div className="location">

              <div className="location__city-container">
                <h2 className="location__city">
                  {city.name}
                </h2>
                <h3 className="location__country">
                  {city.country}
                </h3>
              </div>

              <div className="location__date-container">
                <div className="location__date-item">
                  {day}
                </div>
                <div className="location__date-item">
                  {date}
                </div>
                <div className="location__date-item">
                  {time}
                </div>
              </div>

            </div>

          </div>
        </header>

        <main className="weather-detail__main">
          <div className="weather-detail__container">

          {/*temperature*/}
          <div className="weather-detail__features">
            <div className="weather-detail__features-item
                            weather-detail__temperature">
              <h3 className="weather-detail__feature-title">
                Temperature
              </h3>
              <div className="temperature__container">
                <div className="temperature__number">
                  {temperature}
                </div>
                <div className="temperature__extra">
                  <i
                    className="temperature__icon"
                    style={{backgroundImage: `url(${weatherIconUrl})`}}
                  >
                  </i>
                  <p className="temperature__description">
                    {weatherDescription}
                  </p>
                </div>
              </div>
            </div>

           {/*wind */}
            <div className="weather-detail__features-item
                            wind">
              <h3 className="weather-detail__feature-title">
                Wind
              </h3>

              <div className="wind__container">
                <div className="wind__speed">
                  {windSpeed}
                  <span className="wind__speed-dimension">
                    m/s
                  </span>
                </div>
                <i className="wind__icon"></i>
              </div>

              <p className="wind__direction">
                Direction: {windDirection}
              </p>
            </div>

           {/*humidity */}
            <div className="weather-detail__features-item
                            weather-detail__humidity">
              <h3 className="weather-detail__feature-title">
                Humidity
              </h3>
              <i className="weather-detail__humidity-icon"></i>
              <p className="weather-detail__text">
                Humidity: {city.data.main.humidity} %
              </p>
              <p className="weather-detail__text">
                Pressure: {city.data.main.pressure} hPa
              </p>
            </div>

            {/*sunrise/sunset*/}
            <div className="weather-detail__features-item
                            weather-detail__sunrise">
              <h3 className="weather-detail__feature-title">
                Sunrise/Sunset
              </h3>
              <i className="weather-detail__sunrise-icon"></i>
              <p className="weather-detail__text">
                Sunrise: {sunrise}
              </p>
              <p className="weather-detail__text">
                Sunset: {sunset}
              </p>
            </div>
          </div>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cities: state.cities
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadWeather: (id) => {
      dispatch(loadWeather(id));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherDetail);