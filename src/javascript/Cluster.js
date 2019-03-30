import Cell from './Cell'
import '../css/Cluster.css'

import React, { Component } from 'react'
import { populateCluster, gameOfLife, liveOrDie } from '../utils/GameUtils'


class Cluster extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cluster: populateCluster()
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
        () => this.cycle(),
        1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  cycle() {
    let newCluster = gameOfLife(this.state.cluster);

    this.setState({
      cluster: liveOrDie(newCluster)
    });
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
