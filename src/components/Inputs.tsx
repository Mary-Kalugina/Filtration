import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_CARD, CLEAR_INPUT, INPUT_VALUE, EDIT_MODE, EDIT_CARD} from "../redux/actionTypes";
import { inputDataType, editReduser, cardsReduser } from "../redux/types";

const Inputs: React.FC = () => {

  const dispatch = useDispatch();
  const posts = useSelector((state: cardsReduser) => state.cardsReduser);
  const { price, text, id} = useSelector((state: inputDataType) => state.inputDataReduser);
  const mode = useSelector((state: editReduser) => state.editReduser);

  const changePrice = (value: string) => {
    dispatch({
      type: INPUT_VALUE,
      payload: { price: value }
    });
  };

  const changeValue = (value: string) => {
    dispatch({
      type: INPUT_VALUE,
      payload: { text: value },
    });
  };

  const cancelEdit = () => {
    dispatch({
      type: CLEAR_INPUT,
    });
  };

const saveCard = () => {
  mode 
    ? dispatch({type: EDIT_CARD, payload: {text, price, id}}) 
    : dispatch({type: ADD_CARD, payload: {text, price, id: posts.length}}); 
  dispatch({type: EDIT_MODE, payload: false})
  cancelEdit();
}

  return (
    <div className="inputs">
      <input
        value={text}
        onChange={(e) => changeValue(e.target.value)}
        placeholder="Text"
      />
       <input
        value={price}
        onChange={(e) => changePrice(e.target.value)}
        placeholder="Price"
      />
      <button 
        className="save_btn" 
        onClick={() => saveCard()}>
        Save
        </button>
      {mode ? (
        <button 
          className="cancel_btn" 
          onClick={cancelEdit}>
          Cancel
        </button>
      ) : null}
    </div>
  );
};

export default Inputs;
