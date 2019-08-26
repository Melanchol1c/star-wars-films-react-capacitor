import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { reducer as auth } from '../app/auth';
import { reducer as layout } from '../layouts';
import { reducer as films } from '../app/client/films';
import { reducer as characters } from '../app/client/characters';
import { reducer as settings } from '../app/client/settings';

const rootReducer = combineReducers({
  auth,
  layout,
  films,
  characters,
  settings,
  form: formReducer,
});

export default rootReducer;
