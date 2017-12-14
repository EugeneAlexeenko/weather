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
            <Link to="/">to main page</Link>
          </div>
          <div>loading...</div>
        </div>
      )
    }

    const bgUrl = (city.bgImage) ?
      process.env.PUBLIC_URL + `/img/bg_cities/${city.bgImage}` :
      process.env.PUBLIC_URL + `/img/bg_cities/default-city.jpg`;

    return (
      <div className="weather-detail">
        <header
          className="weather-detail__header"
          style={{backgroundImage: `url(${bgUrl})`}}
        >
          <div className="weather-detail__container">
            <Link
              to="/"
              className="link"
            >
              to main page
            </Link>

            <div className="location">

              <div className="location__city-container">
                <div className="location__city">
                  {city.name}
                </div>
                <div className="location__country">
                  {city.country}
                </div>
              </div>

              <div className="location__date-container">
                <div className="location__date-item">
                friday
                </div>
                <div className="location__date-item">
                15 may
                </div>
                <div className="location__date-item">
                12:24 am
                </div>
              </div>

            </div>

          </div>
        </header>

        <main className="weather-detail__main">
          <div className="weather-detail__container">
            .weather-detail
            Temperature: {city.data.main.temp}
            <br/>
            Humidity: {city.data.main.humidity}
            <br/>
            Pressure: {city.data.main.pressure}
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