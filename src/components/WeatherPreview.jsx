import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
        <Link to={`/test11111111111111`}
          className="weather-preview__btn-detail"
        >
          Show forecast
        </Link>
      </div>
    );
  }

  handleClose = (e) => {
    console.log('close');
  }
}

export default WeatherPreview;