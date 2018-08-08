import React, { Component } from 'react';
import { incrementCount } from './modules/cardPage';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import CardPage from './containers/CardPage';

class App extends Component {
  render() {
    const { card, onAddCounter } = this.props;
    console.log(card.counter);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <input type="button" onClick={onAddCounter} value="CLICK ME" />
        </header>
        <CardPage />
        {/* <Select selectedOption="" placeholder="Deck set" options={[1,2,3]} /> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export const mapDispatchToProps = (dispatch) => ({
  onAddCounter() {
    dispatch(incrementCount())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
