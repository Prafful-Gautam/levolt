import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import essayReducer from './essay/reducer';

const store = createStore(essayReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;