import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeCity, loadWeather } from '../actions';

import './WeatherPreview.css';

class WeatherPreview extends Component {
  componentDidMount() {
    const { id, loadWeather } = this.props;
    loadWeather(id);
  }

  render () {
    const { id, cityName, weatherData } = this.props;

    const cityIcon = this.props.cityIcon || `default-city.svg`;
    const cityIconUrl = process.env.PUBLIC_URL + `/img/icons_cities/${cityIcon}`;

    const temperature = weatherData && Math.round(weatherData.main.temp);

    const weatherIcon = weatherData && weatherData.weather[0].icon;
    const weatherIconUrl = process.env.PUBLIC_URL + `/img/icons_weather/icon_${weatherIcon}.svg`;


    return (
      <div className="weather-preview">
        <button
          className="weather-preview__btn-close"
          onClick={this.handleClose}
        >
          &#x2715;
        </button>

        <div
          className="weather-preview__city-icon"
          style={{backgroundImage: `url(${cityIconUrl})`}}
        >
        </div>

        <h3 className="weather-preview__name">{cityName}</h3>

        <div className="weather-preview__data-container">
          <div className="weather-preview__temperature">
            {temperature}
            <div className="weather-preview__degree">&#176;C</div>
          </div>
          <div
            className="weather-preview__weather-icon"
            style={{backgroundImage: `url(${weatherIconUrl})`}}
          >
          </div>
        </div>

        <Link to={`/detail/${id}`}
          className="weather-preview__link"
        >
          &#x2794;
        </Link>
      </div>
    );
  }

  handleClose = () => {
    const { id, removeWidget } = this.props;
    removeWidget(id);
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    removeWidget: (id) => {
      dispatch(removeCity(id));
    },
    loadWeather: (id, nameAPI) => {
      dispatch(loadWeather(id, nameAPI));
    }
  }
};

export default connect(null, mapDispatchToProps)(WeatherPreview);