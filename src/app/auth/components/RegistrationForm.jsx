import React, { useState, useEffect } from 'react';
import { Field, reduxForm } from 'redux-form';
import { IonButton, IonText } from '@ionic/react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { required, minLength, email, checkNestedProps } from '../../../helpers';
import FormControl from '../../../components/FormControl';
import { REGISTRATION_FORM } from '../store/formTypes';
import styles from './auth-forms.module.css';

const minLengthValidator = minLength('Password', 6);

/** Registration form component. */
let RegistrationForm = ({ handleSubmit, isLoading, error }) => {
  const password = useSelector(
    state =>
      checkNestedProps(
        state,
        'form',
        `${REGISTRATION_FORM}`,
        'values',
        'password',
      ) && state.form[`${REGISTRATION_FORM}`].values.password,
  );
  const repeatPassword = useSelector(
    state =>
      checkNestedProps(
        state,
        'form',
        `${REGISTRATION_FORM}`,
        'values',
        'repeatPassword',
      ) && state.form[`${REGISTRATION_FORM}`].values.repeatPassword,
  );

  const [passwordsError, setpasswordsError] = useState(false);

  useEffect(() => {
    password &&
      repeatPassword &&
      setpasswordsError(!(password === repeatPassword));

    return () => setpasswordsError(false);
  }, [password, repeatPassword]);

  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="email"
        component={FormControl}
        type="email"
        disabled={isLoading}
        label="Email"
        validate={[required, email]}
      />
      <Field
        name="password"
        component={FormControl}
        type="password"
        disabled={isLoading}
        label="Password"
        validate={[required, minLengthValidator]}
      />
      <Field
        name="repeatPassword"
        component={FormControl}
        type="password"
        disabled={isLoading}
        label="Repeat password"
        validate={[required, minLengthValidator]}
      />
      <div className={styles.formActions}>
        <IonButton
          disabled={isLoading || passwordsError}
          type="submit"
          size="small"
        >
          Register
        </IonButton>
        <span>
          or{' '}
          <Link to="/login" className="link">
            login
          </Link>
        </span>
      </div>
      <div className="tac mt-10">
        <IonText color="danger">{error}</IonText>
      </div>
      <div className="tac mt-10">
        <IonText color="danger">
          {passwordsError && <div>Password are different</div>}
        </IonText>
      </div>
    </form>
  );
};

RegistrationForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

RegistrationForm = reduxForm({
  form: REGISTRATION_FORM,
})(RegistrationForm);

export default RegistrationForm;
