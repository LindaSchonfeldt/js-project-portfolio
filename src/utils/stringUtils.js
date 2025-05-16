/**
 * Converts a string to a URL/ID-safe format
 * Removes special characters and spaces, converts to lowercase
 *
 * @param {string} str - The string to convert
 * @returns {string} ID-safe string (only lowercase letters and numbers)
 * @example
 * // Returns "uxui"
 * makeSafeId("UX/UI")
 */
export const makeSafeId = (str) => str.toLowerCase().replace(/[^a-z0-9]+/g, '')
