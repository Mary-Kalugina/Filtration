import React from 'react';
import Inputs from './components/Inputs';
import Card from './components/Card';
import { useSelector } from "react-redux";
import { RootState, CardType } from "./redux/types";

const App: React.FC = () => {
  const cards = useSelector((state: RootState) => state.cardsReduser);
  return (
    <>
       <Inputs />
       {cards?.length ? (cards.map((card: CardType, index: number) => (
        <Card key={index} text={card.text} price={card.price} id={card.id}></Card>
       ))) : null}
    </>
  );
}

export default App;
