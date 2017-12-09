const initialState = {
  cities: [
    { id: '0', name: 'Saint Petersburg' },
    { id: '1', name: 'Moscow' },
    { id: '3', name: 'Kiev' }
  ],
  displayedCities: [
    { id: '0', name: 'Saint Petersburg' }
  ]
};

export default (state = initialState, action) => {
  switch (action.type){
    case 'ADD WIDGET':
      return {...state}
  }
  return state;
};

