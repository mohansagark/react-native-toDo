import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flexDirection: 'row', height: 40},
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
  markAllButton: {
    flexDirection: 'column-reverse',
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: 'green',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  markAllText: {
    color: 'white',
    fontSize: 16,
  },
});

export default styles;
