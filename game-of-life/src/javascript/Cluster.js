import React, { Component } from 'react';
import Cell from './Cell'

import populateCluster from '../utils/Utils'

import '../css/Cluster.css'

class Cluster extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cluster: populateCluster(10)
    }
  }

  renderCell(index, state) {
    return <Cell key={ index } state={ state }/>
  }

  renderCluster() {
    return this.state.cluster.flat().map((state, index) => {
      return this.renderCell(index, state)
    });
  }

  render() {
    return (
        <div className='cluster'>
          { this.renderCluster() }
        </div>
    );
  }
}

export default Cluster;
