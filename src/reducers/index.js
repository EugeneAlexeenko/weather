import '../constants';

const initialState = {
  cities: [ 'Saint Petersburg', 'Moscow', 'Kiev', 'Novosibirsk', 'Anadyr' ],
  displayedCities: [ 'Saint Petersburg', 'Moscow', 'Novosibirsk', 'Anadyr']
};

export default (state = initialState, action) => {
  switch (action.type){
    case 'ADD_CITY':
      if (state.displayedCities.indexOf(action.payload) !== -1) return state;
      return {...state, displayedCities: state.displayedCities.concat(action.payload)};
    case 'REMOVE_CITY':
      return {
        ...state,
        displayedCities:  state.displayedCities.filter( (city) => city !== action.payload)};
    case 'FETCH_WEATHER_SUCCESS':
      return {
        ...state,
        fetchedData: action.payload
      };
    default:
      return state;
  }
};

