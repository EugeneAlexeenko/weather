import { ADD_CITY,
         REMOVE_CITY,
         LOAD_WEATHER_START,
         LOAD_WEATHER_SUCCESS,
         LOAD_WEATHER_ERROR
} from '../constants';
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
    case LOAD_WEATHER_START:
      return citiesState.map((city) => {
        if (city.id !== +action.payload.id) {
          return city;
        }
        return {
          ...city,
          isLoading: true
        }
      });
    case LOAD_WEATHER_SUCCESS:
      // console.log('loading done: ', action.payload.weatherData);
      return citiesState.map((city) => {
        if (city.id !== +action.payload.id) {
          return city;
        }
        return {
          ...city,
          isLoading: false,
          data: action.payload.weatherData
        }
      });
    case LOAD_WEATHER_ERROR:
      return citiesState.map((city) => {
        if (city.id !== +action.payload.id) {
          return city;
        }
        return {
          ...city,
          hasError: true
        }
      });
    default:
      return citiesState
  }
};

