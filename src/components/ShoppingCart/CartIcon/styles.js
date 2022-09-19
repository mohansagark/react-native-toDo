import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cart: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  count: {
    position: 'absolute',
    top: -2,
    right: 10,
    backgroundColor: 'red',
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  countText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#fff',
  },
});

export default styles;
