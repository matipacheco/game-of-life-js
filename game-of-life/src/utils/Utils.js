function randomTerminalState() {
  return terminalStates()[Math.floor(Math.random() * 2)];
}

function nextState(state) {
  return (state + 1) % 4;
}

function aliveStates() {
  return [2, 3];
}

function deadStates() {
  return [0, 1];
}

function terminalStates() {
  return [0, 2];
}

function intermediateStates() {
  return [1, 3];
}

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

export default populateCluster;