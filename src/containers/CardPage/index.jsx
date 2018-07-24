import React, { Component } from 'react';
import CardTable from '../../components/CardTable';
import axios from 'axios';
import CardFilter from '../../components/CardFilter';

const request = axios.create({
  baseURL: 'http://localhost:5000/',
  timeout: 1000
});

class CardPage extends Component {
  constructor(...args) {
    super(...args);
    this.state = { cards: [], card: {}, filter: { cardSets: [], types: [], factions: [], races: [], rarities: [] } };
  }

  componentDidMount() {
    this.loadInformation();
  }

  onCardClick(cardId) {
    const cards = this.state.cards.map(card => {
      card.show = cardId === card.cardId && !card.show;
      return card;
    });
    this.setState({ cards });
  }

  loadInformation = () => {
    request({
      method: 'get',
      url: '/cards'
    })
      .then(({ data }) => data)
      .then(cards => this.setState({ cards: cards.Basic }));
  };

  render() {
    return (
      <div className="card-page">
        <CardFilter {...this.state.filter} />
        <CardTable cards={this.state.cards} onCardClick={this.onCardClick.bind(this)} />
      </div>
    );
  }
}

export default CardPage;