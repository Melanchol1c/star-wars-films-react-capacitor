import { fetchAllCharacters } from '../services/charactersService';
import { SET_ALL_CHARACTERS } from './actionTypes';

/** Fetch all characters and set it in store thunk. */
export const loadCharacters = () => async dispatch => {
  const characters = await fetchAllCharacters();

  dispatch({ type: SET_ALL_CHARACTERS, payload: characters });
};

/** Reset all characters from store action. */
export const resetCharacters = () => ({
  type: SET_ALL_CHARACTERS,
  payload: [],
});
