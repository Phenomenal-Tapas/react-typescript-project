import React, { useRef } from "react";
import classes from "./styles/NewTodo.module.css";

interface Props {
  onAddTodo: (text: string) => void;
}

const NewTodo: React.FC<Props> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = inputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    props.onAddTodo(enteredText);
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
