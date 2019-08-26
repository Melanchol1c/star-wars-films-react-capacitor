import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonLoading,
} from '@ionic/react';
import { SubmissionError } from 'redux-form';

import { loginWithEmailAndPassword } from '../store/actions';
import { LoginForm } from '../components';
import useTheme from '../../../hooks/useTheme';

/** Login page component. */
export default function LoginPage({ history }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { content, text } = useTheme();

  /**
   * Login method using login thunk, manipulating loading state and router.
   *
   * @param {string} email User email.
   * @param {string} password User password.
   */
  const login = async ({ email, password }) => {
    setLoading(true);
    try {
      await dispatch(loginWithEmailAndPassword(email, password));
      setLoading(false);
      history.push('/films');
    } catch (error) {
      setLoading(false);
      throw new SubmissionError({ _error: 'Wrong email or password' });
    }
  };

  return (
    <IonCard color={content}>
      <IonCardHeader>
        <IonCardSubtitle color={text}>
          and we will share cookies with you ^^
        </IonCardSubtitle>
        <IonCardTitle className="tac m-10">Login</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <LoginForm onSubmit={login} isLoading={loading} />
      </IonCardContent>

      <IonLoading isOpen={loading} duration={5000} message={'Loading...'} />
    </IonCard>
  );
}
