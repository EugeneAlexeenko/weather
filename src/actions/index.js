import { ADD_CITY,
         REMOVE_CITY,
         LOAD_WEATHER_START,
         LOAD_WEATHER_SUCCESS,
         LOAD_WEATHER_ERROR
} from "../constants";

export function addCity(id) {
  return {
    type: ADD_CITY,
    payload: { id }
  }
}

export function removeCity(id) {
  return {
    type: REMOVE_CITY,
    payload: { id }
  }
}

export function loadWeather(id) {
  //console.log('load weather for id', id);
  return (dispatch) => {
    dispatch({
      type: LOAD_WEATHER_START,
      payload: { id }
    });

    const baseUrl = `https://api.openweathermap.org`;
    const path = `/data/2.5/weather`;
    const appId = `a8ea301f97eff232520187299d334108`;
    const params = `units=metric&appid=${appId}`;

    fetch(`${baseUrl}${path}?id=${id}&${params}`)
      .then(res => res.json())
      .then(weatherData => dispatch({
        type: LOAD_WEATHER_SUCCESS,
        payload: { id, weatherData}
      }))
      .catch(error => dispatch({
        type: LOAD_WEATHER_ERROR,
      }))
  }
}
