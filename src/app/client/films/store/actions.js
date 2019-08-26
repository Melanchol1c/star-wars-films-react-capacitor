import { fetchAllFilms } from '../services/filmsService';
import { SET_ALL_FILMS } from './actionTypes';

/** Fetch all films and set it in store thunk. */
export const loadFilms = () => async dispatch => {
  const films = await fetchAllFilms();

  dispatch({ type: SET_ALL_FILMS, payload: films });
};

/** Reset all films from store action. */
export const resetFilms = () => ({
  type: SET_ALL_FILMS,
  payload: [],
});
