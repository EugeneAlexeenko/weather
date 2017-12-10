import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddCity extends Component {
  render() {
    const { cities } = this.props;
    console.log(cities);
    const options = cities.map( (city) => (
      <option
        key={city}
        value={city}
      >
        {city}
      </option>
    ));

    return (
      <div>
        <select onChange={this.handleChange}>
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
