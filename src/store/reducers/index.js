import {combineReducers} from 'redux';
import counter from './counterReducer';
import shoppingList from './shoppingListReducer';
import weather from './weatherReducer';

const appReducer = combineReducers({
  counter,
  shoppingList,
  weather,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
