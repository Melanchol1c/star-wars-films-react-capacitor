import {
  SET_THEME,
  SET_NAVBAR_COLOR,
  SET_TEXT_COLOR,
  SET_BACKGROUND_COLOR,
  SET_SIDEBAR_COLOR,
  SET_CONTENT_COLOR,
} from './actionTypes';

const initialState = {
  theme: {
    navbar: 'light',
    text: 'dark',
    background: 'light',
    sidebar: 'light',
    content: 'light',
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_THEME:
      return { ...state, theme: payload };

    case SET_NAVBAR_COLOR:
      return { ...state, theme: { ...state.theme, navbar: payload } };

    case SET_TEXT_COLOR:
      return { ...state, theme: { ...state.theme, text: payload } };

    case SET_BACKGROUND_COLOR:
      return { ...state, theme: { ...state.theme, background: payload } };

    case SET_SIDEBAR_COLOR:
      return { ...state, theme: { ...state.theme, sidebar: payload } };

    case SET_CONTENT_COLOR:
      return { ...state, theme: { ...state.theme, content: payload } };

    default:
      return state;
  }
};
