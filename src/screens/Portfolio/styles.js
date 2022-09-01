import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1},
  profileImage: {height: 100, width: 100, borderRadius: 50},
  imageContainer: {
    marginTop: 20,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editTocuh: {marginTop: 10},
  editText: {color: 'blue'},
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default styles;
