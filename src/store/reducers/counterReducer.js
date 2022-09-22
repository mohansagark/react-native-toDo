import {
  CLEAR_COUNTER,
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
} from '../actions/types';

const initialState = {
  count: 0,
  loading: false,
};

const counter = (state = initialState, action) => {
  switch (action?.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT_COUNTER:
      return {
        ...state,
        count: state.count - 1,
      };

    case CLEAR_COUNTER:
      return {
        ...state,
        count: 0,
      };

    default:
      return state;
  }
};

export default counter;
