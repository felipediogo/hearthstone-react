import React, { PureComponent } from 'react';

class PureComponentTest extends PureComponent {
  render() {
    const { field } = this.props;
    return (
      <p>{field}</p>
    );
  }
}

export default PureComponentTest;