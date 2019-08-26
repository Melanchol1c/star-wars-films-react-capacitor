import React from 'react';
import { IonInput, IonText, IonLabel } from '@ionic/react';
import PropTypes from 'prop-types';

/** Form input wrapper component. */
function FormControl({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) {
  return (
    <div>
      <div>
        <IonLabel>{label}</IonLabel>
        <div className="mb-20">
          <IonInput {...input} placeholder={label} type={type} />
          {touched &&
            ((error && (
              <IonText color="danger">
                <p>{error}</p>
              </IonText>
            )) ||
              (warning && (
                <IonText color="danger">
                  <p>{warning}</p>
                </IonText>
              )))}
        </div>
      </div>
    </div>
  );
}

FormControl.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  touched: PropTypes.bool,
  error: PropTypes.string,
  warning: PropTypes.string,
};

export default FormControl;
