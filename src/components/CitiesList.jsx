import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddCity from './AddCity';
import CitiesItem from './CitiesItem';
import LinkReturn from './LinkReturn';
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
      <div className="cities__container">
        <LinkReturn to="/" />
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
