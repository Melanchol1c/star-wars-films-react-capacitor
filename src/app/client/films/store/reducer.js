import { SET_ALL_FILMS } from './actionTypes';

const initialState = {
  films: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ALL_FILMS:
      return { ...state, films: payload };

    default:
      return state;
  }
};
