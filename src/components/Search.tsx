import React from "react";
import { FILTER } from "../redux/actionTypes";
import { useDispatch } from "react-redux";

const SearchField: React.FC = () => {
  const dispatch = useDispatch();

  return (
      <div className="search-field-container">
        <input
          className='search-field-input'
          onChange={(e) => {
            dispatch({type: FILTER, payload: e.target.value});
        }}
        />
      </div>
  )
}

export default SearchField;