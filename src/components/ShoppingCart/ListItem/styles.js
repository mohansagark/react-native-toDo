import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#000',
    borderRadius: 2,
    width: 350,
    marginVertical: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 11,
    paddingVertical: 10,
  },
  counter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
    marginTop: 20,
  },
  thumbnail: {
    width: 100,
    height: 100,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  quantityContainer: {flex: 3, paddingHorizontal: 10},
  unitPriceContainer: {flex: 2, paddingRight: 10},
  measure: {fontSize: 14, fontWeight: '400'},
  currency: {fontSize: 12, fontWeight: '200'},
  price: {fontSize: 20, fontWeight: '700'},
  name: {fontSize: 18, fontWeight: '700'},
  quantity: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  counterButton: {
    borderColor: '#000',
    borderWidth: StyleSheet.hairlineWidth,
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
