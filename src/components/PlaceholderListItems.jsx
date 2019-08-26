import React from 'react';
import {
  IonLabel,
  IonSkeletonText,
  IonCard,
  IonCardContent,
} from '@ionic/react';
import PropTypes from 'prop-types';

import useTheme from '../hooks/useTheme';

/** Stub component for async rendering data. */
function PlaceholderListItems({ fields }) {
  const { content, text } = useTheme();

  return (
    <IonCard color={content}>
      <IonCardContent>
        <IonLabel>
          {fields.map((item, i) => (
            <IonSkeletonText
              key={i}
              animated={item.animated}
              style={{ width: item.width }}
              color={text}
            />
          ))}
        </IonLabel>
      </IonCardContent>
    </IonCard>
  );
}

PlaceholderListItems.propTypes = {
  fields: PropTypes.array.isRequired,
};

export default PlaceholderListItems;
