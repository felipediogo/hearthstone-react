import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';
import {
  BrowserRouter as Router,
  // Route,
  // Link
} from 'react-router-dom';


const store = configureStore();


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>

  , document.getElementById('root'));
registerServiceWorker();
