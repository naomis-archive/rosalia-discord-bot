/**
 * Returns a random item from the provided array.
 *
 * @param {any[]} arr The array from which random item has to be picked.
 * @returns {any} A random item from the input array.
 */
export const getRandomValue = <T>(arr: T[]): T => {
  return arr[Math.floor(Math.random() * arr.length)];
};
