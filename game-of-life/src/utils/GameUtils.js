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

function liveOrDie(cluster) {
  
}

/*
function terminate_intermediate_cells(cluster_grid) {
  for (let row_index = 0; row_index < cluster_dimension; row_index++) {
    for (let col_index = 0; col_index < cluster_dimension; col_index) {

      let cell = cluster_grid[row_index][col_index];

      if (intermediate_states().includes(cell.state)){
        cell.state = next_state(cell.state);
        change_cell_color(get_cell_grid(row_index, col_index), cell);
      }
    }
  }
}*/

export { populateCluster, liveOrDie }