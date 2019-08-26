import { CloudSettings } from '@ionic-native/cloud-settings';

import {
  SET_NAVBAR_COLOR,
  SET_THEME,
  SET_TEXT_COLOR,
  SET_BACKGROUND_COLOR,
  SET_SIDEBAR_COLOR,
  SET_CONTENT_COLOR,
} from './actionTypes';

export const setTheme = payload => ({
  type: SET_THEME,
  payload,
});

export const setNavbarColor = payload => dispatch => {
  dispatch({ type: SET_NAVBAR_COLOR, payload });

  dispatch(uploadTheme());
};

export const setTextColor = payload => dispatch => {
  dispatch({ type: SET_TEXT_COLOR, payload });

  dispatch(uploadTheme());
};

export const setBackgroundColor = payload => dispatch => {
  dispatch({ type: SET_BACKGROUND_COLOR, payload });

  dispatch(uploadTheme());
};

export const setSidebarColor = payload => dispatch => {
  dispatch({ type: SET_SIDEBAR_COLOR, payload });

  dispatch(uploadTheme());
};

export const setContentColor = payload => dispatch => {
  dispatch({ type: SET_CONTENT_COLOR, payload });

  dispatch(uploadTheme());
};

export const loadTheme = () => dispatch => {
  CloudSettings.exists(exists => {
    if (exists) {
      CloudSettings.load(settings => {
        dispatch(setTheme(settings.theme));
      });
    }
  });
};

const uploadTheme = () => (dispatch, getState) => {
  const { settings } = getState();

  CloudSettings.save({ theme: settings.theme }, true);
};
