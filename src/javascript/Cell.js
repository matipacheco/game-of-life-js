import '../css/Cell.css'
import React, { Component } from 'react';

import { deadStates } from '../utils/StateUtils'

class Cell extends Component {
  render() {
    return (
      <div className='cell'
           key={ this.props.index }
           style={{ backgroundColor: (deadStates().includes(this.props.state) ? 'white' : 'black') }}>
      </div>
    );
  }
}

export default Cell;
