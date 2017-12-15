import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadWeather } from '../actions';
import LinkReturn from './LinkReturn';
import LocationInfo from './LocationInfo';
import DetailTemperature from './DetailTemperature';
import DetailWind from "./DetailWind";
import DetailHumidity from "./DetailHumidity";
import DetailSunrise from "./DetailSunrise";
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
          <LinkReturn to="/"/>
          <div className="weather-detail__container">
            <p className="weather-detail__error-message">
              Sorry, can't get data for yor city...
            </p>
          </div>
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
          <LinkReturn to="/"/>
          <div className="weather-detail__container">
            <LocationInfo city={city}/>
          </div>
        </header>

        <main className="weather-detail__main">
          <div className="weather-detail__container">

            <div className="weather-detail__features">

              <div className="weather-detail__features-item ">
                <h3 className="weather-detail__feature-title">
                  Temperature
                </h3>
                <DetailTemperature city={city} />
              </div>

              <div className="weather-detail__features-item ">
                <h3 className="weather-detail__feature-title">
                  Wind
                </h3>
                <DetailWind city={city}/>
              </div>

              <div className="weather-detail__features-item ">
                <h3 className="weather-detail__feature-title">
                  Humidity
                </h3>
                <DetailHumidity city={city}/>
              </div>

              <div className="weather-detail__features-item ">
                <h3 className="weather-detail__feature-title">
                  Sunrise/Sunset
                </h3>
                <DetailSunrise city={city}/>
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