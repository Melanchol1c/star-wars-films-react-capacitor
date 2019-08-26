/**
 * Check any object on emptiness.
 *
 * @param {object} obj Any object.
 */
export const checkEmptyObject = obj =>
  Object.entries(obj).length === 0 && obj.constructor === Object;
