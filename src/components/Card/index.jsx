import React, { PureComponent } from 'react';

class Card extends PureComponent {
  render() {
    const { img, cardId, onCardClick, name } = this.props;
    return (
      <div className="card-image" key={cardId}>
        <img src={img} alt={name} onClick={() => onCardClick(cardId)} />
      </div>
    );

  }
}

export default Card;