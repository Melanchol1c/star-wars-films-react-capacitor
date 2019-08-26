import { SET_PAGE_TITLE } from './actionTypes';

const initialState = {
  pageTitle: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PAGE_TITLE:
      return { ...state, pageTitle: payload };

    default:
      return state;
  }
};
