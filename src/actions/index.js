export const getWeather = () => {
  return (dispatch) => {
    setTimeout(() => {
      console.log('i got weather');
      dispatch({ type: 'FETCH_WEATHER_SUCCESS', payload: [] })
    }, 2000);
  }
};
