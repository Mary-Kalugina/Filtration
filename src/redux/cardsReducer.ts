import { CardType } from "./types";
  
const defaultState: CardType[] = [];

export const cardsReduser = (state = defaultState, action: {type: string, payload: CardType}) => {
    switch(action.type) {
        case 'ADD_CARD' :
            return [...state, action.payload]; 
        case 'EDIT_CARD':
          return state.map((card) => {
            if (card.id === action.payload.id) {
              return { ...card, text: action.payload.text, price: action.payload.price };
            }
            return card;
          });
        case 'DELETE_CARD': 
          return [...state.filter((card) => card.id !== action.payload.id)]    
        default:
          return state;
    }
}