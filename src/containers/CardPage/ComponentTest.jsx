import React, { Component } from 'react';

class ComponentTest extends Component {
  render() {
    const { field } = this.props;
    return (
      <p>{field}</p>
    );
  }
}

export default ComponentTest;