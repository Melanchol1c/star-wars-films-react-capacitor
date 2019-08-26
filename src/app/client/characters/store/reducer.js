import { SET_ALL_CHARACTERS } from './actionTypes';

const initialState = {
  characters: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ALL_CHARACTERS:
      return { ...state, characters: payload };

    default:
      return state;
  }
};
