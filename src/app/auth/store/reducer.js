import { SET_USER, RESET_USER } from './actionTypes';

const initialState = {
  user: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return { ...state, user: payload };

    case RESET_USER:
      return { ...state, user: {} };

    default:
      return state;
  }
};
