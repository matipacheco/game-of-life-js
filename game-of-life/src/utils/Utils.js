import randomTerminalState from './StateUtils'

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
