import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AddCity.css';

class AddCity extends Component {
  render() {
    const { cities } = this.props;
    const options = cities.map( (city) => (
      <option key={city} value={city}>{city}</option>
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
    addCity: (city) => {
      dispatch({
        type: 'ADD_CITY',
        payload: city
      });
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCity);
