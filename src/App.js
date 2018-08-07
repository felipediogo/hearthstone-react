import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardPage from './containers/CardPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <CardPage />
        {/* <Select selectedOption="" placeholder="Deck set" options={[1,2,3]} /> */}
      </div>
    );
  }
}

export default App;
