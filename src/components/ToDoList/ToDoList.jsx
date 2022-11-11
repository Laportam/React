import { useContext } from "react";

import { toDoContext } from "./ToDoContext";

import Button from "../Button";

import ToDoListStyle from './ToDoList.module.css';

const ToDoList = () => {
  const { toDoList } = useContext(toDoContext);
  return (
    <div className={ToDoListStyle.outlineBox}>
      <h4>Listado de Tareas</h4>
        <ul>
        { toDoList.map( toDo => {
            return <li key={toDo.date}>{`${toDo.name} - ${toDo.date}`}</li>
        })}
        </ul>
        <Button text="Borrar tareas"/>
    </div>
  )
}

export default ToDoList
