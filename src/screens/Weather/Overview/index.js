import {View, Text, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {connect} from 'react-redux';
import {BackNavigator} from '../../../components/Shared';
import Geolocation from '@react-native-community/geolocation';
import {
  get5DayForecast,
  getLiveWeather,
  weatherAlerts,
} from '../../../store/actions/weather.actions';

const Overview = ({weatherData, loadWeatherData}) => {
  const {liveWeather} = weatherData;
  console.log(liveWeather);
  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      loadWeatherData(info?.coords?.latitude, info?.coords?.longitude);
    });
  }, [loadWeatherData]);
  return (
    <View style={styles.container}>
      <BackNavigator />
      <ScrollView>
        <Text>{JSON.stringify(liveWeather)}</Text>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Overview);
