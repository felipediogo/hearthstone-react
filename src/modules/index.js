import { combineReducers } from 'redux';
import cardReducer from './cardPage';

export default function createReducer(asyncReducers) {
    return combineReducers({
      card: cardReducer,
      ...asyncReducers,
    });
  }