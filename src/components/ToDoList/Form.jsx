import { useState, useContext } from "react";

import { toDoContext } from "./ToDoContext";

import FormStyle from './Form.module.css';

const Form = () => {
    const { toDoHandlers } = useContext(toDoContext);
    const [inputText, setInputText] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        toDoHandlers.addTask(inputText);
        e.currentTarget.reset();
    }
  return (
    <form onSubmit={ e => submitHandler(e) } className={FormStyle.outlineBox}>
      <input
        type='text'
        onChange={ e => setInputText(e.currentTarget.value) }
        className={inputText == '' ? FormStyle.emptyInput : ''}
      />
      <button type='submit'>Agregar</button>
    </form>
  )
}

export default Form
