import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { IonButton, IonText } from '@ionic/react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // ES6

import { LOGIN_FORM } from '../store/formTypes';
import { required, minLength, email } from '../../../helpers';
import FormControl from '../../../components/FormControl';
import styles from './auth-forms.module.css';

const minLengthValidator = minLength('Password', 6);

/** Login form component. */
let LoginForm = ({ handleSubmit, isLoading, error }) => {
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
      <div className={styles.formActions}>
        <IonButton disabled={isLoading} type="submit" size="small">
          Login
        </IonButton>
        <span>
          or{' '}
          <Link to="/register" className="link">
            register
          </Link>
        </span>
      </div>
      <div className="tac mt-10">
        <IonText color="danger">{error}</IonText>
      </div>
    </form>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

LoginForm = reduxForm({
  form: LOGIN_FORM,
})(LoginForm);

export default LoginForm;
