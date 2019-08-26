import { fetch, nomalizeDataItem } from '../../../../helpers';

/** Fetch all films method. */
export const fetchAllCharacters = async () => {
  const data = await fetch('people');

  // Process firebase data to normal.
  const normalizedData = data.map((film, index) =>
    nomalizeDataItem(film, index),
  );
  return normalizedData;
};
