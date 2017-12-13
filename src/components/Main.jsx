import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AddCity from './AddCity';
import WeatherPreview from './WeatherPreview';
import './Main.css';

class Main extends Component {
  render() {
    const widgets = this.props.cities.map( (city) => {
      if (city.isVisible) {
        return (
          <div key={city.id}>
            <WeatherPreview
              id={city.id}
              cityName={city.name}
              cityIcon={city.icon}
              weatherData={city.data}
            />
          </div>
        );
      }
      return null;
    });

    return (
      <div className="main">
        <div>
          <Link to="/cities">Edit cities list</Link>
        </div>
        <AddCity />
        <div className="main__previews-container">
          {widgets}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cities: state.cities
});

export default connect(mapStateToProps)(Main);
