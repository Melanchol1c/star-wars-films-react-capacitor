import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadFilms, resetFilms } from '../store/actions';
import PlaceholderListItems from '../../../../components/PlaceholderListItems';
import FilmsList from '../components/FilmsList';
import usePageTitle from '../../../../hooks/usePageTitle';

/** Films page component. */
export default function FilmsPage() {
  const dispatch = useDispatch();
  const films = useSelector(state => state.films.films);

  const placeholderElements = [];
  const placeholderElemetParams = [
    { animated: true, width: '60%' },
    { animated: true, width: '70%' },
    { animated: true, width: '40%' },
  ];

  /** Change page title effect. */
  usePageTitle('All films');

  /**
   * Side effect loading films and reset in after
   * component destruction.
   */
  useEffect(() => {
    dispatch(loadFilms());
    return () => dispatch(resetFilms());
  }, [dispatch]);

  /** Fill placeholer items. */
  for (let i = 0; i <= 3; i++) {
    placeholderElements.push(
      <PlaceholderListItems fields={placeholderElemetParams} />,
    );
  }

  return <FilmsList films={films} placeholderElements={placeholderElements} />;
}
