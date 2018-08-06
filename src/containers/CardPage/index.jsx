import React, { Component } from 'react';
import CardTable from '../../components/CardTable';
import axios from 'axios';
import CardFilter from '../../components/CardFilter';
import Select from '../../components/Select';

import ComponentTest from './ComponentTest';
import PureComponentTest from './PureComponentTest';

const request = axios.create({
  baseURL: 'http://localhost:5000/',
  timeout: 1000
});

class CardPage extends Component {
  constructor(...args) {
    super(...args);
    this.state = { cards: [], card: {}, filter: { cardSets: [], types: [], factions: [], races: [], rarities: [] }, field: 'felipe testing', count: 0 };
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

  onTestClick = () => {
    console.log('setting state');
    this.setState({ field: `${this.state.count}`, count: this.state.count + 1 });
  }

  loadInformation = () => {
    request({
      method: 'get',
      url: '/cards'
    })
      .then(({ data }) => data)
      .then(data => {
        console.log(Object.keys(data));
        return data;
      })
      .then(cards => this.setState({ cards: cards.Basic }));
  };

  render() {
    return (
      <div className="card-page">
        <ComponentTest field={this.state.field} />
        <PureComponentTest field={this.state.field} />
        <CardFilter {...this.state.filter} onClick={this.onTestClick} />
        <CardTable cards={this.state.cards} onCardClick={this.onCardClick.bind(this)} />
        <Select selectedOption="asd" placeholder="Deck set" options={[]} />

      </div>
    );
  }
}

export default CardPage;