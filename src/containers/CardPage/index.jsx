import React, { Component } from 'react';
import CardTable from '../../components/CardTable';
import axios from 'axios';
import CardFilter from '../../components/CardFilter';

class CardPage extends Component {
  constructor(...args) {
    super(...args);
    this.state = { cards: [], card: {} };
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: 'http://localhost:5000/cards'
    })
      .then(({ data }) => data)
      .then(cards => this.setState({ cards: cards.Basic }));
  }

  onCardClick(cardId) {
    const cards = this.state.cards.map(card => {
      card.show = cardId === card.cardId && !card.show;
      return card;
    });
    this.setState({ cards });
  }

  render() {
    return (
      <div className="card-page">
        <CardFilter />
        <CardTable cards={this.state.cards} onCardClick={this.onCardClick.bind(this)} />
      </div>
    );
  }
}

export default CardPage;