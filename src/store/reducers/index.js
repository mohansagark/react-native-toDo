import {combineReducers} from 'redux';
import counter from './counterReducer';
import shoppingList from './shoppingListReducer';

const appReducer = combineReducers({
  counter,
  shoppingList,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
