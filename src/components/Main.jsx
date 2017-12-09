import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherPreview from './WeatherPreview';
import './Main.css';

class Main extends Component {
  render() {
    const widgets = this.props.displayedCities.map( (city) => (
      <div key={city.id}>
        <WeatherPreview city={city.name}/>
      </div>)
    );
    return (
      <div className="main">
        <h2>Main page</h2>
        <p>select: Add weather widget</p>
        <div className="main__previews-container">
          {widgets}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cities: state.cities,
  displayedCities: state.displayedCities
});

export default connect(mapStateToProps)(Main);
