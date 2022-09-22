import axios from 'axios';
import {
  SET_16DAY_FORECAST,
  SET_5DAY_FORECAST,
  SET_COORDINATES,
  SET_CURRENT_WEATHER_INFO,
  SET_HOURLY_FORECAST,
  SET_LIVE_WEATHER_INFO,
  SET_WEATHER_ALERTS,
} from './types';

export const get5DayForecast = (lat, long) => async dispatch => {
  try {
    const options = {
      method: 'GET',
      url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly',
      params: {lat: lat, lon: long},
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com',
      },
    };

    const {data} = await axios.request(options);
    dispatch({
      type: SET_5DAY_FORECAST,
      payload: data,
    });
    dispatch({
      type: SET_COORDINATES,
      payload: {latitude: data?.lat, longitude: data?.long},
    });
  } catch (e) {
    return e;
  }
};

export const getCurrentWeather = (lat, long) => async dispatch => {
  try {
    const options = {
      method: 'GET',
      url: 'https://weatherbit-v1-mashape.p.rapidapi.com/current',
      params: {lon: long, lat: lat, lang: 'en'},
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com',
      },
    };

    const {data} = await axios.request(options);

    dispatch({
      type: SET_CURRENT_WEATHER_INFO,
      payload: data?.data[0] ?? {},
    });
    dispatch({
      type: SET_COORDINATES,
      payload: {latitude: lat, longitude: long},
    });
  } catch (err) {
    return err;
  }
};

export const getLiveWeather = (lat, long) => async dispatch => {
  try {
    const options = {
      method: 'GET',
      url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/minutely',
      params: {lat: lat, lon: long},
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com',
      },
    };

    const {data} = await axios.request(options);

    dispatch({
      type: SET_LIVE_WEATHER_INFO,
      payload: data?.data[0] ?? {},
    });
    dispatch({
      type: SET_COORDINATES,
      payload: {latitude: lat, longitude: long},
    });
  } catch (err) {
    return err;
  }
};

export const sixteenDayForecast = (lat, long) => async dispatch => {
  try {
    const options = {
      method: 'GET',
      url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily',
      params: {lat: lat, lon: long},
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com',
      },
    };

    const {data} = await axios.request(options);

    dispatch({
      type: SET_16DAY_FORECAST,
      payload: data?.data[0] ?? {},
    });
    dispatch({
      type: SET_COORDINATES,
      payload: {latitude: lat, longitude: long},
    });
  } catch (err) {
    return err;
  }
};

export const hourlyForecast = (lat, long, hours) => async dispatch => {
  try {
    const options = {
      method: 'GET',
      url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/hourly',
      params: {
        lat: lat,
        lon: long,
        hours: hours && hours <= 120 ? hours : '48',
      },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com',
      },
    };

    const {data} = await axios.request(options);

    dispatch({
      type: SET_HOURLY_FORECAST,
      payload: data?.data[0] ?? {},
    });
    dispatch({
      type: SET_COORDINATES,
      payload: {latitude: lat, longitude: long},
    });
  } catch (err) {
    return err;
  }
};

export const weatherAlerts = (lat, long) => async dispatch => {
  try {
    const options = {
      method: 'GET',
      url: 'https://weatherbit-v1-mashape.p.rapidapi.com/alerts',
      params: {lat: lat, lon: long},
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com',
      },
    };

    const {data} = await axios.request(options);

    dispatch({
      type: SET_WEATHER_ALERTS,
      payload: data,
    });
    dispatch({
      type: SET_COORDINATES,
      payload: {latitude: lat, longitude: long},
    });
  } catch (err) {
    return err;
  }
};
