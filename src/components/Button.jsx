import { toDoContext } from "./ToDoList/ToDoContext";
import { useContext } from "react";

const Button = (props) => {
  const { toDoHandlers } = useContext(toDoContext);
  return (
    <button onClick={ toDoHandlers.resetAllTask}>
      {props.text}
    </button>
  )
}

export default Button