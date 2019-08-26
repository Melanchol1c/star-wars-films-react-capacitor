import React from 'react';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
} from '@ionic/react';
import PropTypes from 'prop-types';

/** Client layout header component. */
function ClientLayoutHeader({ theme, pageTitle }) {
  return (
    <IonHeader>
      <IonToolbar color={theme.navbar} style={{ paddingTop: '30px' }}>
        <IonButtons slot="end">
          <IonMenuButton />
        </IonButtons>

        <IonTitle color={theme.text}>Kirizey SW Films</IonTitle>
      </IonToolbar>

      <IonToolbar color={theme.navbar}>
        <IonTitle color={theme.text}>{pageTitle}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
}

ClientLayoutHeader.propTypes = {
  theme: PropTypes.object,
  pageTitle: PropTypes.string,
};

export default ClientLayoutHeader;
