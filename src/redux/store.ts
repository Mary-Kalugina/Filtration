import { combineReducers, createStore } from 'redux';
import { inputDataReduser } from './inputDataReduser';
import { cardsReduser } from './cardsReduser';
import { composeWithDevTools } from 'redux-devtools-extension';
import {editReduser} from './editReduser';
import { filter } from './filter';

const rootReducer = combineReducers({
  inputDataReduser,
  cardsReduser,
  editReduser,
  filter
});

export const store = createStore(rootReducer, composeWithDevTools());
