import React, { Fragment } from 'react';
import { IonLabel, IonCard, IonCardContent } from '@ionic/react';
import PropTypes from 'prop-types';

import useTheme from '../../../../hooks/useTheme';

/** Films list component. */
function FilmsList({ films, placeholderElements }) {
  const { text, content } = useTheme();

  return (
    <Fragment>
      {films.length
        ? films.map(film => (
            <IonCard key={film.id} color={content}>
              <IonCardContent>
                <IonLabel color={text}>
                  <h2>{film.title}</h2>
                  <h3>{film.producer}</h3>
                  <p>{film.releaseDate}</p>
                </IonLabel>
              </IonCardContent>
            </IonCard>
          ))
        : placeholderElements.map((element, i) => (
            <Fragment key={i}>{element}</Fragment>
          ))}
    </Fragment>
  );
}

FilmsList.propTypes = {
  films: PropTypes.array.isRequired,
  placeholderElements: PropTypes.array,
};

export default FilmsList;
