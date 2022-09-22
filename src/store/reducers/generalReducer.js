import {SET_THEME_COLOR, START_LOADER, STOP_LOADER} from '../actions/types';

const initialState = {
  themecolor: '#ffffff',
  loading: false,
};

const general = (state = initialState, action) => {
  switch (action?.type) {
    case SET_THEME_COLOR:
      return {
        ...state,
        themecolor: action?.payload,
      };

    case START_LOADER:
      return {
        ...state,
        loading: true,
      };

    case STOP_LOADER:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default general;
