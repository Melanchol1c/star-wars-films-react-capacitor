import { SET_PAGE_TITLE } from './actionTypes';

/**
 * Set page title action.
 *
 * @param {string} payload Page title.
 */
export const setPageTitle = payload => ({
  type: SET_PAGE_TITLE,
  payload,
});
