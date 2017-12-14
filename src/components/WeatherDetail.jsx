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
            className="weather-detail__background"
            style={{backgroundImage: `url(${process.env.PUBLIC_URL}/img/bg_cities/default-city.jpg)`}}
          >
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
        <div
          className="weather-detail__background"
          style={{backgroundImage: `url(${bgUrl})`}}
        >
          <Link to="/">to main page</Link>
        </div>

        <div className="weather-detail__information">
          City: {city.name}
          <br/>
          Temperature: {city.data.main.temp}
          <br/>
          Humidity: {city.data.main.humidity}
          <br/>
          Pressure: {city.data.main.pressure}
        </div>
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