import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AddCity.css';

class AddCity extends Component {
  render() {
    const { cities } = this.props;
    const filteredCities = cities.filter( (city) => !city.isVisible);
    const options = filteredCities.map( (city) => (
      <option key={city.id} value={city.id}>{city.name}</option>
    ));

    return (
      <div>
        <select
          className="add-city__select"
          value="default"
          onChange={this.handleChange}
        >
          <option value="default" disabled>Please, add city...</option>
          {options}
        </select>
      </div>
    );
  }

  handleChange = (event) => {
    const cityToAdd = event.target.value;
    this.props.addCity(cityToAdd);
  }
}

const mapStateToProps = (state) => ({
  cities: state.cities,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addCity: (id) => {
      dispatch({
        type: 'ADD_CITY',
        payload: {
          id
        }
      });
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCity);
