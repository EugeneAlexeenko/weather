import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getWeather } from "../actions";
import './WeatherPreview.css';

class WeatherPreview extends Component {
  render () {
    return (
      <div className="weather-preview">
        <button
          className="weather-preview__btn-close"
          onClick={this.handleClose}
        >
          close
        </button>
        <h3>{this.props.city}</h3>
        <p>(here will be data.....)</p>
        <Link to={`/detail/${this.props.city}`}
          className="weather-preview__btn-detail"
        >
          Show forecast
        </Link>
        <div>
          <button
            onClick={this.props.onGetWeather}
          >
            Get weather
          </button>
        </div>
      </div>
    );
  }

  handleClose = () => {
    this.props.removeWidget(this.props.city);
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeWidget: (city) => {
      dispatch({
        type: 'REMOVE_CITY',
        payload: city
      })
    },
    onGetWeather: () => {
     // полный код
     /* const asyncGetWeather = () => {
        return (dispatch) => {
          setTimeout(() => {
            console.log('i got weather');
            dispatch({ type: 'FETCH_WEATHER_SUCCESS', payload: [] })
          }, 2000);
        }
      };
      dispatch(asyncGetWeather()); */

     dispatch(getWeather());
    }
  }
};

export default connect(null, mapDispatchToProps)(WeatherPreview);