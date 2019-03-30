import { clusterDimension } from './Constants'

/**
 * Method that transform an array on a N x N matrix
 * @param array
 * @param dimension
 * @returns {*}
 */
export default function toMatrix(array, dimension = clusterDimension) {
  return array.reduce((rows, key, index) => (index % dimension === 0 ? rows.push([key]) : rows[rows.length-1].push(key)) && rows, []);
}