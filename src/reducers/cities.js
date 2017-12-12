import {ADD_CITY, REMOVE_CITY} from '../constants';
import cities from '../cities';

const initialState = cities;

export default (citiesState = initialState, action) => {
  switch (action.type) {
    case ADD_CITY:
      return citiesState.map((city) => {
        if (city.id !== +action.payload.id) {
          return city;
        }
        return {
          ...city,
          isVisible: true
        }
      });
    case REMOVE_CITY:
      return citiesState.map((city) => {
        if (city.id !== +action.payload.id) {
          return city;
        }
        return {
          ...city,
          isVisible: false
        }
      });
    default:
      return citiesState
  }
};

