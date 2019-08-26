import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadCharacters, resetCharacters } from '../store/actions';
import PlaceholderListItems from '../../../../components/PlaceholderListItems';
import CharactersList from '../components/CharactersList';
import usePageTitle from '../../../../hooks/usePageTitle';

/** Characters page component. */
export default function CharactersPage() {
  const dispatch = useDispatch();
  const characters = useSelector(state => state.characters.characters);

  const placeholderElements = [];
  const placeholderElemetParams = [
    { animated: true, width: '60%' },
    { animated: true, width: '40%' },
    { animated: true, width: '30%' },
  ];

  /** Set page title effect. */
  usePageTitle('All characters');

  /**
   * Side effect loading characters and reset in after
   * component destruction.
   */
  useEffect(() => {
    dispatch(loadCharacters());
    return () => dispatch(resetCharacters());
  }, [dispatch]);

  /** Fill placeholer items. */
  for (let i = 0; i <= 6; i++) {
    placeholderElements.push(
      <PlaceholderListItems fields={placeholderElemetParams} />,
    );
  }

  return (
    <CharactersList
      characters={characters}
      placeholderElements={placeholderElements}
    />
  );
}
