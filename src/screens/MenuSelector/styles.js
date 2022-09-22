import {StyleSheet} from 'react-native';
import {store} from '../../store/store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: store.getState().general.themecolor,
  },
  gradient: {
    height: 80,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  menuItemText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '900',
    textAlign: 'center',
  },
});

export default styles;
