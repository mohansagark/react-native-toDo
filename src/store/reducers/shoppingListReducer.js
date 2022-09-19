import {
  ADD_TO_SELECTED_LIST,
  CLEAR_CART,
  REMOVE_FROM_SELECTED_LIST,
  SET_SHOPPING_LIST,
} from '../actions/types';
import shoppingListData from '../../constants/dummydata/shoppingCartList.json';

const initialState = {
  availableItems: shoppingListData,
  selectedItems: [],
  totalQuantity: 0,
  totalAmount: 0,
  loader: false,
};

const shoppingList = (state = initialState, action) => {
  switch (action?.type) {
    case SET_SHOPPING_LIST:
      return {
        ...state,
        availableItems: action?.payload,
      };
    case ADD_TO_SELECTED_LIST:
      let addedList = [...state.selectedItems];
      const itemInCart = addedList.find(item => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        addedList.push({...action.payload, quantity: 1});
      }
      return {
        ...state,
        selectedItems: addedList,
        totalQuantity: state.totalQuantity + 1,
        totalAmount: state.totalAmount + action?.payload?.unit_price,
      };
    case REMOVE_FROM_SELECTED_LIST:
      let removedList = [...state.selectedItems];
      const item = removedList.find(itm => itm.id === action?.payload?.id);
      if (item && item.quantity && item.quantity > 1) {
        item.quantity--;
      } else {
        removedList = removedList.filter(itm => itm.id !== action.payload.id);
      }
      return {
        ...state,
        selectedItems: removedList,
        totalQuantity: state.totalQuantity !== 0 ? state.totalQuantity - 1 : 0,
        totalAmount:
          state.totalAmount !== 0
            ? state.totalAmount - action?.payload?.unit_price
            : 0,
      };
    case CLEAR_CART:
      return {
        ...state,
        selectedItems: [],
        totalQuantity: 0,
        totalAmount: 0,
      };

    default:
      return state;
  }
};

export default shoppingList;
