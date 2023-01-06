import React, { useRef, useContext } from "react";
import TodosContext from "../store/TodosContext";
import classes from "./styles/NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = inputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    todosCtx.addTodo(enteredText);
    inputRef.current!.value = "";
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <label htmlFor="input-todo">Add Todo</label>
      <input type="text" name="todo" id="input-todo" ref={inputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
