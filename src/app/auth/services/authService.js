import firebase from 'firebase/app';

/**
 * Method using firebase SDK to login.
 * @param {string} email User email.
 * @param {string} password User password.
 */
export const login = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);

/**
 * Method using firebase SDK to register.
 * @param {string} email User email.
 * @param {string} password User password.
 */
export const register = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password);

/** Method using firebase SDK to logout. */
export const logout = () => firebase.auth().signOut();

/** Method using firebase SDK to get current user data. */
export const getCurrentUser = () => firebase.auth().currentUser;
