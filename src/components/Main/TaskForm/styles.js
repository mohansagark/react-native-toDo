import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  inlineContainer: {flexDirection: 'row', height: 40},
  input: {
    flex: 8,
    borderColor: 'grey',
    borderWidth: 1,
    padding: 3,
    borderRadius: 5,
  },
  iconContainer: {
    marginLeft: 15,
    backgroundColor: 'green',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dummyView: {
    width: 20,
  },
});

export default styles;
