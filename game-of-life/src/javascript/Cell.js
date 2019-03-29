import React, { Component } from 'react';
import '../css/Cell.css'

class Cell extends Component {
  render() {
    return (
      <div className='cell'
           key={ this.props.index }
           style={{ backgroundColor: (this.props.state === 0 ? 'black' : 'white') }}>
      </div>
    );
  }
}

export default Cell;
