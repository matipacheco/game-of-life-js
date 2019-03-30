import Cell from './Cell'
import '../css/Cluster.css'

import React, { Component } from 'react'
import { populateCluster } from '../utils/GameUtils'


class Cluster extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cluster: populateCluster()
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
