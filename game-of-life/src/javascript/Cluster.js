import React, { Component } from 'react';
import Cell from './Cell'

import random_terminal_state from '../utils/Utils'

import '../css/Cluster.css'

class Cluster extends Component {
  constructor(props) {
    super(props);

    this.setState({
      cluster: this.populate_cluster
    })
  }

  populateCluster() {
    let cluster =[];

    // If this number is changed, we have to change the
    // grid-template-rows and grid-template-columns onthe Cluster.css file.
    const cluster_dimension = 5;

    for (let i = 0; i < cluster_dimension; i++) {
      let cluster_row = [];

      for (let j = 0; j < cluster_dimension; j++) {
        cluster_row.push(this.renderCell(random_terminal_state))
      }

      cluster.push(cluster_row)
    }

    return cluster;
  }

  renderCell(state) {
    return <Cell state={state}/>
  }

  renderCluster() {

  }

  render() {
    return (
        <div className='cluster'>
          { this.populateCluster() }
        </div>
    );
  }
}

export default Cluster;
