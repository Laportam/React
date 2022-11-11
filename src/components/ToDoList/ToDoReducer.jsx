import { useReducer } from "react";

const initialState = [];

const toDoReducer = (state, action) => { 
  switch(action.type){
    case 'add':
      return [...state, action.payload]
    case 'reset':
      return []
    default:
      return state;
  }
}

const useToDoReducer = () => useReducer(toDoReducer, initialState);

export default useToDoReducer;