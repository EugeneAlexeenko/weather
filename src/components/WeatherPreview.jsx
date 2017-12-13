import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './WeatherPreview.css';
import {removeCity} from '../actions';

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
          <div className="weather-preview__weather-icon"></div>
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
    const { id, removeWidget } = this.props;
    removeWidget(id);
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeWidget: (id) => {
      dispatch(removeCity(id));
    }
  }
};

export default connect(null, mapDispatchToProps)(WeatherPreview);