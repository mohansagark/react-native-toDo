import {combineReducers} from 'redux';
import counter from './counterReducer';

const appReducer = combineReducers({
  counter,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
