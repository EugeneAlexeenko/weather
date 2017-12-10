import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CitiesItem.css';

class CitiesItem extends Component {
  render() {
    const { city } = this.props;
    return (
      <li key={city} className="cities__list-item" >
        <p className="cities__city-name">{city}</p>
        <button
          className="cities__remove-btn"
          onClick={this.handleRemove}
        >
          Remove
        </button>
      </li>
    );
  }

  handleRemove = () => {
    const { city } = this.props;
    this.props.removeWidget(city);
  }
}

const mapStateToProps = (state) => ({
  cities: state.cities,
  displayedCities: state.displayedCities
});

const mapDispatchToProps = (dispatch) => {
  return {
    removeWidget: (city) => {
      dispatch({
        type: 'REMOVE_CITY',
        payload: city
      });
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CitiesItem);
