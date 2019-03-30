import {
  randomTerminalState,
  intermediateStates,
  nextState,
  isAlive
} from './StateUtils'

import { toMatrix } from './Utils'
import { clusterDimension } from './Constants'


/**
 * Initial setup method. It creates a random cell cluster
 * @param dimension
 * @returns {Array}
 */
function populateCluster(dimension = clusterDimension) {
  let cluster = [...Array(dimension * dimension).keys()].map(() => {
    return randomTerminalState()
  });

  return toMatrix(cluster);
}


/**
 * Method that counts the number of alive neighbor of a particular cell
 * @param cluster
 * @param rowIndex
 * @param colIndex
 * @returns {number}
 */
function aliveNeighbors(cluster, rowIndex, colIndex) {
  let aliveNeighbors = 0;

  for (let i = rowIndex - 1; i <= (rowIndex + 1); i++) {
    for (let j = colIndex - 1; j <= (colIndex + 1); j++) {

      if (i === rowIndex && j === colIndex) { continue; }

      try {
        let state = cluster[i][j];

        if (state == null) { continue; }
        if (isAlive(state)) { aliveNeighbors++; }
      }
      catch (e) { }
    }
  }

  return aliveNeighbors;
}


/**
 * Method that holds the basic logic of the Game of Life
 * @param cluster
 * @param dimension
 * @returns {*}
 * @constructor
 */
function gameOfLife(cluster, dimension = clusterDimension) {
  let newCluster = [];

  for (let i = 0; i < dimension; i++) {
    for (let j = 0; j < dimension; j++) {

      let state = cluster[i][j];
      let neighbors = aliveNeighbors(cluster, i, j);

      if (isAlive(state)) {
        if ((neighbors <= 1) || (neighbors >= 4)) { newCluster.push(nextState(state)) }
        else { newCluster.push(state) }
      }
      else {
        if (neighbors === 3) { newCluster.push(nextState(state)) }
        else { newCluster.push(state) }
      }
    }
  }

  return toMatrix(newCluster)
}


/**
 * Method that changes the state of the cells whose state it's an intermediate state
 * @param cluster
 */
function liveOrDie(cluster) {
  let finalCluster = cluster.flat().map((state) => {
    return (intermediateStates().includes(state) ? nextState(state) : state)
  });

  return toMatrix(finalCluster)
}


export {
  populateCluster,
  gameOfLife,
  liveOrDie
}