import { clusterDimension } from './Constants'

export default function toMatrix(array, dimension = clusterDimension) {
  return array.reduce((rows, key, index) => (index % dimension === 0 ? rows.push([key]) : rows[rows.length-1].push(key)) && rows, []);
}