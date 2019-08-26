import { login, register, logout } from '../services/authService';
import { SET_USER, RESET_USER } from './actionTypes';

/**
 * Action setting user data in store.
 *
 * @param {object} payload User data object.
 */
export const setUserData = payload => ({
  type: SET_USER,
  payload: {
    email: payload.email,
    id: payload.uid,
    isAdmin: payload.email === process.env.REACT_APP_ADMIN_EMAIL,
  },
});

/**
 * Login thunk.
 *
 * @param {string} email User email.
 * @param {string} password User password.
 */
export const loginWithEmailAndPassword = (
  email,
  password,
) => async dispatch => {
  try {
    const data = await login(email, password);

    dispatch({
      type: SET_USER,
      payload: {
        email: data.user.email,
        id: data.user.uid,
        isAdmin: data.user.email === process.env.REACT_APP_ADMIN_EMAIL,
      },
    });

    return Promise.resolve();
  } catch (error) {
    return Promise.reject();
  }
};

/**
 * Register thunk.
 *
 * @param {string} email User email.
 * @param {string} password User password.
 */
export const registerWithEmailAndPassword = (
  email,
  password,
) => async dispatch => {
  try {
    const data = await register(email, password);

    dispatch({
      type: SET_USER,
      payload: {
        email: data.user.email,
        id: data.user.uid,
        isAdmin: data.user.email === process.env.REACT_APP_ADMIN_EMAIL,
      },
    });

    return Promise.resolve();
  } catch (error) {
    return Promise.reject();
  }
};

/** Logout thunk */
export const signOut = () => async dispatch => {
  try {
    await logout();

    dispatch({
      type: RESET_USER,
    });

    return Promise.resolve();
  } catch (error) {
    return Promise.reject();
  }
};
