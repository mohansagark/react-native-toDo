import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    borderBottomColor: '#000',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  thumbnailView: {flex: 2},
  breakDownView: {flex: 1, fontSize: 16, fontWeight: '500'},
  name: {fontSize: 14, fontWeight: '400'},
  amountView: {flex: 1, textAlign: 'right', fontSize: 20, fontWeight: '700'},
  thumbnail: {
    width: 50,
    height: 50,
  },
});

export default styles;
