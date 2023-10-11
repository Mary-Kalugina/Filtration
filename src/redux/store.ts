import { combineReducers, createStore } from 'redux';
import { inputDataReduser } from './inputDataReduser';
import { cardsReduser } from './cardsReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import {editReduser} from './editReduser'

const rootReducer = combineReducers({
  inputDataReduser,
  cardsReduser,
  editReduser
});

export const store = createStore(rootReducer, composeWithDevTools());
