import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AddCity from './AddCity';
import CitiesItem from './CitiesItem';
import './CitiesList.css';

class Cities extends Component {
  render() {
    const { cities } = this.props;
    const citiesList = cities.map((city) => {
      if (city.isVisible) return (
        <CitiesItem
          key={city.id}
          id={city.id}
          city={city.name}/>
      );
      return null;
    });
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
  cities: state.cities
});

export default connect(mapStateToProps)(Cities);
