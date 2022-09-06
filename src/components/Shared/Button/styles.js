import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    flex: 1,
    flexDirection: 'column-reverse',
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: 'green',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  destructButton: {
    backgroundColor: 'red',
  },
});

export default styles;
