import React from "react";
import { Todo } from "../models/Todo";
import TodoItem from "./TodoItem";
import classes from "./styles/Todos.module.css";

interface Props {
  items: Todo[];
  handleRemoveTodo: (id: string) => void;
}

const Todos: React.FC<Props> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={props.handleRemoveTodo.bind(null,item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
