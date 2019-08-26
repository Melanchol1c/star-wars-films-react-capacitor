import firebase from 'firebase/app';

/**
 * Common method to get data from backend.
 *
 * @param {string} table Name of table need to get data.
 * @param {string} id Optional param of item id need to fetched.
 * @returns {array or object} Return array of data if id param not existing
 *                            or object if id param in arguments.
 */
export const fetch = async (table, id) => {
  const url = id ? `/swapi/${table}/${id}` : `swapi/${table}`;
  const data = (await firebase
    .database()
    .ref(url)
    .once('value')).val();

  return data;
};

/**
 * Remove instance from selected table by id.
 *
 * @param {string} table Table name in DB.
 * @param {string} id Id of instance need to be removed.
 */
export const remove = async (table, id) =>
  await firebase
    .database()
    .ref(`swapi/${table}/${id}`)
    .remove();
