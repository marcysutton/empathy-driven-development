import React, { Component } from 'react'

class LiveRegion extends Component {
  render() {
    return (
      <div id="a11y-toolkit-announcer" 
          aria-live= 'polite'
          style={{
            position: 'absolute',
            left: '-10000px',
            top: 'auto',
            width: '1px',
            height: '1px',
            overflow: 'hidden'
          }}>
      </div>
    )
  }
}

export default LiveRegion