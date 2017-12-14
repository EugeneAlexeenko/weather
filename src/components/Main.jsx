import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddCity from './AddCity';
import WeatherPreview from './WeatherPreview';
import LinkSettings from './LinkSettings';
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
        <div className="main__container">
          <LinkSettings to="cities"/>
          <AddCity />
          <div className="main__previews-container">
            {widgets}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cities: state.cities
});

export default connect(mapStateToProps)(Main);
