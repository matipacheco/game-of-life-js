import '../css/Cell.css'
import React, { Component } from 'react'

import { deadStates } from '../utils/StateUtils'

// If you want more crazy version of the cluster, change _red_ for _randomColor()_
// import { randomColor } from '../utils/Utils'

class Cell extends Component {
  render() {
    return (
      <div className='cell'
           key={ this.props.index }
           style={{ backgroundColor: (deadStates().includes(this.props.state) ? 'red' : 'black') }}>
      </div>
    );
  }
}

export default Cell;
