import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'firebase/auth';
import 'firebase/database';
import firebase from 'firebase/app';

import firebaseConfig from './firebase.config.js';

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
