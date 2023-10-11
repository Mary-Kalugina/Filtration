export interface CardType {
    text: string;
    price: string;
    id: number
  }
  
export interface RootState {
  cardsReduser: CardType[];
}
  
export interface inputDataType{
    inputDataReduser: CardType;
}


export interface editReduser {
  editReduser: boolean
}

export interface cardsReduser {
  cardsReduser: CardType[];
}