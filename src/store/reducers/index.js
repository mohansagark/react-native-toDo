import {combineReducers} from 'redux';
import counter from './counterReducer';
import shoppingList from './shoppingListReducer';
import weather from './weatherReducer';
import general from './generalReducer';

const appReducer = combineReducers({
  counter,
  shoppingList,
  weather,
  general,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
