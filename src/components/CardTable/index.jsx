import React, { Component } from 'react';
import Card from '../Card';
import CardLabel from '../CardLabel';

class CardTable extends Component {
  render() {
    const { cards, onCardClick } = this.props;
    const style = { marginLeft: 50 };
    return (
      <div style={style}>
        {cards.map(card => (
          <div className="card-table-row" key={card.cardId}>
            <Card {...card} onCardClick={onCardClick}  />
            <CardLabel card={card} show={card.show} />
          </div>
        ))}
      </div>
    );
  }
}

export default CardTable;