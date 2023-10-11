import React from 'react';
import Inputs from './components/Inputs';
import Card from './components/Card';
import SearchField from './components/Search';
import { useSelector } from "react-redux";
import { RootState, CardType, filter } from "./redux/types";

const App: React.FC = () => {
  const cards = useSelector((state: RootState) => state.cardsReduser);
  const searchText = useSelector((state: filter) => state.filter);

  const filterFc = () => {
    return cards.filter((card) => card.text.toLowerCase().includes(searchText.toLowerCase()));
  }
  const filteredCards = searchText ? filterFc() : cards;
  
  return (
    <>
      <SearchField/>
       <Inputs />
       {filteredCards?.length ? (filteredCards.map((card: CardType, index: number) => (
        <Card key={index} text={card.text} price={card.price} id={card.id}></Card>
       ))) : null}
    </>
  );
}

export default App;
