import {
  SET_16DAY_FORECAST,
  SET_5DAY_FORECAST,
  SET_COORDINATES,
  SET_CURRENT_WEATHER_INFO,
  SET_HOURLY_FORECAST,
  SET_LIVE_WEATHER_INFO,
  SET_WEATHER_ALERTS,
} from '../actions/types';

const initialState = {
  fiveDayForecastData: {},
  currentWeather: {},
  liveWeather: {},
  sixteenDayForecastData: {},
  hourlyForecastData: {},
  weatherAlerts: {},
  coordinates: {},
  loader: false,
};

const weather = (state = initialState, action) => {
  switch (action?.type) {
    case SET_5DAY_FORECAST:
      return {
        ...state,
        fiveDayForecastData: action?.payload ?? [],
      };
    case SET_COORDINATES:
      return {
        ...state,
        coordinates: action?.payload ?? {},
      };
    case SET_CURRENT_WEATHER_INFO:
      return {
        ...state,
        currentWeather: action?.payload ?? {},
      };
    case SET_LIVE_WEATHER_INFO:
      return {
        ...state,
        liveWeather: action?.payload ?? {},
      };
    case SET_16DAY_FORECAST:
      return {
        ...state,
        sixteenDayForecastData: action?.payload ?? {},
      };
    case SET_HOURLY_FORECAST:
      return {
        ...state,
        hourlyForecastData: action?.payload ?? {},
      };
    case SET_WEATHER_ALERTS:
      return {
        ...state,
        weatherAlerts: action?.payload ?? {},
      };

    default:
      return state;
  }
};

export default weather;
