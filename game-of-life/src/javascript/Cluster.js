import React, { Component } from 'react';
import Cell from './Cell'

import randomTerminalState from '../utils/Utils'

import '../css/Cluster.css'

class Cluster extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cluster: this.populateCluster(10)
    }
  }

  populateCluster(clusterDimension) {
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

  renderCell(state) {
    return <Cell state={state}/>
  }

  render() {
    let cluster = this.state.cluster.flat().map((state) => {
      return this.renderCell(state)
    });

    return (
        <div className='cluster'>
          { cluster }
        </div>
    );
  }
}

export default Cluster;
