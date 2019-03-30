import {
  randomTerminalState,
  intermediateStates,
  nextState,
  isAlive
} from './StateUtils'

import toMatrix from './Utils'
import { clusterDimension } from './Constants'


/**
 * Initial setup method. It creates a random cell cluster
 * @returns {Array}
 */
function populateCluster(dimension = clusterDimension) {
  let cluster =[];

  for (let i = 0; i < dimension; i++) {
    let clusterRow = [];

    for (let j = 0; j < dimension; j++) {
      clusterRow.push(randomTerminalState())
    }

    cluster.push(clusterRow)
  }

  return cluster;
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
        let cell = cluster[i][j];

        if (cell == null) { continue; }

        if (isAlive) { aliveNeighbors++; }
      }
      catch (e) { }
    }
  }

  return aliveNeighbors;
}




/**
 * Method that holds the basic logic of the Game of Life
 * @param cluster_grid
 */
function GoL(cluster, dimension = clusterDimension) {
  for (let i = 0; i < dimension; i++) {
    for (let j = 0; j < dimension; j++) {

      let state = cluster[i][j];
      let aliveNeighbors = aliveNeighbors(cluster, i, j);

      if (isAlive(state)) {
        if ((aliveNeighbors <= 1) || (aliveNeighbors >= 4)) {
          state = nextState(state);
        }
      }
      else {
        if (aliveNeighbors === 3) {
          state = nextState(state);
        }
      }
    }
  }
}



/**
 * Method that changes the state of the cells whose state it's an intermediate state
 * @param cluster
 */
function liveOrDie(cluster) {
  let finalCluster = cluster.map((state) => {
    return (intermediateStates().includes(state) ? nextState(state) : state)
  });

  return toMatrix(finalCluster, )
}


export {
  populateCluster,
  liveOrDie
}