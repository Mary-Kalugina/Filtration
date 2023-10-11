import { CardType } from "./types";
  
const defaultState: CardType = {
    text: '',
    price: '',
    id: 0
};

export const inputDataReduser = (state = defaultState, action: {type: string, payload: CardType}) => {
    switch(action.type) {
        case 'INPUT_VALUE' :
            return {
                ...state,
                text: action.payload.text !== undefined ? action.payload.text : state.text,
                price: action.payload.price !== undefined ? action.payload.price : state.price,
                id: action.payload.id !== undefined ? action.payload.id : state.id
              };        
        case 'CLEAR_INPUT':
            return defaultState;
        default:
            return state;
    }
}