import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Cities extends Component {
  render() {
    console.log(this.props.cities);
    const cities = this.props.cities.map((city) => (
      <li key={city}>
        {city}
      </li>
    ));
    return (
      <div>
        <Link to="/">to main page</Link>
        <h2>Edit cities list:</h2>
        <ul>
          {cities}
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
