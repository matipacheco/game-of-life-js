import { randomTerminalState, intermediateStates, nextState } from './StateUtils'

/**
 * Initial setup method. It creates a random cell cluster
 * @returns {Array}
 */
function populateCluster(clusterDimension) {
  let cluster =[];

  for (let i = 0; i < clusterDimension; i++) {
    let clusterRow = [];

    for (let j = 0; j < clusterDimension; j++) {
      clusterRow.push(randomTerminalState())
    }

    cluster.push(clusterRow)
  }

  return cluster;
}

/**
 * Method that changes the state of the cells whose state it's an intermediate state
 * @param cluster
 */
function liveOrDie(cluster) {
  return cluster.map((state) => {
    return (intermediateStates().includes(state) ? nextState(state) : state)
  });
}

export { populateCluster, liveOrDie }