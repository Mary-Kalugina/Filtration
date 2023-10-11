import React from "react";
import { useDispatch } from "react-redux";
import { INPUT_VALUE, DELETE_CARD, EDIT_MODE } from "../redux/actionTypes";

interface CardProps {
  price: string;
  text: string;
  id: number
}

const Card: React.FC<CardProps> = ({price, text, id}) => {

  const dispatch = useDispatch();
  const sendDispatches = () => {
    dispatch({type: INPUT_VALUE, payload: {text, price, id}});
    dispatch({type: EDIT_MODE, payload: true});
  }

 const deleteCard = () => {
    dispatch({type: DELETE_CARD, payload: id})
  }

  return (
    <div className="card">
      <div>{text}</div>
      <div>{price}</div>
      <button onClick={() => sendDispatches()}>Edit</button>
      <button onClick={() => deleteCard()}>Delete</button>
    </div>
  );
}

export default Card;
