import axios from 'axios';
import {SET_SHOPPING_LIST} from './types';

export const getProducts = () => async dispatch => {
  try {
    const {data} = await axios.get('https://fakestoreapi.com/products');
    const updated_data = data.map(element => {
      return {
        ...element,
        name: element.title,
        unit_price: element.price,
        thumbnail: element.image,
        measure: 'piece',
      };
    });
    dispatch({
      type: SET_SHOPPING_LIST,
      payload: updated_data,
    });
  } catch (e) {
    return e;
  }
};
