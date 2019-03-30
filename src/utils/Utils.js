import { clusterDimension } from './Constants'
import { colorPalette } from './Constants'

/**
 * Method that transform an array on a N x N matrix
 * @param array
 * @param dimension
 * @returns {*}
 */
export function toMatrix(array, dimension = clusterDimension) {
  return array.reduce((rows, key, index) => (index % dimension === 0 ? rows.push([key]) : rows[rows.length-1].push(key)) && rows, []);
}


export function randomColor() {
  return colorPalette[Math.floor(Math.random() * colorPalette.length)]
}