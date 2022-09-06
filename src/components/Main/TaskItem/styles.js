import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 4,
    justifyContent: 'space-between',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'green',
    borderRadius: 2,
    height: 40,
    marginTop: 15,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  taskTitle: {
    textDecorationLine: 'line-through',
  },
  task: {flex: 6},
  utilityContainer: {flex: 1, flexDirection: 'row'},
  binMargin: {marginRight: 10},
  dummyView: {width: 30},
});

export default styles;
