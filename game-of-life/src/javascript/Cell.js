import React, { Component } from 'react';
import '../css/Cell.css'

class Cell extends Component {
  render() {
    return (
      <div className='cell' style={{ backgroundColor: (this.props.state === 0 ? 'black' : 'white') }}>
      </div>
    );
  }
}

export default Cell;
