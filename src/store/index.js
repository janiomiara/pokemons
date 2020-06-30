import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers, createStore, applyMiddleware } from 'redux';

import pokemonsReducer from '../components/cards/redux/pokemonsRedux';

const reducer = combineReducers({
    pokemons: pokemonsReducer
});

const store = createStore(reducer,  composeWithDevTools( applyMiddleware(thunk)));

export default store;

