import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1, margin: 20},
  menuItemContainer: {
    height: 80,
    backgroundColor: 'blue',
    opacity: 0.5,
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
