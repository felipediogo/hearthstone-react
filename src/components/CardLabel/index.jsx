import React, { PureComponent } from 'react';

class CardLabel extends PureComponent {
  render() {
    const { card, show } = this.props;
    const style = { display: show ? 'block' : 'none' };
    return (
      <div className="card-label" style={style}>
      <p>{card.show}</p>
        <p>{JSON.stringify(card)}</p>
      </div>
    );
  }
}

export default CardLabel;