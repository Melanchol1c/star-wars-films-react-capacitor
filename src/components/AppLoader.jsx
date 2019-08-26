import React, { Fragment, useState, useEffect } from 'react';
import firebase from 'firebase/app';
import { useDispatch } from 'react-redux';
import { IonSpinner } from '@ionic/react';
import PropTypes from 'prop-types';

import { setUserData } from '../app/auth/store/actions';
import { loadTheme } from '../app/client/settings/store/actions';

/** Component for loading data necessary for application working. */
function AppLoader({ children }) {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  /** Side effect loading theme settings. */
  useEffect(() => {
    dispatch(loadTheme());
  }, [dispatch]);

  /** Side effect trying loading data from backend before
   * application will mount.
   */
  useEffect(() => {
    firebase.auth().onAuthStateChanged(userData => {
      if (userData) dispatch(setUserData(userData));

      setLoading(false);
    });
  }, [dispatch]);

  const styles = {
    loaderWrapper: {
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    spinner: {
      width: '120px',
      height: '120px',
    },
  };

  return loading ? (
    <div style={styles.loaderWrapper}>
      <IonSpinner name="crescent" style={styles.spinner} />
    </div>
  ) : (
    <Fragment>{children}</Fragment>
  );
}

AppLoader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default AppLoader;
