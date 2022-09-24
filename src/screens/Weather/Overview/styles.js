import {StyleSheet} from 'react-native';
import {store} from '../../../store/store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    padding: 15,
    backgroundColor: store.getState().general.themecolor,
  },
  fullFlex: {flex: 1},
});

export default styles;
