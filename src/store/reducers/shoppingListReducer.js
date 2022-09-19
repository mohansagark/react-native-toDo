import {
  ADD_TO_SELECTED_LIST,
  CLEAR_CART,
  REMOVE_FROM_SELECTED_LIST,
  SET_SHOPPING_LIST,
} from '../actions/types';

const initialState = {
  availableItems: [
    {
      id: '#1',
      name: 'Apples',
      unit_price: 20,
      measure: 'kg',
      thumbnail:
        'https://media.istockphoto.com/photos/red-apple-picture-id184276818?k=20&m=184276818&s=612x612&w=0&h=QxOcueqAUVTdiJ7DVoCu-BkNCIuwliPEgtAQhgvBA_g=',
    },
    {
      id: '#2',
      name: 'Bananas',
      unit_price: 5,
      measure: 'piece',
      thumbnail:
        'https://img.freepik.com/premium-photo/banana-bunch-isolated_88281-1027.jpg?w=2000',
    },
    {
      id: '#3',
      name: 'Oranges',
      unit_price: 60,
      measure: 'kg',
      thumbnail:
        'https://cdn.pixabay.com/photo/2016/02/23/17/42/orange-1218158_1280.png',
    },
    {
      id: '#4',
      name: 'Pineapple',
      unit_price: 50,
      measure: 'piece',
      thumbnail:
        'https://greenvillefarm.in/wp-content/uploads/2021/01/greenville-pineapple.jpg',
    },
  ],
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
