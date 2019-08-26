import React from 'react';
import { IonSelect, IonSelectOption, IonLabel } from '@ionic/react';
import useTheme from '../../../../hooks/useTheme';

export default function SettingsColorChanger({
  title,
  handleColorChange,
  defaultValue,
  colors,
}) {
  const { text } = useTheme();

  return (
    <div style={{ marginBottom: '15px' }}>
      <IonLabel color={text}>{title}</IonLabel>

      <IonSelect
        onIonChange={handleColorChange}
        interface="alert"
        placeholder="Text"
        okText="Okay"
        cancelText="Dismiss"
        value={defaultValue}
        style={{ paddingLeft: 0 }}
      >
        {colors.map((color, i) => (
          <IonSelectOption value={color.value} key={i}>
            {color.displayName}
          </IonSelectOption>
        ))}
      </IonSelect>
    </div>
  );
}
