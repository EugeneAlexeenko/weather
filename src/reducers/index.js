import '../constants';

const initialState = {
  cities: [ 'Saint Petersburg', 'Moscow', 'Kiev', 'Novosibirsk' ],
  displayedCities: [ 'Saint Petersburg', 'Moscow' ]
};

export default (state = initialState, action) => {
  switch (action.type){
    case 'ADD_WIDGET':
      if (state.displayedCities.indexOf(action.payload) !== -1) return state;
      return {...state, displayedCities: state.displayedCities.concat(action.payload)};
    case 'REMOVE_WIDGET':
      return {
        ...state,
        displayedCities:  state.displayedCities.filter( (city) => city !== action.payload)};
    default:
      return state;
  }
};

