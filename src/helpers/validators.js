/**
 * Required validator.
 *
 * @param {any} value Field value.
 */
export const required = value =>
  value || typeof value === 'number' ? undefined : 'Field is required';

/**
 * Email validator.
 *
 * @param {string} value Field value.
 */
export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;

/**
 * Min length validator.
 *
 * @param {string} fieldName Field label.
 * @param {number} length Min length on field value.
 */
export const minLength = (fieldName, length) => value =>
  value && value.length < length ? `${fieldName} too short` : undefined;
