import {StyleSheet} from 'react-native';
import {store} from '../../store/store';

const styles = StyleSheet.create({
  backButton: {marginLeft: 15},
  fullFlex: {flex: 1, backgroundColor: store.getState().general.themecolor},
});

export default styles;
