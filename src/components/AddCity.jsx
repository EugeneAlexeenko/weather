import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddCity extends Component {
  render() {
    return (
      <div>
        <h2>TODO Add city select</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cities: state.cities,
  displayedCities: state.displayedCities
});

// const mapDispatchToProps = (dispatch) => {
//   return {
//     removeWidget: (city) => {
//       dispatch({
//         type: 'REMOVE_WIDGET',
//         payload: city
//       });
//     }
//   }
// };

export default connect(mapStateToProps)(AddCity);
