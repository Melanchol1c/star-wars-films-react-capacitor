import React from 'react';
import { IonContent } from '@ionic/react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { signOut } from '../../app/auth/store/actions';
import ClientLayoutHeader from './components/ClientLayoutHeader';
import ClientLayoutSideMenu from './components/ClientLayoutSideMenu';
import useTheme from '../../hooks/useTheme';
import useUser from '../../hooks/useUser';

/** Client layout component. */
function ClientLayout({ children }) {
  const pageTitle = useSelector(state => state.layout.pageTitle);
  const { email } = useUser();
  const dispatch = useDispatch();
  const theme = useTheme();

  /** Logout method using store thunk. */
  const logout = async () => {
    try {
      await dispatch(signOut());
      children.props.history.push('/login');
    } catch (error) {}
  };

  return (
    <IonContent>
      <ClientLayoutHeader theme={theme} pageTitle={pageTitle} />

      <ClientLayoutSideMenu email={email} theme={theme} logout={logout} />

      <IonContent color={theme.background} id="content">
        {children}
      </IonContent>
    </IonContent>
  );
}

ClientLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ClientLayout;
