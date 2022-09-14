import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    flexDirection: 'column-reverse',
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: '#1976D2',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
    minWidth: 200,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
  blueText: {color: '#1976D2'},
  destructButton: {
    backgroundColor: '#db4a39',
  },
  secondaryButton: {
    borderColor: '#1976D2',
    backgroundColor: 'transparent',
  },
});

export default styles;
