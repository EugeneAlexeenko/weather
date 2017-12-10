import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AddCity from './AddCity';
import CitiesItem from './CitiesItem';
import './Cities.css';

class Cities extends Component {
  render() {
    const citiesList = this.props.displayedCities.map((city) => (
      <CitiesItem key={city} city={city}/>
    ));
    return (
      <div>
        <Link to="/">to main page</Link>
        <h2>Edit cities list:</h2>
        <AddCity />
        <ul className="cities__list">
          {citiesList}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cities: state.cities,
  displayedCities: state.displayedCities
});

export default connect(mapStateToProps)(Cities);
