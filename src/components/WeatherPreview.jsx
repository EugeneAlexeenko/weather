import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './WeatherPreview.css';

class WeatherPreview extends Component {
  render () {
    return (
      <div className="weather-preview">
        <button
          className="weather-preview__btn-close"
          onClick={this.handleClose}
        >
          &#x2715;
        </button>
        <div className="weather-preview__city-icon"></div>
        <h3 className="weather-preview__name">{this.props.city}</h3>
        <div className="weather-preview__data-container">
          <div className="weather-preview__temperature">-35
            <div className="weather-preview__degree">&#176;C</div>
          </div>
          <div className="weather-preview__weather-icon">1</div>
        </div>
        <Link to={`/detail/${this.props.city}`}
          className="weather-preview__link"
        >
          &#x2794;
        </Link>
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
    }
  }
};

export default connect(null, mapDispatchToProps)(WeatherPreview);