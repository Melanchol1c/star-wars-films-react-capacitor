import React from 'react';
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonText,
} from '@ionic/react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

/** Client layout side menu component. */
function ClientLayoutSideMenu({ email, theme, logout }) {
  return (
    <IonMenu side="end" contentId="content" type="overlay" swipeGesture={true}>
      <IonHeader>
        <IonToolbar color={theme.sidebar} style={{ paddingTop: '30px' }}>
          <IonTitle>{email}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color={theme.sidebar}>
        <IonList>
          <IonItem color={theme.content}>
            <NavLink to="/films" className="unstyled-link" color={theme.text}>
              <IonText color={theme.text}>Films</IonText>
            </NavLink>
          </IonItem>
          <IonItem color={theme.content}>
            <NavLink to="/characters" className="unstyled-link">
              <IonText color={theme.text}>Characters</IonText>
            </NavLink>
          </IonItem>
          <IonItem color={theme.content}>
            <NavLink to="/settings" className="unstyled-link">
              <IonText color={theme.text}>Settings</IonText>
            </NavLink>
          </IonItem>
          <IonItem color={theme.content}>
            <IonText color={theme.text} onClick={logout}>
              Logout
            </IonText>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
}

ClientLayoutSideMenu.propTypes = {
  email: PropTypes.string,
  theme: PropTypes.object,
  logout: PropTypes.func,
};

export default ClientLayoutSideMenu;
