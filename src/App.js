import React from 'react';
import '@ionic/core/css/core.css';
import { HashRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { IonApp } from '@ionic/react';

import './App.css';
import RootRouter from './router';
import rootReducer from './store';
import AppLoader from './components/AppLoader';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware)),
);

/** Root application component. */
function App() {
  return (
    <IonApp>
      <HashRouter>
        <Provider store={store}>
          <AppLoader>
            <RootRouter />
          </AppLoader>
        </Provider>
      </HashRouter>
    </IonApp>
  );
}

export default App;
