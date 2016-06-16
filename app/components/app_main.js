import React, { Component, PropTypes } from 'react';

class App_main extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default App_main;
