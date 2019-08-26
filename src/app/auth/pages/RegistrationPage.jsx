import React, { useState } from 'react';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonLoading,
} from '@ionic/react';
import { useDispatch } from 'react-redux';
import { SubmissionError } from 'redux-form';

import { RegistrationForm } from '../components';
import { registerWithEmailAndPassword } from '../store/actions';
import useTheme from '../../../hooks/useTheme';

/** Registration page component. */
export default function RegistrationPage({ history }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { content, text } = useTheme();

  /**
   * Register method using register thunk, manipulating loading state and router.
   *
   * @param {string} email User email.
   * @param {string} password User password.
   */
  const register = async ({ email, password }) => {
    setLoading(true);
    try {
      await dispatch(registerWithEmailAndPassword(email, password));
      setLoading(false);
      history.push('/films');
    } catch (error) {
      setLoading(false);
      throw new SubmissionError({ _error: 'Server error' });
    }
  };

  return (
    <div>
      <IonCard color={content}>
        <IonCardHeader>
          <IonCardSubtitle color={text}>
            and we will share cookies with you ^^
          </IonCardSubtitle>
          <IonCardTitle className="tac m-10">Registration</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <RegistrationForm onSubmit={register} isLoading={loading} />
        </IonCardContent>

        <IonLoading isOpen={loading} message={'Loading...'} />
      </IonCard>
    </div>
  );
}
