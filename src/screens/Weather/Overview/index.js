import {View, Text, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {connect} from 'react-redux';
import Header from '../../../components/Shared/Header';
import {BackNavigator} from '../../../components/Shared';
import Geolocation from '@react-native-community/geolocation';
import {
  get5DayForecast,
  getLiveWeather,
  weatherAlerts,
} from '../../../store/actions/weather.actions';
import {SET_THEME_COLOR} from '../../../store/actions/types';
import {store} from '../../../store/store';

const Overview = ({weatherData, loadWeatherData, setThemeColor}) => {
  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      loadWeatherData(info?.coords?.latitude, info?.coords?.longitude);
    });
    setThemeColor();
  }, [loadWeatherData, setThemeColor]);
  console.log(store.getState().general.themecolor);
  return (
    <View style={styles.container}>
      <BackNavigator top={45} />
      <Header title={'Weather App'} h2 />
      <ScrollView>
        <Text>{JSON.stringify(weatherData)}</Text>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => ({
  weatherData: state.weather,
});

const mapDispatchToProps = dispatch => ({
  loadWeatherData: (lat, long) => {
    dispatch(get5DayForecast(lat, long));
    dispatch(getLiveWeather(lat, long));
    dispatch(weatherAlerts(lat, long));
  },
  setThemeColor: () => {
    dispatch({type: SET_THEME_COLOR, payload: '#ABD9FF'});
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Overview);
