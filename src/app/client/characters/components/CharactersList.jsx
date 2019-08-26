import React, { Fragment } from 'react';
import { IonLabel, IonCard, IonCardContent } from '@ionic/react';
import { List } from 'react-virtualized';
import PropTypes from 'prop-types';

import useTheme from '../../../../hooks/useTheme';

/** Characters list component. */
function CharactersList({ characters, placeholderElements }) {
  const { text, content } = useTheme();

  const width = window.innerWidth;
  const rowHeight = 130;
  const height = window.innerHeight;

  const CharactersListItem = ({ index, key, style }) => (
    <div key={key} style={style}>
      <IonCard color={content}>
        <IonCardContent>
          <IonLabel color={text}>
            <h2>{characters[index].name}</h2>
            <h3>{characters[index].birthYear}</h3>
            <p>{characters[index].gender}</p>
          </IonLabel>
        </IonCardContent>
      </IonCard>
    </div>
  );

  return (
    <Fragment>
      {characters.length ? (
        <List
          style={{ paddingBottom: '125px' }}
          width={width}
          height={height}
          rowHeight={rowHeight}
          rowRenderer={CharactersListItem}
          rowCount={characters.length}
        />
      ) : (
        placeholderElements.map((element, i) => (
          <Fragment key={i}>{element}</Fragment>
        ))
      )}
    </Fragment>
  );
}

CharactersList.propTypes = {
  characters: PropTypes.array.isRequired,
  placeholderElements: PropTypes.array,
};

export default CharactersList;
