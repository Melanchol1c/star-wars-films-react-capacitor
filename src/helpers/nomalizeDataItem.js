import inflection from 'inflection';

/**
 * Method for processing specific data objects.
 *
 * @param {object} dataItem Data object.
 * @param {string} index Item id.
 * @returns {object} Return processed data object.
 */
const nomalizeDataItem = (dataItem, index) => {
  const filmData = dataItem.fields;

  const film = {};
  Object.keys(filmData).map(key => {
    film['id'] = index.toString();
    return (film[inflection.camelize(key, true)] = filmData[key]);
  });

  return film;
};

export default nomalizeDataItem;
