import { fetch, nomalizeDataItem } from '../../../../helpers';

/** Fetch all films method. */
export const fetchAllFilms = async () => {
  const data = await fetch('films');

  // Process firebase data to normal.
  const normalizedData = data.map((film, index) =>
    nomalizeDataItem(film, index),
  );
  return normalizedData;
};
