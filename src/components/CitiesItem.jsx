import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CitiesItem.css';
import { removeCity } from "../actions";

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
    const { id, removeWidget } = this.props;
    removeWidget(id);
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeWidget: (id) => {
      dispatch(removeCity(id));
    }
  }
};

export default connect(null, mapDispatchToProps)(CitiesItem);
