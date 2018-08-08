import { createStore, applyMiddleware } from 'redux';
import createReducer from './modules';
import { fromJS } from 'immutable';
import thunk from 'redux-thunk';


export default function configureStore(initialState = {}) {
    const store = createStore(
        createReducer(),
        fromJS(initialState),
        applyMiddleware(thunk)
    );

    return store;
};