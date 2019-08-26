import React from 'react';
import { IonContent } from '@ionic/react';
import PropTypes from 'prop-types';

import useTheme from '../hooks/useTheme';

/** Auth layout component. */
function AuthLayout({ children }) {
  const { background } = useTheme();

  const styles = {
    display: 'flex',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <IonContent color={background}>
      <div style={styles}>{children}</div>
    </IonContent>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default AuthLayout;
