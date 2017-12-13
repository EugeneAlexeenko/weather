import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadWeather } from '../actions';

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
        <div>loading...</div>
      )
    }

    return (
      <div className="weather-detail">
        <Link to="/">to main page</Link>

        <br/>
        City: {city.name}
        <br/>
        Temperature: {city.data.main.temp}
        <br/>
        Humidity: {city.data.main.humidity}
        <br/>
        Pressure: {city.data.main.pressure}
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